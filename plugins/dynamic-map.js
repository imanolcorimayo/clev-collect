export default ({ $config: { baseUrl }, $toast }, inject) => {
  
    // Loading the leaflet library
    async function loadLeaflet() {
      if (typeof window.L !== "object") {
        await new Promise((resolve, reject) => {
          // CSS
          let link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "/css/leaflet-1.9.3.min.css";
          document.head.appendChild(link);
  
          // JS
          let script = document.createElement("script");
          script.src = "/js/leaflet-1.9.3.min.js";
          document.head.appendChild(script)
  
          function helper() {
            // Excecute this function once library is loaded
            resolve(window.L);
          }
  
          script.onreadystatechange = function () {
            if (this.readyState == "complete") helper();
          };
          script.onload = helper;
        });
      }
    }

    // Service area map, selecting area to serve collection
    async function createServiceAreaMap(circleRadius = 20, divClass, initialCoordinates, zoom) {
      // Load leaflet library if no exists
      await loadLeaflet();
      const L = window.L;
  
      // Function to create map into <div id = "map-id"></div>
      const createMap = function (L, center = [-31.416668, -64.183334], zoom, divClass) {
        const container = document.getElementById(divClass);
        const map = L.map(container, {
          zoomControl: true,
          dragging: true,
          zoomSnap: 0.01,
          attributionControl: true,
        }).setView(center, zoom);

        // Add map image into div
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: zoom + 5,
          minZoom: 11,
          style: 'main',
          ext: 'png'
        }).addTo(map);
  
        container.value = map;
        return container;
      };
  
      // Check if already exist and delete it to avoid conflicts
      removeIfExist(document.getElementById(divClass));
  
      // Creating map
      const map = createMap(L, initialCoordinates, zoom, divClass);
      const featureGroup = L.featureGroup().addTo(map.value);

      // Create the marker
      const CIRCLE = L.circle(initialCoordinates, {radius: circleRadius}).addTo(featureGroup);

      var isDragging = false

      CIRCLE.on('mousedown', function () {
        isDragging = true;
        map.value.dragging.disable();
      });

      var circleCoordinates = initialCoordinates;
      
      map.value.on('mousemove', function (event) {
        if (isDragging) {
          // Calculate the distance between the center and the current mouse position
          const distance = map.value.distance(circleCoordinates, event.latlng);

          console.log("distance: ", distance)
      
          // Calculate the new radius based on the distance
          const newRadius = circleRadius * (distance/10000) + distance;

          console.log("new : ",newRadius)
      
          // Update the circle's radius
          CIRCLE.setRadius(newRadius);
        }
      });

      map.value.on('drag', function () {
        circleCoordinates = map.value.getCenter();
        CIRCLE.setLatLng(circleCoordinates);
        console.log('center', circleCoordinates)
      });
      
      map.value.on('mouseup', function () {
        isDragging = false;
        map.value.dragging.enable();
      });

    }

    /** Potentially useful functions for the future */



    function mapFunctions(valueLocations, divClass, initialCoordinates, zoom, maxBound) {
        const mc = window.d3;
        // Function to create node coordinates, radius and area value
        const createNode = (point, props) => {
          const { x, y } = point;
          return { x, y, r: 10, a: Math.PI * 10 * 10, ...props };
        };
    
        // Function to create the circle marker
        const createMarker = function (latlng, props) {
          const marker = window.L.circleMarker(latlng, {
            radius: props.r,
            fillColor: "#545AFA",
            fillOpacity: 0.54,
            color: "#545AFA",
            weight: 1,
          });
          return marker;
        };
    
        // Function to create the custom marker with logo
        const createCustomMarker = function (latlng, props) {
          function findSittersInSet() {
            const filtered = valueLocations.filter((el) => {
              if (el.lat >= props.lat + props.r * 0.0005) return false;
              if (el.lat <= props.lat - props.r * 0.0005) return false;
              if (el.lng >= props.lng + props.r * 0.0005) return false;
              if (el.lng <= props.lng - props.r * 0.0005) return false;
              return true;
            });
    
            let string = "";
    
            for (let i = 0; i < filtered.length; i++) {
              string =
                string +
                `<span>${filtered[i].listing_title}</span><br /><a target="_blank" href="${baseUrl}/cat-sitters/${filtered[i].code}/${filtered[i].city}/${filtered[i].listing_slug}">Go to Sitter's profile</a><br />`;
            }
            return string;
          }
    
          // Html with logo and count property
          const htmlString = props.collided
            ? `<div class="sitters-number sitters-number-large">
              <span class="icon"></span>
              <span class="number">${props.count}</span>
              Sitters
          </div>`
            : `<div class="sitters-number sitters-number-large">
                <span class="icon"></span>
                <span class="number">${props.count}</span>
              </div>`;
    
          const customIcon = window.L.divIcon({
            className: "number-icon",
            iconSize: [50, 70],
            iconAnchor: [25, 50],
            popupAnchor: [3, -40],
            html: htmlString,
          });
    
          const iconMarker = window.L.marker(latlng, { icon: customIcon });
    
          let scoreString = "";
          for (let j = 0; j < props.review_score; j++) {
            scoreString = scoreString + '<span class="icon-star"></span>';
          }
    
          const popupContent = !props.collided
            ? `<div class="container-map">
            <div class="container-img-map">
              <a target="_blank" href="${baseUrl}/cat-sitters/${props.code}/${props.city}/${props.listing_slug}"><img class="img-map" src="${props.profile_pic}" alt="${props.listing_title}" title="${props.listing_title}" /></a>
            </div>
            <div class="container-info-map">
              <a target="_blank" href="${baseUrl}/cat-sitters/${props.code}/${props.city}/${props.listing_slug}">${props.listing_title}</a>
              <div class="stars">
                ${scoreString}
              </div>
              <span>(${props.review_num} reviews)</span>
              <a target="_blank" class="btn-map" href="${baseUrl}/cat-sitters/${props.code}/${props.city}/${props.listing_slug}">View this cat sitter now</a>
            </div>
            </div>`
            : "<strong>Cat sitters servicing this neighborhood: </strong><br />" + findSittersInSet();
          iconMarker.bindPopup(popupContent);
          // Event click in marker to show popup
          iconMarker.on("click", function (e) {
            this.openPopup();
          });
    
          return iconMarker;
        };
    
        // Function to create map into <div id = "map-wrap"></div>
        const createMap = function (L, view, zoom, divClass) {
          const container = document.getElementById(divClass);
          const map = L.map(container, {
            zoomControl: true,
            dragging: true,
            attributionControl: true,
            zoomSnap: 0.5,
          }).setView(view, zoom);
    
          // Add map image into div
          L.tileLayer("https://{s}.api.tomtom.com/map/1/tile/basic/{style}/{z}/{x}/{y}.{ext}?key={apikey}", {
            attribution: '<a href="https://tomtom.com" target="_blank">&copy; TomTom</a>',
            maxZoom: zoom + 5,
            minZoom: 11,
            apikey: tomtomApiKey,
            style: 'main',
            ext: 'png'
          }).addTo(map);
    
          container.value = map;
          return container;
        };
    
        // Check if already exist and delete it to avoid conflicts
        removeIfExist(document.getElementById(divClass));
    
        // Creating map
        const map = createMap(window.L, initialCoordinates, zoom, divClass);
        const featureGroup = window.L.featureGroup().addTo(map.value);
    
        // Creating nodes with data of DB
        const nodes = valueLocations?.map((el) => {
          const x = el.lat;
          const y = el.lng;
          // Converting coordinates into <Pint> value
          return createNode(map.value.latLngToLayerPoint([x, y]), el);
        });
    
        // On d3-marker-cluster update
        function ticked() {
          // Get cluster nodes:
          const current = this.nodes();
    
          // Filter nodes that collided
          let filtered = current.filter((d) => d.r != 0); // filter out dead nodes
    
          // heuristic ?
          //if (filtered.length !== current.length) {
          this.nodes(filtered); // faster iterations
          featureGroup.clearLayers(); // remove old layers
          filtered.forEach((c) => {
            // Converting <Point> value into <LatLng> value
            createCustomMarker(map.value.layerPointToLatLng([c.x, c.y]), c).addTo(featureGroup);
            return createMarker(map.value.layerPointToLatLng([c.x, c.y]), c).addTo(featureGroup);
          });
          //}
        }
    
        // init the cluster
        const cluster = mc.cluster().nodes(nodes).alpha(0.002).on("tick", ticked);
    
        // When we zoom
        function zoomend() {
          const liveZoom = map.value.getZoom();
          if (liveZoom === zoom + 2 || liveZoom === zoom) {
            cluster.stop(); // stop the cluster
            featureGroup.clearLayers(); // remove old layers
            // recompute the position of the nodes depending on actual zoom
            const data = cluster
              .nodes(
                valueLocations.map((el) => {
                  const x = el.lat;
                  const y = el.lng;
                  // Converting coordinates into <Pint> value
                  const node = createNode(map.value.latLngToLayerPoint([x, y]), el);
                  return node;
                })
              )
              .alpha(0.002); // update the data
            cluster.restart(); // start the clusterer
          }
        }
    
        // bind to zoom events
        map.value.on("zoomend", zoomend);
        // Set max mound if variable is not null
        if (maxBound) {
          const bounds = window.L.polygon(maxBound).getBounds();
          map.value.setMaxBounds(bounds);
          map.value.on("drag", function () {
            map.value.panInsideBounds(bounds, { animate: false });
          });
        }
    }
  
    async function mapInit(valueLocations, divClass, initialCoordinates, zoom, maxBound = false) {
      await loadLeaflet();
      if (typeof window.d3 !== "object") {
        let script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.src = "/static/js/d3.v7.8.2.min.js";
        document.head.appendChild(script1);
  
        function helper() {
          let script = document.createElement("script");
          script.src = "/static/js/d3-cluster.min.js";
          document.head.appendChild(script);
  
          function helper2() {
            mapFunctions(valueLocations, divClass, initialCoordinates, zoom, maxBound);
          }
  
          script.onreadystatechange = function () {
            if (this.readyState == "complete") helper2();
          };
          script.onload = helper2;
        }
  
        script1.onreadystatechange = function () {
          if (this.readyState == "complete") helper();
        };
        script1.onload = helper;
      } else {
        mapFunctions(valueLocations, divClass, initialCoordinates, zoom, maxBound);
      }
      return window.d3 ? window.d3 : false;
    }
  
    async function staticSimpleMap(divClass, userPosition, zoom) {
      // Load leaflet library if no exists
      await loadLeaflet();
      const L = window.L;
  
      // Function to create map into <div id = "map-id"></div>
      const createMap = function (L, center = [40.75065, -73.99718], zoom, divClass) {
        const container = document.getElementById(divClass);
        const map = L.map(container, {
          zoomControl: false,
          dragging: false,
          zoomSnap: 0.01,
          attributionControl: true,
        }).setView(center, zoom);
  
        // Add map image into div
        L.tileLayer("https://{s}.api.tomtom.com/map/1/tile/basic/{style}/{z}/{x}/{y}.{ext}?key={apikey}", {
          attribution: '<a href="https://tomtom.com" target="_blank">&copy; TomTom</a>',
          maxZoom: zoom,
          minZoom: zoom,
          apikey: tomtomApiKey,
          style: 'main',
          ext: 'png'
        }).addTo(map);
  
        container.value = map;
        return container;
      };
  
      // Check if already exist and delete it to avoid conflicts
      removeIfExist(document.getElementById(divClass));
  
      // Creating map
      const map = createMap(L, userPosition, zoom, divClass);
      const featureGroup = L.featureGroup().addTo(map.value);
  
      // Create the marker
      window.L.marker(userPosition).addTo(featureGroup);
    }
  
    async function chatMap(divClass, userPosition, zoom, city) {
      // Load leaflet library if no exists
      await loadLeaflet();
      const L = window.L;
  
      // Function to create map into <div id = "map-id"></div>
      const createMap = function (L, center = [40.75065, -73.99718], zoom, divClass) {
        const container = document.getElementById(divClass);
        const map = L.map(container, {
          zoomControl: true,
          dragging: true,
          zoomSnap: 0.01,
          attributionControl: true,
        }).setView(center, zoom);
  
        // Add map image into div      
        L.tileLayer("https://{s}.api.tomtom.com/map/1/tile/basic/{style}/{z}/{x}/{y}.{ext}?key={apikey}", {
          attribution: '<a href="https://tomtom.com" target="_blank">&copy; TomTom</a>',
          maxZoom: 15,
          minZoom: 2,
          apikey: tomtomApiKey,
          style: 'main',
          ext: 'png'
        }).addTo(map);
  
        container.value = map;
        return container;
      };
  
      // Check if already exist and delete it to avoid conflicts
      removeIfExist(document.getElementById(divClass));
  
      // Creating map
      const map = createMap(L, userPosition, zoom, divClass);
      const featureGroup = L.featureGroup().addTo(map.value);
  
      // Create the marker
      // window.L.marker(userPosition).addTo(featureGroup);
      window.L.circle(userPosition, { radius: 200, color: "#faaf19" }).bindTooltip(`${city}`).addTo(featureGroup);
    }
  
    /** Map with multiPolygons */
    async function staticMapWithPolygon(nodes, divClass, zoom, border, userPosition, useToolTip = true) {
      await loadLeaflet();
      const L = window.L;
      // Function to create the polygon marker
      const createMarker = function (latlng, L, color, zip) {
        const marker = L.polygon(latlng, {
          color,
        });
  
        // Event hover in marker to show title
        if (useToolTip) marker.bindTooltip(`Zip code: ${zip}`);
        return marker;
      };
  
      // Function to create map into <div id = "map-id"></div>
      const createMap = function (L, center = [40.75065, -73.99718], zoom, divClass) {
        const container = document.getElementById(divClass);
        const map = L.map(container, {
          zoomControl: false,
          dragging: true,
          zoomSnap: 0.01,
          attributionControl: true,
        }).setView(center, zoom);
  
        // Add map image into div
        L.tileLayer("https://{s}.api.tomtom.com/map/1/tile/basic/{style}/{z}/{x}/{y}.{ext}?key={apikey}", {
          attribution: '<a href="https://tomtom.com" target="_blank">&copy; TomTom</a>',
          maxZoom: 20,
          minZoom: 1,
          apikey: tomtomApiKey,
          style: 'main',
          ext: 'png'
        }).addTo(map);
  
        container.value = map;
        return container;
      };
  
      // Check if already exist and delete it to avoid conflicts
      removeIfExist(document.getElementById(divClass));
  
      // Creating map
      const map = createMap(L, userPosition, zoom, divClass);
      const featureGroup = L.featureGroup().addTo(map.value);
  
  
  
      // Insert markers on the map
      insertMarkers(createMarker, {featureGroup, map, nodes, L, color: "#545AFA", clickable: true} );
  
      /* // Create Marker for every set of service zone's nodes
      for (let i = 0; i < nodes.length; i++) {
        createMarker(nodes[i].points, L, "#545AFA", nodes[i].zip).addTo(featureGroup);
      } */
  
      // Check if userPosition exist and create the marker
      if (userPosition) {
        window.L.marker(userPosition).addTo(featureGroup);
      } else {
        // Using border to center the map
        map.value.fitBounds(createMarker([border], L, "#545AFA", "10001").getBounds());
      }
    }
  
    async function clickableArea(
      nodes, zipCenter, {
        divId,
        zoom,
        toggleZip,
        clickable = true
      } 
    ) {
      // Load library if not loaded already
      await loadLeaflet();
      const L = window.L;
  
      // Function to create the polygon marker
      const createMarker = function (latlng, L, color, zip) {
        const marker = L.polygon(latlng, {
          color,
        });
  
        // Event click in marker to select the zip
        // Only if clickable (default true)
        if(clickable) {
          marker.on("click", (elem) => {
            // Adding or removing zip
            toggleZip(zip);
          });
        }
  
        // Event hover in marker to show title with zip
        marker.bindTooltip(`Zip code: ${zip}`);
  
        return marker;
      };
  
      // Function to create map into <div id = "map-id"></div>
      const createMap = function (L, center, zoom, divId) {
        const container = document.getElementById(divId);
        const map = L.map(container, {
          zoomControl: true,
          dragging: true,
          zoomSnap: 0.01,
          attributionControl: true,
        }).setView(center, zoom);
  
        // Add map image into div
        L.tileLayer("https://{s}.api.tomtom.com/map/1/tile/basic/{style}/{z}/{x}/{y}.{ext}?key={apikey}", {
          attribution: '<a href="https://tomtom.com" target="_blank">&copy; TomTom</a>',
          maxZoom: 20,
          minZoom: 1,
          apikey: tomtomApiKey,
          style: 'main',
          ext: 'png'
        }).addTo(map);
  
        container.value = map;
        return container;
      };
  
      // Check if already exist and delete it to avoid conflicts
      removeIfExist(document.getElementById(divId));
  
      // Creating map
      const map = createMap(L, [zipCenter.lat, zipCenter.lng], zoom, divId);
      const featureGroup = L.featureGroup().addTo(map.value);
  
      // Insert markers on the map
      return insertMarkers(createMarker, {featureGroup, map, nodes, L, color: false, clickable} );
    }
  
    // Create Marker for every set of service zone's nodes
    function insertMarkers(createMarker, {featureGroup, map, nodes, L, color, clickable}) {
      // Save the layers on an array
      let layers = [];
      let zipCodeMarkers = {}; 
      for (let i = 0; i < nodes.length; i++) {
  
        // If not clickable and not used, do not create marker
        if(!clickable && !nodes[i].used) continue;
  
        // Create zip property filling all left 0 if number is minor to 10000
        const zipProperty = isNaN(nodes[i].zip) ? nodes[i].zip.padStart(5, "0") : nodes[i].zip.toString().padStart(5, "0"); 
  
        // Add marker yo the zipCodeMarkers object to use this object later
        zipCodeMarkers[zipProperty] = createMarker(nodes[i].points, L, color || (nodes[i].used ? "#545AFA" : "#7b7b7b"), nodes[i].zip, map);
        
        // Push to layers to be able to add one by one later
        layers.push(zipCodeMarkers[zipProperty]);
      }
  
      // Sort layers to avoid overlapping on bigger polygons. On this case, click event won't work for smaller polygons
      layers.sort((a, b) => {
        // if the second geometry (b) contains the first (a), the order must change so the layers don't overlap
        return b.getBounds().contains(a.getBounds()) ? 1 : -1;
      }).forEach(l => l.addTo(featureGroup));
  
      return zipCodeMarkers;
  
    }
  
    function removeIfExist(element) {
      // Check if already exist and delete it to avoid conflicts
      if (element && element.value) {
        element.value.remove();
      }
    }
  
    const map = {
      mapInit,
      staticMapWithPolygon,
      clickableArea,
      staticSimpleMap,
      chatMap,
      createServiceAreaMap
    };
  
    inject("d3", map);
  };
  