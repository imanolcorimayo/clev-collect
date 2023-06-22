export default (context, inject) => {
  const allMethods = {
    // Functions that are not using api's call
    // This function will excecute the callback function if the elements passed were clicked
    createClickedEvent: function (callback, elementId) {
      // We save the function to be returned
      const customEvent = (e) => {
        // This will check if event was clicked in or out of components passed using the id
        // Returns undefined when id is not matching
        const checker = elementId.find((element) => {
          // if the event is fired but the id is not found, it returns the default id
          let a = document.getElementById(element);
          if (a) return a.contains(e.target);
        });
        if (!checker) callback();
      };
      // Creating event listener
      window.addEventListener("click", customEvent, true);

      // Here we return the function loaded in the event because of if we wants to delete the event later
      return customEvent;
    },
    deleteClickedEvent: function (callback) {
      // Delete event
      window.removeEventListener("click", callback, true);
    },
    // Auxiliar function to formatting the dates
    getOrdinalNum(dom) {
      if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
      else if (dom == 22 || dom == 2) return dom + "nd";
      else if (dom == 23 || dom == 3) return dom + "rd";
      else return dom + "th";
    },
    // Open pdf in a new tab. This should receive a base64 encoded pdf
    newTabPdf(base64Pdf) {
      let pdfWindow = window.open("");
      pdfWindow.document.write(
        "<iframe width='100%' height='100%' src='data:application/pdf;base64, " + encodeURI(base64Pdf) + "'></iframe>"
      );
    },
    // Show or hide the spin loader, this should be used only on client mode
    switchLoader(show) {
        document.getElementById('preloader').setAttribute('style', `display: ${show ? 'block' : 'none'}` );
    }
  };

  inject("helpers", allMethods);
};
