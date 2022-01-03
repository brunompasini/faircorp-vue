<template>
  <div class="building-list pt-3">
    <buildings-list-item 
      v-for="building in buildings"
      :building="building"
      :key="building.id"  
      @building-updated="updateBuilding"
    >
    </buildings-list-item>
  </div>
</template>


<script>
import axios from 'axios';
//import {API_HOST} from '../config';
import BuildingsListItem from './BuildingsListItem';

export default {
  components: {
    BuildingsListItem
  },
  name: 'BuildingsList',
  data: function() {
    return {
      /* Initialize windows with an empty array, while waiting for actual data to be retrieved from the API */
      buildings: []
    }
  },
  created: async function() {
    let response = await axios.get(`https://bruno-pasini.cleverapps.io/api/buildings`);
    let buildings = response.data;
    this.buildings = buildings;
    console.log(buildings.id);
  },
  methods: {
    updateBuilding(newBuiding) {
      /* Find the place of window objectw ith the same Id in the array, and replace it */
      let index = this.buildings.findIndex(building => building.id === newBuiding.id);
      this.buildings.splice(index, 1, newBuiding);
    }
  }
}
</script>
