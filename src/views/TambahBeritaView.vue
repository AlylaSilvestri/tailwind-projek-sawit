<template>
  <div class="min-h-screen bg-lime-100 p-4 sm:p-10">
    <div class="max-w-5xl mx-auto bg-lime-100 rounded-3xl">
      <h1 class="text-4xl font-extrabold text-green-900 mb-8">Tambah Artikel</h1>

      <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
        <!-- Bagian atas: Thumbnail + Judul & Sub Judul -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Upload Thumbnail -->
          <div class="col-span-1">
            <label class="label">
              <span class="label-text text-green-900 font-medium">Upload Thumbnail</span>
            </label>
            <div
              class="border-dashed border-4 border-green-400 bg-white rounded-xl h-40 flex items-center justify-center cursor-pointer"
              @click="triggerFile"
            >
              <div class="text-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 5h14v10.586l-3.293-3.293a1 1 0 0 0-1.414 0L11 16l-2.293-2.293a1 1 0 0 0-1.414 0L5 16.586V5z" />
                </svg>
                <span v-if="!thumbnail">Klik untuk upload</span>
                <span v-else class="text-sm">{{ thumbnail.name }}</span>
              </div>
              <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
            </div>
          </div>

          <!-- Judul & Sub Judul -->
          <div class="col-span-1 md:col-span-2 grid grid-cols-1 gap-6">
            <!-- Input Judul -->
            <div>
              <label class="label">
                <span class="label-text text-green-900 font-medium">Judul</span>
              </label>
              <input v-model="judul" type="text" placeholder="Masukkan judul" class="input input-bordered w-full rounded-full" />
            </div>

            <!-- Input Sub Judul -->
            <div>
              <label class="label">
                <span class="label-text text-green-900 font-medium">Sub Judul</span>
              </label>
              <input v-model="subJudul" type="text" placeholder="Masukkan sub judul" class="input input-bordered w-full rounded-full" />
            </div>
          </div>
        </div>

        <!-- Isi Artikel -->
        <div class="col-span-1">
          <label class="label">
            <span class="label-text text-green-900 font-medium">Isi Artikel</span>
          </label>
          <textarea
            v-model="isiArtikel"
            placeholder="Masukkan isi artikel"
            class="textarea textarea-bordered w-full min-h-[10rem] rounded-2xl"
          ></textarea>
        </div>

        <!-- Tombol -->
        <div class="col-span-1 flex justify-start mt-4">
          <button type="submit" class="btn bg-green-700 hover:bg-green-800 text-white text-lg rounded-full px-8 py-2">
            Tambahkan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const judul = ref('')
const subJudul = ref('')
const isiArtikel = ref('')
const thumbnail = ref(null)
const fileInput = ref(null)

const triggerFile = () => {
  fileInput.value.click()
}

const handleFileUpload = (e) => {
  thumbnail.value = e.target.files[0]
}

const submitForm = () => {
  console.log('Judul:', judul.value)
  console.log('Sub Judul:', subJudul.value)
  console.log('Isi Artikel:', isiArtikel.value)
  console.log('Thumbnail:', thumbnail.value)
}
</script>

<style scoped>
</style>
