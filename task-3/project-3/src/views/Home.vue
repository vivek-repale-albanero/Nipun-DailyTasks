<template>
  <div class="home">
    <div class="nav justify-content-center"> <h3>Document creator.</h3> </div>
    <br> <br>
    <div class="container " >
      <div class="card" style="width: 12rem; height: 10rem">
        <div class="card-body justify-content-center">
          <center> 
          <router-link to="/letter" style="text-decoration: none"
            >Create a Letter</router-link
          >
          </center>
        </div>
      </div>
      <div class="card ms-5" style="width: 12rem; height: 10rem">
        <div class="card-body justify-content-center">
          <center> 
          <router-link to="/cv" style="text-decoration: none"
            >Create a Cv</router-link
          >
          </center>
        </div>
      </div>
      <div class="card ms-5" style="width: 12rem; height: 10rem">
        <div class="card-body justify-content-center">
          <center> 
          <router-link to="/invoice" style="text-decoration: none"
            >Create a Invoice</router-link
          >
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 40px 0;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.container{
  display:flex ;
  justify-content: start;
  overflow: hidden;
}
</style>