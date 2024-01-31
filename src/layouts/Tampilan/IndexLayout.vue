<template>
  <q-layout view="hhr LpR lfr">
    <HeaderLayout />
    <LeftDrawer />
    <q-page-container style="padding-top: 30px"
      ><router-view></router-view
    ></q-page-container>
  </q-layout>
</template>
<script setup>
import HeaderLayout from "./HederLayout.vue";
import LeftDrawer from "./LeftDrawer.vue";
</script>
