<template>
  <v-sheet
    class="d-flex justify-center align-center bg-variant-gradient site-header"
  >
    <div class="position-absolute rounded-lg title-box"></div>
    <div class="position-absolute rounded-lg title-box-outline"></div>
    <h1 class="header-title">Expenses Tracker</h1>
  </v-sheet>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <div class="bookmark"></div>
          <div class="card-border">
            <v-card-text>
              <p class="text-center px-5">
                This is a demo project and as such might be liable to bugs and
                minor issues. Please use it as intended or reload the page to
                start anew.
              </p>
              <h3 class="text-center mt-2">
                This is a little showcase that will contain the following:
              </h3>
              <v-timeline side="end">
                <v-timeline-item
                  size="x-small"
                  dot-color="primary"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-alert>
                    {{ item }}
                  </v-alert>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" variant="flat" @click="goToLanding"
                >Let's get started</v-btn
              >
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card height="100%" image="@/assets/Strawberries.jpg">
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "index",
  setup() {
    const router = useRouter();
    const items: string[] = [
      "404 Page: That should redirect you to the dashboard or back here should you want it to.",
      "Landing Page: A page that shows an overview of the expenses and allows you to add something new to it",
    ];

    function goToLanding() {
      router.push("/dashboard");
    }

    return { items, goToLanding };
  },
});
</script>
