<template>
    <div>
      <card class="card-map" title="Mapa de cámaras">
        <div class="map">
          <div id="map"></div>
        </div>
      </card>

      <br>

      <!--Stats cards-->
      <div class="row">
        <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
          <stats-card>
              <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
                <i :class="stats.icon"></i>
              </div>
              <div class="numbers" slot="content" >
              <p>{{stats.title}}</p>
              {{stats.value}}
            </div>           
          </stats-card>
        </div>
      </div>
    </div>    
</template>

<script>
import { StatsCard } from "@/components/index";
export default {
   components: {
    StatsCard
  },
  mounted() {
    var camara1 = new window.google.maps.LatLng(-27.983181, -57.106404);
    var camara2 = new window.google.maps.LatLng(-27.815503, -56.790567);
    var centro = new window.google.maps.LatLng(-27.896817, -56.930684);

    var mapOptions = {
      zoom: 10,
      center: centro,
      scrollwheel: true, // to disable de scroll over the map
    };

    var map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    var marker = new window.google.maps.Marker({
      position: camara1,
      title: "Camara 1"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    
  },
  data(){
    return {
      statsCards: [
        {
          type: "info",
          title: "Cámaras en la zona",
          value: "5",
          icon: "ti-video-camera",
        },
        {
          type: "warning",
          title: "Incendios en las últimas 24hrs",
          value: "2",
          icon: "ti-time",
        },
        {
          type: "danger",
          title: "Último incendio detectado",
          value: "Zona 1 - 10:08 hrs",
          icon: "ti-alert",
        }
      ],
    }
  }
};
</script>

<style>
</style>
