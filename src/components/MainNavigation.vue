<template>
  <div>


    <div v-if="activeTab == 'windows'">
      <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" @click="activeTab = 'windows'">
          <a class="nav-link active" href="#">Windows</a>
        </li>
        <li class="nav-item" @click="activeTab = 'heaters'">
          <a class="nav-link" href="#">Heaters</a>
        </li>
        <li class="nav-item" @click="activeTab = 'rooms'">
            <a class="nav-link" href="#">Rooms</a>
        </li>
        <li class="nav-item" @click="activeTab = 'buildings'">
            <a class="nav-link" href="#">Buildings</a>
        </li>
      </ul>
      <windows-list></windows-list>
    </div>

    <div v-if="activeTab == 'heaters'">
      <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" @click="activeTab = 'windows'">
          <a class="nav-link" href="#">Windows</a>
        </li>
        <li class="nav-item" @click="activeTab = 'heaters'">
          <a class="nav-link active" href="#">Heaters</a>
        </li>
        <li class="nav-item" @click="activeTab = 'rooms'">
            <a class="nav-link" href="#">Rooms</a>
        </li>
        <li class="nav-item" @click="activeTab = 'buildings'">
            <a class="nav-link" href="#">Buildings</a>
        </li>
      </ul>
      <heaters-list></heaters-list>
    </div>
    <div v-if="activeTab == 'rooms'">
      <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" @click="activeTab = 'windows'">
          <a class="nav-link" href="#">Windows</a>
        </li>
        <li class="nav-item" @click="activeTab = 'heaters'">
          <a class="nav-link" href="#">Heaters</a>
        </li>
        <li class="nav-item" @click="activeTab = 'rooms'">
            <a class="nav-link active" href="#">Rooms</a>
        </li>
        <li class="nav-item" @click="activeTab = 'buildings'">
            <a class="nav-link" href="#">Buildings</a>
        </li>
      </ul>
      <rooms-list></rooms-list>
    </div>
    <div v-if="activeTab == 'buildings'">
      <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" @click="activeTab = 'windows'">
          <a class="nav-link" href="#">Windows</a>
        </li>
        <li class="nav-item" @click="activeTab = 'heaters'">
          <a class="nav-link" href="#">Heaters</a>
        </li>
        <li class="nav-item" @click="activeTab = 'rooms'">
            <a class="nav-link" href="#">Rooms</a>
        </li>
        <li class="nav-item" @click="activeTab = 'buildings'">
            <a class="nav-link active" href="#">Buildings</a>
        </li>
      </ul>
      <buildings-list></buildings-list>
    </div>

    <img src="../assets/faircorp.png">
  </div>

</template>


<script>
import WindowsList from './WindowsList.vue';
import HeatersList from './HeatersList.vue';
import RoomsList from './RoomsList.vue';
import BuildingsList from './BuildingsList.vue'
export default {
  name : 'MainNavigation',
  components : {
    WindowsList,
    HeatersList,
    RoomsList,
    BuildingsList
  },
  data : function () {
    return {
      activeTab: "windows"
    }
  }

}
</script>
