<template>
  <div>
    <Navbar/>
    <h1 class="heading">Top Picks</h1>
    <div v-if="bikes">
      <div class="custom-container">
        <div class="card" v-for="bike in bikes" :key="bike.bmxID">
          <img :src="bike.prodUrl" alt="">
          <h3 class="card-title">{{ bike.prodName }}</h3>
          <p class="card-text">R{{ bike.amount }}</p>
          <button class="btn"><router-link :to="'/product/' + bike.bmxID">View more</router-link></button>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      <h1>Loading...</h1>
    </div>

    <section>
      <h1 class="heading">EVENTS</h1>
      <div class="container-events">
        <div class="card-event event-1">
          <img src="https://i.postimg.cc/yx1sprST/yomex-owo-q-NJ-C49u-MH0-unsplash.jpg" loading="lazy" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-2">
          <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" loading="lazy" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Jam</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-3">
          <img src="https://i.postimg.cc/wxQ8Mp1f/bevis-g-f41-O7-CV6-B4w-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
        <div class="card-event  event-4">
          <img src="https://i.postimg.cc/52sJjmTH/keagan-henman-Z6-Fi-a4zizc-unsplash.jpg" class="card-img-events" alt="">
          <div class="card-body-events">
            <h4 class="card-title-events">BMX Meet Up At Cape Town</h4>
            <p class="card-text-events"></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="custom-container">
        <div>
          <h1 class="section-heading">ONLY THE BEST FOR THE BEST</h1>
          <p class="lead-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias praesentium consequuntur nisi delectus eos possimus. Asperiores officiis atque ab quisquam, itaque quia in et saepe veritatis quaerat aperiam deserunt!</p>
          <button class="btn">Buy Now</button>
        </div>
        <div>
          <img src="https://i.postimg.cc/Vs76vTH8/62165db45515463e41aa6df4-crysis-champagne-2000-2.jpg" alt="">
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
    ...mapState(['bikes','selectedBike', 'isLoading'])
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

a{
  color: #fff;
  text-decoration: none;
}

.card-text{
  color: gray;
}

.card-title{
  font-weight: 700;
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
  background-color: var(--bgColor);
  color: #fff;
}

.container-events{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  margin: 5rem;
  border-radius: 10px;
  height: 100vh;
}

.event-1{
  grid-column: 6 / -1;
  grid-row: 1 / 5;
}

.event-2{
  grid-column: 1 / 6;
  grid-row: 1 / -1;
}

.event-3{
  grid-column: 6 / -1;
  grid-row: 8 / -1;
}

.event-4{
  grid-column: 6 / -1;
  grid-row: 5 / 8;
}

.card-event{
  
  border-radius: 10px;
}

.card-img-events{
  padding: .4rem;
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

.loading{
  display: grid;
  place-content: center;
}

.section-heading{
  font-size: 5rem;
}

.lead-para{
  color: gray;
}

</style>