<template>
  <div class="room border border-secondary rounded p-2 mb-2" :class="{expanded: isExpanded}">
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="room-name fw-bold pe-3">{{room.name}}</div>
      <div class="room-name text-muted">id: {{room.id}}</div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? '&#9660;' : '&#9658;' }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr/>
      <div class="details d-flex">
        <div class="roomdetails">
          <ul>
            <li>Building : {{room.buildingId}}</li>
            <li>Floor : {{room.floor}}</li>
            <li>Current Temperature : {{room.current_temperature}} C</li>
            <li>Target Temperature : {{room.current_temperature}} C</li>
          </ul>
          <div class="details d-flex">
            <button type="button" class="btn btn-primary me-1" @click="showHeaters">Show Heaters</button>
            <button type="button" class="btn btn-primary me-2" @click="showWindows">Show Windows</button>
            <button type="button" class="btn btn-danger" @click="deleteRoom">Delete Room</button>
          </div>
          <div v-if="showingHeaters"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
//import {API_HOST} from 'https://bruno-pasini.cleverapps.io/';


export default {
  name: 'RoomsListItem',
  props: ['room'],
  data: function() {
    return {
      isExpanded: false,
      showingWindows: false,
    }
  }, 
  //computed: {
  //  isWindowOpen: function() {
  //    return this.window.windowStatus === "OPEN";
  //  },
  //  name_of_room: function() {
  //    console.log(this.window.windowName);
  //    return this.window.roomName;
  //  }
  //},
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async showWindows() {
      this.showingWindows = !this.showingWindows;
      let response = await axios.get(`https://bruno-pasini.cleverapps.io/api/windows/room/${this.room.id}/`);
      let roomsWindows = response.data;
      let alertMessage = "";
      roomsWindows.forEach(element => {
        alertMessage = alertMessage + 'name: ' + element.name + '  id: ' + element.id + '  status: ' + element.windowStatus + '\n';
      });
      alert(alertMessage);
    },
    async showHeaters() {
      this.showingHeaters = !this.showingHeaters;
      let response = await axios.get(`https://bruno-pasini.cleverapps.io/api/heaters/room/${this.room.id}/`);
      let roomsHeaters = response.data;
      let alertMessage = "";
      roomsHeaters.forEach(element => {
        alertMessage = alertMessage + 'id: '+ element.id + '  power: ' + element.power + '  status: ' + element.heaterStatus +'\n';
      });
      alert(alertMessage);
    },
    //async switchWindow() {
    //  console.log('switch ' + this.window.id);
    //  let response = await axios.put(`https://bruno-pasini.cleverapps.io/api/windows/${this.window.id}/switch`);
    //  //this.window.windowStatus = !this.window.windowStatus;
    //  let updatedWindow = response.data;
    //  console.log(response.data);
    //  this.$emit('window-updated', updatedWindow);
    //},
    async deleteRoom() {
      console.log('delete ' + this.room.id);
      let response = await axios.delete(`https://bruno-pasini.cleverapps.io/api/rooms/${this.room.id}/delete`);
      //this.window.windowStatus = !this.window.windowStatus;
      let updatedRoom = response.data;
      console.log(response.data);
      this.$emit('room-updated', updatedRoom);
    }
  }
}


</script>

<style lang="scss" scoped>

.roomdetails ul{
  text-align: left;
  list-style: none;
}
.open-status {
  .icon {
    position: relative;
  }

  &.open {
    color: #198754;
    .icon {
      font-size: 12px;
      top: -3px;
    }
  }

  &.closed {
    color: #dc3545;
  }
}

.window {
  .top-row {
    cursor: pointer;
  }
}
</style>
