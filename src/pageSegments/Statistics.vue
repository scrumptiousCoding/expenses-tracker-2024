<template>
  <v-card height="70" image="@/assets/Strawberries.jpg" class="mb-3"></v-card>
  <info-card title="Income" :amount="999999999.99" />
  <info-card title="Fixed Expenses" :amount="999999999.99" />
  <info-card title="Other Expenses" :amount="999999999.99" />
  <info-card title="Savings" :amount="999999999.99" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import infoCard from "../components/infoCard.vue";

export default defineComponent({
  components: { infoCard },
  name: "Statistics",
  setup() {},
});
</script>
