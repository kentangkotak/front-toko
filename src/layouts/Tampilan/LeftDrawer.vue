<template>
  <q-drawer
    v-model="drawerLeft"
    show-if-above
    :width="300"
    :breakpoint="700"
    elevated
  >
    <q-scroll-area class="fit">
      <div class="q-pa-md" style="max-width: 300px">
        <q-list bordered padding class="rounded-borders text-primary">
          <q-expansion-item class="bg-indigo text-white">
            <template #header>
              <q-item-section>MASTER</q-item-section>
            </template>
            <q-list>
              <q-item
                clickable
                v-ripple
                active-class="my-menu-link"
                to="/masteruser"
                class="bg-indigo-1 text-dark"
              >
                <q-item-section avatar>
                  <q-icon name="supervisor_account" />
                </q-item-section>
                <q-item-section class="text-bold"> User</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                active-class="my-menu-link"
                to="/masterbarang"
                class="bg-indigo-1 text-dark"
              >
                <q-item-section avatar>
                  <q-icon name="work_outline" />
                </q-item-section>

                <q-item-section class="text-bold">Barang</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>

            <q-item-section>Trash</q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>Settings</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>Help</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>
<script setup>
import { ref } from "vue";

const drawerLeft = ref(true);
</script>
