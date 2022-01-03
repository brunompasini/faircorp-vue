<template>
  <div class="window border border-secondary rounded p-2 mb-2" :class="{expanded: isExpanded}">
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="heater-name fw-bold pe-3">{{heater.name}}</div>
      <div v-if="heater.power != null" class="room-name text-muted">{{heater.power}} Watts</div>
      <div v-else class="room-name text-muted"> Power not defined </div>

      <div class="open-status ms-4" :class="{on: isHeaterOn, off: !isHeaterOn}">
        <template v-if="isHeaterOn">
          <span class="icon">&#x2B24;</span> ON
        </template>
        <template v-else>
          <span class="icon">&#x2716;</span> OFF
        </template>
      </div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? '&#9660;' : '&#9658;' }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr/>
      <div class="details d-flex">
        <button type="button" class="btn btn-secondary me-2" @click="switchHeater">{{ isHeaterOn ? 'Turn off' : 'Turn on' }} heater</button>
        <button type="button" class="btn btn-danger" @click="deleteHeater">Delete heater</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import { debounce } from 'debounce';
//import {API_HOST} from 'https://bruno-pasini.cleverapps.io/';

export default {
  name: 'HeatersListItem',
  props: ['heater'],
  data: function() {
    return {
      isExpanded: false,
    }
  }, 
  computed: {
    isHeaterOn: function() {
      return this.heater.heaterStatus === 'ON'; 
    },
  //  name_of_room: function() {
  //    return this.window.roomName;
  //  }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async switchHeater() {
      console.log(this.heater.id+' switch');
      let response = await axios.put(`https://bruno-pasini.cleverapps.io/api/heaters/${this.heater.id}/switch`);
      //this.window.windowStatus = !this.window.windowStatus;
      let updatedHeater = response.data;
      console.log(response.data);
      this.$emit('heater-updated', updatedHeater);
    },
    async deleteHeater() {
      console.log(this.heater.id+' delete');
      let response = await axios.put(`https://bruno-pasini.cleverapps.io/api/heaters/${this.heater.id}/delete`);
      //this.window.windowStatus = !this.window.windowStatus;
      let deletedHeater = response.data;
      console.log(response.data);
      this.$emit('heater-updated', deletedHeater);
    }
    
  }
}
</script>

<style lang="scss" scoped>

.open-status {
  .icon {
    position: relative;
  }

  &.on {
    color: #198754;
    .icon {
      font-size: 12px;
      top: -3px;
    }
  }

  &.off {
    color: #dc3545;
  }
}

.window {
  .top-row {
    cursor: pointer;
  }
}
</style>
