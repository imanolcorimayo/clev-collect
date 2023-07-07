<template>
  <section>
    <div class="container py-5 rounded" style="background-color: #eee">
      <div class="row">
        <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
          <h5 class="font-weight-bold mb-3 text-center">
            Users
          </h5>

          <div class="card">
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li v-for="(value, key) in rooms" :key="key" class="p-2 border-bottom" :class="{'room-selected': true}">
                  <button @click="changeRoom(key)" class="d-flex justify-content-between w-100">
                    <div class="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                        alt="avatar"
                        class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div class="pt-1">
                        <p class="fw-bold mb-0">John Doe</p>
                        <p class="small text-muted">Hello, Are you there?</p>
                      </div>
                    </div>
                    <div class="pt-1">
                      <p class="small text-muted mb-1">Just now</p>
                      <span class="badge bg-danger float-end">1</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 col-xl-8">
          <ul class="list-unstyled p-2" style="max-height: 60vh;overflow-y: scroll;">
            <li v-for="(m, i) in messages" :key="`${i}-message`" class="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start mx-3 shadow-1-strong"
                width="60"
              />
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Brad Pitt</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> {{$moment(m.timestamp).calendar()}}
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    {{m.message}}
                  </p>
                </div>
              </div>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <div class="card w-100">
                <div class="card-header d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> 13 mins ago
                  </p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                class="rounded-circle d-flex align-self-start mx-3 shadow-1-strong"
                width="60"
              />
            </li>
          </ul>
          <div class="mb-3 mt-2">
              <div class="form-floating">
                  <textarea v-model="message" class="form-control" placeholder="Write your message" id="floatingTextarea2" style="height: 100px"></textarea>
                  <label for="floatingTextarea2">Message</label>
              </div>
          </div>
          <button @click="sendMessage()" type="button" class="btn btn-info btn-rounded float-end">
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['userIsLogged'],
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  data() {
    return {
      message: '',
      room: false,
    }
  },
  async asyncData({$fire, store}) {
    // Init default values
    let messages = [];
    // This will be the list on the left side; we need to filter this by the current user uid
    const ROOMS = (await $fire.database.ref('rooms').orderByChild('user_uid').equalTo(store.state.user.uid).get()).val();

    // Get first room messages if no params to open a specific one
    if(Object.keys(ROOMS).length) {
      // First ROOMS key (first room id)
      messages = (await $fire.database.ref(`messages/${Object.keys(ROOMS)[0]}`).limitToLast(10).get()).val() 
      messages = messages || []
    }

    // TODO get collector or user information to show on the left side's list

    return {
      rooms: ROOMS,
      messages,
      room: Object.keys(ROOMS)[0]
    };
  },
  methods: {
    async sendMessage() {
      // Avoid sending when no message
      if(!this.message) return;

      try {

        const MESSAGE = {
          message: this.message,
          timestamp: new Date().valueOf(),
          author: this.user.uid
        }

        // Else, keep pushing messages
        await this.$fire.database.ref(`messages/${this.room}`).push(MESSAGE)

        this.messages = {...this.messages, 'temporary-key': MESSAGE} 

        // Clean up message
        this.message = '';
      } catch (error) {
        console.error(error)
      }
    },
    async changeRoom(roomId){
      // TODO add a loader

      // Get new room messages
      this.messages = await this.getRoomMessages(roomId)

      this.room = roomId
    },
    async getRoomMessages(roomId) {
      // Check if same room and return if so
      if(roomId == this.room) return this.messages

      try {
        // Get messages
        return (await this.$fire.database.ref(`messages/${roomId}`).limitToLast(10).get()).val() 

      } catch (error) {
        console.error(error)
        return {}
      }
    }
    // TODO: Create a function to change from user to collector
  }
}
</script>

<style scoped>

.room-selected {
  background-color: #eee
}

button {
	background: none;
	color: inherit;
	border: none;
	cursor: pointer;
	outline: inherit;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

</style>