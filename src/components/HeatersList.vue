<template>
  <div class="heaters-list pt-3">
    <heaters-list-item 
      v-for="heater in heaters"
      :heater="heater"
      :key="heater.id"  
      @heater-updated="updateHeater"
    >
    </heaters-list-item>
  </div>
</template>


<script>
import axios from 'axios';
//import {API_HOST} from '../config';
import WindowsListItem from './WindowsListItem';
import HeatersListItem from './HeatersListItem';

export default {
  components: {
    HeatersListItem
  },
  name: 'HeatersList',
  data: function() {
    return {
      /* Initialize windows with an empty array, while waiting for actual data to be retrieved from the API */
      heaters: []
    }
  },
  created: async function() {
    let response = await axios.get(`https://bruno-pasini.cleverapps.io/api/heaters`);
    let heaters = response.data;
    this.heaters = heaters;
  },
  methods: {
    updateHeater(newHeater) {
      let index = this.heaters.findIndex(heater => heater.id === newHeater.id);
      this.heaters.splice(index, 1, newHeater);
    }
  }
}
</script>
