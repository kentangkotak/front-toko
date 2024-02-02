<template>
  <q-layout class="bg-red-1">
    <q-page-container>
      <q-page class="home-page window-height window-width row justify-center items-center ">
        <q-card class="row flex inline shadow-box flex-center shadow-21 justify-center q-pa-md bg-red-3 pigura">
          <div
            class="self-center wewfont"
            style="margin-bottom: -100px;"
          >
            <q-item-label style="color: blue;">
              <em><u>SISTEM APLIKASI TOKO <b>"GN"</b></u></em>
            </q-item-label>
          </div>

          <div
            class="self-center "
            style="width: 600px; height: 300px;"
          >
            <div class="row col-5">
              <div
                class="row"
                style="border-right-style: solid;border-color:blue;border-bottom-style:solid;"
              >
                <div
                  class="col self-center"
                  style="width:110px;margin-right: 10px;"
                >
                  <q-img
                    src="gambars/monitor.png"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col self-center">
                  <q-form
                    ref="myForm"
                    style="width: 450px;margin: 0px auto;"
                    class="q-gutter-md"
                    @submit="onSubmit"
                    @reset="onReset"
                  >
                    <q-input
                      v-model="form.username"
                      autofocus
                      filled
                      label="User Name*"
                      bg-color="white"
                      style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"
                      error-message="User Name Tidak Boleh kosong"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Masukkan Username Anda']"
                    />

                    <q-input
                      v-model="form.pass"
                      filled
                      type="password"
                      label="Password"
                      bg-color="white"
                      error-message="Password Tidak Boleh kosong"
                      style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Masukkan Password Anda']"
                    />
                    <div>
                      <q-btn
                        label="Login"
                        type="submit"
                        color="negative"
                      />
                          &nbsp;
                      <q-btn
                        label="Reset"
                        type="reset"
                        color="negative"
                      />
                    </div>
                  </q-form>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useAuthStore } from 'src/stores/auth'
const $q = useQuasar()

const myForm = ref(null)
const form = ref({
  username: '',
  pass: '',
})

const storeAuth = useAuthStore()
function onSubmit () {
  const formData = new FormData()
  formData.append('email', form.value.username + '@app.com')
  formData.append('password', form.value.pass)
  storeAuth.login(formData)
}

function resetform() {
  const formData = new FormData()
  this.form.username.value = ''

}

</script>

<style lang="scss" scoped>
.wewfont{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: xx-large;
  font-style: italic;

}

.pigura{
  width: 700px;height: 500px;
  border-top-left-radius: 1000px;
  border-bottom-right-radius: 1000px;
}
</style>
