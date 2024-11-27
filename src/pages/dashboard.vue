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
        graph </v-col>
      <v-col cols="4"> 
        graph </v-col>
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
  setup() {},
});
</script>
