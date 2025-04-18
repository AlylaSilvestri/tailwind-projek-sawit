import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import DashboardView from "../views/DashboardView.vue";
import TugasView from "../views/TugasView.vue";
import DataPengepul from "../views/DataPengepulView.vue";
import TambahPengepul from "../views/TambahDataPengepulView.vue";
import DataBeritaView from "../views/DataBeritaView.vue";
import TambahBeritaView from "../views/TambahBeritaView.vue";
import EditBeritaView from "../views/EditBeritaView.vue";
import DataStatistikView from "../views/DataStatistikView.vue";
import DataJadwalView from "../views/DataJadwalView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: "/",
        //     name: 'main',
        //     component: MainView
        // },
        {
            path: "/",
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: "/tugas",
            name: 'tugas',
            component: TugasView
        },
        {
            path: '/data-pengepul',
            name: 'DataPengepul',
            component: DataPengepul
        },
        {
            path: '/tambah-pengepul',
            name: 'TambahPengepul',
            component: TambahPengepul
        },
        {
            path: '/data-berita',
            name: 'DataBerita',
            component: DataBeritaView
        },
        {
            path: '/tambah-berita',
            name: 'TambahBerita',
            component: TambahBeritaView
        },
        {
            path: '/edit-berita',
            name: 'EditBerita',
            component: EditBeritaView
        },
        {
            path: '/data-statistik',
            name: 'DataStatistik',
            component: DataStatistikView
        },
        {
            path: '/data-jadwal',
            name: 'DataJadwal',
            component: DataJadwalView
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfileView
        },
    ]
})

export default router