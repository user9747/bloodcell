<template lang="html">
  <nav class="d-none d-sm-block bg-light sidebar">
    <div class="mx-auto">
      <div class="mx-auto admin-avatar-container">
        <img class="admin-avatar mx-auto" src="../../assets/avatar.jpg" alt="">
      </div>
      <br>
      <h5 class="text-center">Welcome {{this.username}}</h5>
    </div>
    <ul class="nav nav-pills flex-column">
      </li>
      <li class="nav-item">
        <hr>
        <router-link  class="nav-link" to="/"><i class="fa fa-home"></i> Home</router-link>
      </li>

      <li class="nav-item" v-if="this.role === 'sadmin' ||this.role === 'organisation'">
        <router-link class="nav-link" to="/getmobile"><i class="fa fa-plus"></i> Voluntary Donation</router-link>
      </li>

      <li class="nav-item" v-if="this.role === 'sadmin' || this.role === 'hospitals' ">
        <router-link class="nav-link" to="/postrequirement"><i class="fa fa-plus"></i> Requirement</router-link>
      </li>

      <li class="nav-item" v-if="this.role === 'sadmin' || this.role  ==='organisation'">
        <router-link class="nav-link" to="/users"><i class="fa fa-plus"></i> User</router-link>
      </li>
      <li class="nav-item" v-if="this.role === 'sadmin' || this.role  ==='organisation'">
        <router-link to="/checkMobile" class="nav-link"><i class="fa fa-plus"></i> Donor</router-link>
      </li>
      <li class="nav-item" v-if="this.role === 'sadmin' ||  this.role === 'organisation' ">
        <router-link to="/upload" class="nav-link"><i class="fa fa-plus"></i> Upload</router-link>
      </li>
      <li class="nav-item" v-if="this.role === 'sadmin' ||  this.role === 'organisation' ">
        <router-link to="/createHospital" class="nav-link"><i class="fa fa-plus"></i> Hospital</router-link>
      </li>
      <li class="nav-item" v-if="this.role === 'sadmin' || this.role === 'organisation' ">
        <router-link to="/searchdonors" class="nav-link"><i class="fa fa-search"></i> Search Donors</router-link>
      </li>
      <li class="nav-item" v-if="this.role === 'sadmin' || this.role === 'organisation' ">
        <router-link to="/searchHospitals" class="nav-link"><i class="fa fa-search"></i> Search Hospitals</router-link>
      </li>
       <li class="nav-item" v-if="this.role === 'sadmin' || this.role === 'organisation' ">
        <router-link to="/donationHistory" class="nav-link"><i class="fa fa-search"></i> Donation History</router-link>
      </li>
    
    </ul>

  </nav>

</template>

<script>
let data = {
}
export default {
  data: function(){
    return data;
  },
  computed: {
    username(){
      return this.$store.state.username
    },
    role(){
      return this.$store.state.role
    }
  }
}
</script>


<style lang="css">

.sidebar {
  position: fixed;
  top: 51px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;
}

/* Sidebar navigation */
.sidebar {
  padding-left: 0;
  padding-right: 0;
}

.nav{
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap:nowrap;

}

.sidebar .nav {
  margin-bottom: 20px;
}

.sidebar .nav-item {
  width: 100%;
}

.sidebar .nav-item + .nav-item {
  margin-left: 0;
}

.sidebar .nav-link {
  border-radius: 0;
}
.nav-item{
  padding: 0px 5px 0px 5px
}

.nav-link{
  color: black
}

.admin-avatar{
  border-radius: 50%;
  border:1px solid black;
  height: 100px;
  width:auto;
}

.admin-avatar-container{
  width: 100px;
}

</style>
