<template>
    
    <v-card height="70" image="@/assets/Strawberries.jpg" class="mb-3">
        </v-card>
    
    <v-card class="mb-3">
        <div class="bookmark-right"></div>
        <div class="card-border">
        <v-card-text>
            <p class="info-card-title" style="font-size: small;">
                Income
            </p>
            <h3>
                R 999 999 999.00
            </h3>
        </v-card-text>
        </div>
    </v-card>

    <div class="d-flex flex-wrap">
        <v-card class="flex-1-1">
            <v-card-text>
                Income
            </v-card-text>
        </v-card>
        <v-card class="flex-1-1">
            <v-card-text>
                Fixed expenses231
            </v-card-text>
        </v-card>
    </div>
    <div class="d-flex flex-wrap">
        <v-card class="flex-1-1">
            <v-card-text>
                Other expenses
            </v-card-text>
        </v-card>
        <v-card class="flex-1-1">
            <v-card-text>
                Add movement
            </v-card-text>
        </v-card>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Statistics",
    setup() {
    },
  });
  </script>
  