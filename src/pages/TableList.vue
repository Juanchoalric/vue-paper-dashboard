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
    </div> 
</template>

<script>
import { PaperTable } from "@/components";
import { StatsCard } from "@/components/index";
const tableColumns = ["Alerta", "Fecha", "Zona", "Tipo", "Foto", "Falsa"];
const tableData = [
  {
    alerta: 1,
    fecha: "Dakota Rice",
    zona: "$36.738",
    tipo: "Niger",
    foto: "Oud-Turnhout",
    falsa: 1
  },
  {
    alerta: 2,
    fecha: "Minerva Hooper",
    zona: "$23,789",
    tipo: "Curaçao",
    foto: "Sinaai-Waas",
    falsa: 0
  },
  {
    alerta: 3,
    fecha: "Sage Rodriguez",
    zona: "$56,142",
    tipo: "Netherlands",
    foto: "Baileux",
    falsa: 0
  },
  {
    alerta: 4,
    fecha: "Philip Chaney",
    zona: "$38,735",
    tipo: "Korea, South",
    foto: "Overland Park",
    falsa: 0
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
          icon: "ti-alert",
          value: "1",
        },
        {
          type: "danger",
          title: "Incendios reales",
          icon: "ti-check-box",
          value: "4",
        }
      ],     
    };
  }
};
</script>

<style>
</style>
