import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isValidUsername: false,
    username:null,
    // accessToken:null,
    isAuthenticated:false,
    usernameErrors:null,
    donor : {
      donorId: null,
      name: null,
      place: null,
      mobileNumber: null,
      bloodGroup: null,
      email: null
    },
    isValidMobileNumber:false
  },
  mutations: {
    isAValidUsername(state, username){
      state.isValidUsername = true
      state.username = username
    },
    isNotAValidUsername(state){
      state.usernameErrors = "Enter a valid username"
    },
    // updateToken(state , token){
    //   state.accessToken = token
    //   state.isAuthenticated = true
    // },
    isAValidMobileNumber(state){

      state.isValidMobileNumber = true
    },
    loginSuccess(state){
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    },
    clearDonorDetails(state){
      for(var key in state.donor) state.donor[key] = null
      // state.donor.donorId = null,
      // state.donor.mobileNumber = null,
      // state.isValidMobileNumber = null
    },
    updateMobile(state, mobile){
      state.donor.mobileNumber = mobile
    },
    updateId(state , id){
      state.donor.donorId = id
    },
    updateDonor(state, donor){
      state.donor.name = donor.name
      state.donor.donorId = donor.donorId
      state.donor.email = donor.email
      state.donor.place = donor.place
      state.donor.bloodGroup = donor.bloodGroup
      state.donor.mobileNumber = donor.mobileNumber
    }
  }
})
