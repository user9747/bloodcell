import Vue from 'vue'
import Router from 'vue-router'

import { store } from '../store/store'

import Hello from '@/components/Hello'
import Login from '@/components/login/Master'
import registerDonation from '@/components/registerDonation/Master'
import getMobile from '@/components/getMobile/Master'
import registerDonor from '@/components/registerDonor/Master'
import Success from '@/components/success'
import Dashboard from '@/components/dashboard/Master'
import searchDonors from '@/components/searchDonor/Master'
import selectDonors from '@/components/selectDonor/Master'
import postRequirement from '@/components/postRequirement/Master'
import createUser from '@/components/createUser/Master'
import uploadPage from '@/components/uploadPage/Master'
import landingPage from '@/components/landingPage/Master'
import requirementsPage from '@/components/requirementPage/Master'
import checkMobile from '@/components/createDonor/checkMobile.vue'
import createHospital from '@/components/Hospital/Master.vue'
import searchHospitals from '@/components/searchHospitals/Master.vue'
import donationHistory from '@/components/donationHistory/Master.vue'
import Failure from '@/components/failure/Master.vue'
Vue.use(Router)

export default new Router({

    mode: 'history',

    routes: [{
            path: '/',
            component: landingPage
                // beforeEnter: (to, from, next) => {
                //   if (!store.state.isAuthenticated) {
                //     next()
                //   } else {
                //     redirect: '/getmobile'
                //   }
                // }
        },
        {
            path: '/login',
            component: Login,
            name: 'foo',
            beforeEnter: (to, from, next) => {
                if (!store.state.isAuthenticated) {
                    next()
                } else {
                    redirect: '/getmobile'
                }
            }
        },
        {
            path: '/dash',
            component: Dashboard,
            name: 'dash',
            beforeEnter: (to, from, next) => {
                console.log("dash")
                if (store.state.isAuthenticated) {
                    next()
                } else {
                    console.log("else")
                    next('/login')
                }
            }
        },

        {
            path: '/registerdonation',
            component: registerDonation,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/getmobile',
            component: getMobile,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/registerdonor',
            component: registerDonor,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/searchdonors',
            component: searchDonors,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/donationHistory',
            component: donationHistory,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/selectdonors',
            component: selectDonors,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/users',
            component: createUser,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin')) {
                    next()
                } else {
                    next('/login')
                }
            }
        }, {
            path: '/checkMobile',
            component: checkMobile,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin')) {
                    next()
                } else {
                    redirect: '/login'
                }
            }
        },
        {
            path: '/postrequirement',
            component: postRequirement,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'hospitals')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/upload',
            component: uploadPage,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        }, {
            path: '/createHospital',
            component: createHospital,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        }, {
            path: '/searchHospitals',
            component: searchHospitals,
            beforeEnter: (to, from, next) => {
                if (store.state.isAuthenticated && (store.state.role == 'sadmin' || store.state.role == 'organisation')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/success',
            component: Success
        }, {
            path: '/requirementsPage',
            component: requirementsPage
        }, {
            path: '/failure',
            component: Failure
        }
    ]
})