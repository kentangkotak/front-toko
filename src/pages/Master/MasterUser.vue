<template>
  <div class="q-pa-md">
    <q-btn label="ADD" color="indigo" style="left: auto" type="submit" />
    <q-space />
    <q-table
      class="my-sticky-header-table"
      bordered
      :rows="listuser.items"
      :columns="listuser.columns"
      row-key="name"
      separator="cell"
    />

    <!-- <q-btn :label="listuser.count" @click="listuser.getDataTable()"></q-btn>
    <div v-if="$q.platform.is.ios">Gets rendered only on iOS platform.</div> -->
  </div>
</template>
<script setup>
import { useListUser } from "src/stores/master/table";

const listuser = useListUser();
listuser.getDataTable();
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  //height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $indigo-2

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
