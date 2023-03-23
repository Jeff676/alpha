import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        // Static Route
        {
            path: '/',
            name: 'UnderContruction',
            component: () => import('@/views/UnderConstruction.vue')
        },
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: () => import('@/views/Home.vue')
        // },
        // {
        //     // *** TODO: Protected route *** //
        //     path: '/panel',
        //     name: 'Panel',
        //     component: () => import('@/views/Panel.vue'),
        //     children: [
        //         {
        //             path: '/patients',
        //             component: () => import('@/views/Panel/Patients.vue')
        //         },
        //         {
        //             path: '/doctors',
        //             component: () => import('@/views/Panel/Doctors.vue')
        //         },
        //         {
        //             path: '/nurses',
        //             component: () => import('@/views/Panel/Nurses.vue')
        //         },
        //         {
        //             path: '/users',
        //             component: () => import('@/views/Panel/Users.vue')
        //         },
        //         {
        //             path: '/medicalcenters',
        //             component: () => import('@/views/Panel/MedicalCenters.vue')
        //         },
        //         {
        //             path: '/kpis',
        //             component: () => import('@/views/Panel/kpis.vue')
        //         },
        //     ]
        // },
        // // ** TODO: Nested routes **
        //     {
        //         path: '/signupoptions',
        //         name: 'Signupoptions',
        //         component: () => import('@/views/Signupoptions.vue')
        //     },
        //     {
        //         path: '/signup/doctors',
        //         name: 'Signupdoctors',
        //         component: () => import('@/views/signup/Doctors.vue')
        //     },
        //     {
        //         path: '/signup/medicalcenters',
        //         name: 'Signupmedicalcenters',
        //         component: () => import('@/views/signup/MedicalCenters.vue'),
        //         children: [
        //             {
        //                 path: '/basic',
        //                 component: () => import('@/views/signup/MedicalCenter/Step1.vue')
        //             },
        //             {
        //                 path: '/contact',
        //                 component: () => import('@/views/signup/MedicalCenter/Step2.vue')
        //             },
        //             {
        //                 path: '/golden',
        //                 component: () => import('@/views/signup/MedicalCenter/Step3.vue')
        //             },
        //             {
        //                 path: '/validate',
        //                 component: () => import('@/views/signup/MedicalCenter/Step4.vue')
        //             },
        //             {
        //                 path: '/finish',
        //                 component: () => import('@/views/signup/MedicalCenter/Step5.vue')
        //             },
        //         ]
        //     },
        //     {
        //         path: '/signup/profesionals',
        //         name: 'Signupprofesionals',
        //         component: () => import('@/views/signup/Profesionals.vue')
        //     },
        // // *** *** ***

        // {
        //     path: '/about',
        //     name: 'About',
        //     component: () => import('@/views/About.vue')
        // },
        // {
        //     path: '/signup',
        //     name: 'Singup',
        //     component: () => import('@/views/Signup.vue')
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: () => import('@/views/Login.vue')
        // }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 50,
                behavior: 'smooth'
            }
        }
    },
})

export default router