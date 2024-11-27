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
      <v-col cols="10">
        <v-card>
          
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-btn block>Add new</v-btn>
        <v-btn block>Fixed Expenses</v-btn>
        <v-btn block>Other Expenses</v-btn>
        <v-btn block>Income</v-btn>
        <v-btn block>Savings</v-btn>

        
        <v-card height="255" image="@/assets/Strawberries.jpg" class="mb-3"></v-card>
      </v-col>
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
      const  desserts= [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ]
      return {options, series, desserts}
  },
});
</script>
