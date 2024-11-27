<template>
    <v-card class="mb-3">
        <div class="bookmark-right"></div>
        <div class="card-border">
        <v-card-text>
            <p class="info-card-title">
                {{ props.title }}
            </p>
            <h3>
                R {{ props.amount }}
            </h3>
        </v-card-text>
        </div>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "InfoCard",
    props: {
        title: String,
        amount: Number
    },
    setup(props) {
        return {props}
    },
  });
  </script>
  