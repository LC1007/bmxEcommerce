<template>
  <div>
    <Navbar/>
    <h1>Top Picks</h1>
    <div class="container">
      <div class="card" v-for="bike in bikes" :key="bike.bmxID">
        <img :src="bike.prodUrl" alt="">
        <h3 class="card-title">{{ bike.prodName }}</h3>
        <p class="card-text">R{{ bike.amount }}</p>
        <router-link :to="'/product/' + bike.bmxID">View more</router-link>
      </div>
    </div>

    <section>
      <h1 class="headings">EVENTS</h1>
      <div class="container-events">
        <div class="card-event event-1">
          <img src="https://i.postimg.cc/CMmJfrpn/nicolas-picard-JjBQLWs2UPA-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-2">
          <img src="https://i.postimg.cc/vZrJg15Z/brandon-erlinger-ford-5IM24xEwXjs-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Jam</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-3">
          <img src="https://i.postimg.cc/CMmJfrpn/nicolas-picard-JjBQLWs2UPA-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-4">
          <img src="https://i.postimg.cc/CMmJfrpn/nicolas-picard-JjBQLWs2UPA-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapState, mapActions } from 'vuex'


export default {
  components:{
    Navbar
  },
  // Line 103 is fetching the data from the state
  computed:{
    ...mapState(['bikes','selectedBike'])
  },
  mounted(){
    this.fetchBikes()
  },
  methods:{
    ...mapActions(['fetchBikes', 'fetchBike']),
  }
}

</script>

<style scoped>

.headings{
  text-align: center;
  margin: 2rem;
}

.container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 2rem;
  margin: 3rem;
  border-radius: 10px;
}

.card-text{
  color: gray;
}

.card-title{
  font-weight: 700;
}

.home_img{
  border-radius: 10px;
}

.home_para{
  color: #fff;
}

.home_para_sec{
  color: #fff;
  padding-top: 2rem;
}

.right-side > p{
  font-size: 1.5rem;
}

.card{
  margin: 1rem;
  border-radius: 10px;
}

.card-img{
  padding: 1rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card-body{
  padding: 1rem;
}

.card-title{
  padding-bottom: .7rem;
}

.btn{
  border: none;
  padding: .7rem;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: var(--bgColor);
  color: #fff;
}

.container-events{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: var(--bgColor);
  margin: 5rem;
  border-radius: 10px;
  height: 100vh;
}

.event-1{
  grid-column: 1 / -1;
  grid-row: 1 / 6;
}

.event-2{
  grid-column: 1 / 6;
  grid-row: 6 / -1;
}

.event-3{
  grid-column: 6 / -1;
  grid-row: 8 / -1;
}

.event-4{
  grid-column: 6 / -1;
  grid-row: 6 / 8;
}

.card-event{
  margin: 1rem;
  border-radius: 10px;
}

.card-img-events{
  padding: .4rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body-events{
  padding: 1rem;
}

.card-title-events{
  padding-bottom: .7rem;
  color: #fff;
}

</style>