<template>
    <div>
      <!--Filters-->
      <card title="Filtrar por" sub-title="">
        <div>
          <div class="row">
            <div class="col-md-3">
              <select name="mes_id" @change="onChange($event)"  class="form-select form-control">
                  <option>Mes</option>
                  <option value="enero">Enero</option>
                  <option value="feb">Febrero</option>
                  <option value="marzo">Marzo</option>
              </select>
            </div>
            <div class="col-md-3">
              <select name="ubicacion_id" @change="onChange($event)"  class="form-select form-control">
                  <option>Ubicación</option>
                  <option value="zona1">Zona 1</option>
                  <option value="zona2">Zona 2</option>
                  <option value="zonaotro">Otro</option>
              </select>
            </div>
            <div class="col-md-3">
              <select name="tipo_id" @change="onChange($event)"  class="form-select form-control">
                  <option>Tipo de cámara</option>
                  <option value="tipofija">Fija</option>
                  <option value="tipomovil">Móvil</option>
              </select>
            </div>
            <div class="col-md-3">
              <p-button round outline block>Filtrar</p-button>
            </div>
          </div>
        </div>
      </card>

      <br>

      <!--Main table-->
      <div class="row">
        <div class="col-12">
          <card :title="table1.title" :subTitle="table1.subTitle">
            <div slot="raw-content" class="table-responsive">
              <paper-table :data="table1.data" :columns="table1.columns">
              </paper-table>
            </div>
          </card>
        </div>
      </div>

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

      <!-- Mapa -->
      <card class="card-map" title="Incendios detectados">
        <div class="map">
          <div id="map"></div>
          
        </div>
      </card>


    </div> 
</template>

<script>
import { PaperTable } from "@/components";
import { StatsCard } from "@/components/index";
const tableColumns = ["id", "Alerta", "Fecha", "Zona", "Tipo", "Foto", "Falsa"];
const tableData = [
  {
    id: 1,
    alerta: "Camara 1",
    fecha: "2019-09-18T01:55:19",
    zona: "Zona 1",
    tipo: "Punto fijo",
    foto: "Ver foto",
    falsa: true
  },
  {
    id: 2,
    alerta: "Camara 1",
    fecha: "2019-09-18T01:55:19",
    zona: "Zona 1",
    tipo: "Punto fijo",
    foto: "Ver foto",
    falsa: false
  },
  {
    id: 3,
    alerta: "Camara 2",
    fecha: "2019-09-18T01:55:19",
    zona: "Zona 2",
    tipo: "Punto fijo",
    foto: "Ver foto",
    falsa: false
  },
  {
    id: 4,
    alerta: "Patrullero",
    fecha: "2019-09-18T01:55:19",
    zona: "-27.896817, -56.930684",
    tipo: "Punto móvil",
    foto: "Ver foto",
    falsa: false
  }

];

export default {
  components: {
    PaperTable,
    StatsCard
  },

  data() {
    return {
      table1: {
        title: "Alertas recientes",
        subTitle: "Haga clic en 'Fitlrar' para refrescar la tabla",
        columns: [...tableColumns],
        data: [...tableData]
      }, 
      statsCards: [
        {
          type: "info",
          title: "Total incendios detectados",
          icon: "ti-bar-chart-alt",
          value: "5",
        },
        {
          type: "warning",
          title: "Falsas alarmas",
          icon: "ti-na",
          value: "1",
        },
        {
          type: "danger",
          title: "Incendios reales",
          icon: "ti-alert",
          value: "4",
        }
      ],     
    };
  },
  
  mounted() {
    var centro = new window.google.maps.LatLng(-27.896817, -56.930684);

    var locations = [
        {
          lat: -27.983181,
          lng: -57.106404,
          label: 'Camara 1'
        },
        {
          lat: -27.815503,
          lng: -56.790567,
          label: 'Camara 2'
        },
    ];

    var mapOptions = {
      zoom: 10,
      center: centro,
      scrollwheel: true, // to disable de scroll over the map
    };

    var map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    
    // To add the marker to the map, call setMap();
    var markers = [];
    
    for (let i = 0; i < locations.length; i++) {

        markers[i] = new window.google.maps.Marker
        ({
          position: locations[i],
          title: locations[i].label
        });
        
        markers[i].setMap(map);
    } 
  }
};
</script>

<style>
</style>
