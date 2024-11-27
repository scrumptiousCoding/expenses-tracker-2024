<template>
  <v-container>
    <v-row class="">
      <v-col cols="12">
        <quick-actions />
      </v-col>
      <v-col cols="4">
        <statistics />
      </v-col>
      <v-col cols="4"> 
        <apexchart type="donut" :options="options" :series="series"></apexchart>
      </v-col>
      <v-col cols="4">
        <apexchart type="donut" :options="options" :series="series"></apexchart>
      </v-col>
      <v-col cols="3"> fitting to the division 50/30/20 </v-col>
    </v-row></v-container
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuickActions from "../pageSegments/QuickActions.vue";
import Statistics from "../pageSegments/Statistics.vue";

export default defineComponent({
  components: { QuickActions, Statistics },
  name: "index",
  setup() {
    const options= {
        chart: {
          id: 'vuechart-example'
        },
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      }
      const series= [30, 40, 45, 50, 49, 60, 70, 91]
      return {options, series}
  },
});
</script>
