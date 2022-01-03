<template>
  <div class="building border border-secondary rounded p-2 mb-2" :class="{expanded: isExpanded}">
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="building-name fw-bold pe-3">{{building.name}}</div>
      <div class="building-name text-muted">id: {{building.id}}</div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? '&#9660;' : '&#9658;' }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr/>
      <div class="details d-flex">
        <button type="button" class="btn btn-danger" @click="deleteBuilding">Delete building</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
//import {API_HOST} from 'https://bruno-pasini.cleverapps.io/';



export default {
  name: 'BuildingsListItem',
  props: ['building'],
  data: function() {
    return {
      isExpanded: false,
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
  //  showWindows() {
  //    this.showingWindows = !this.showingWindows;
  //  },
  //  showHeaters() {
  //    this.showingHeaters = !this.showingHeaters;
  //  }
    //async switchWindow() {
    //  console.log('switch ' + this.window.id);
    //  let response = await axios.put(`https://bruno-pasini.cleverapps.io/api/windows/${this.window.id}/switch`);
    //  //this.window.windowStatus = !this.window.windowStatus;
    //  let updatedWindow = response.data;
    //  console.log(response.data);
    //  this.$emit('window-updated', updatedWindow);
    //},
    async deleteBuilding() {
      console.log('delete ' + this.building.id);
      let response = await axios.delete(`https://bruno-pasini.cleverapps.io/api/buildings/${this.building.id}/delete`);
      //this.window.windowStatus = !this.window.windowStatus;
      let updatedBuilding = response.data;
      console.log(response.data);
      this.$emit('building-updated', updatedBuilding);
    },
  }
}


</script>

<style lang="scss" scoped>

.buildingdetails ul{
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
