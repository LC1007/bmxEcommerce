<template>
  <div>
    <Navbar/>
    <!-- <section>
      <h1 class="headings">STORYTIME</h1>
      <div>
        <div class="container">
          <div class="right-side">
            <p class="home_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat dolores nam quia. Fugit culpa in possimus maiores, quam assumenda illo, qui numquam, autem nemo commodi! Laboriosam nihil impedit totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, eaque.</p>
            <p class="home_para_sec">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos odit magni quos illo deserunt quis sit aperiam vitae laudantium?</p>
          </div>
          <div class="left-side">
            <img src="https://i.postimg.cc/Fz1vdfmP/pexels-tima-miroshnichenko-7936233.jpg" alt="" class="home_img">
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section>
      <h1 class="headings">FEATURED PRODUCTS</h1>
      <div class="container">
        <div v-if="bmxBikes">
          <div class="card" style="width: 18rem" v-for="bike in bmxBikes" :key="bike.bmxID">
            <img :src="bike.prodUrl" class="card-img" alt="">
            <div class="card-body">
              <h4 class="card-title">{{ bike.prodName }}</h4>
              <p class="card-text">{{ bike.prodDesc }}</p>
              <button class="btn">View More</button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </section> -->

    <h1>Top Picks</h1>
    <div class="container">
      <div class="card" v-for="bike in bmxBikes" :key="bike.bmxID">
        <img :src="bike.prodUrl" alt="">
        <h3 class="card-title">{{ bike.prodName }}</h3>
        <p class="card-text">R{{ bike.amount }}</p>
        <button class="btn" @click="selectProduct(bike)">View More</button>
      </div>
    </div>

    <section>
      <h1 class="headings">EVENTS</h1>
      <div class="container-events">
        <!-- <div class="right-side_event">
          <h2 class="event-heading">BMX Meet Up At Cape Town</h2>
          <img src="https://i.postimg.cc/CMmJfrpn/nicolas-picard-JjBQLWs2UPA-unsplash.jpg" alt="">
        </div>
        <div class="left-side_event">
          <h2 class="event-heading">BMX Jam</h2>
          <img src="https://i.postimg.cc/vZrJg15Z/brandon-erlinger-ford-5IM24xEwXjs-unsplash.jpg" alt="">
        </div>  -->
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
import { mapActions, mapState } from 'vuex';

export default {
  components:{
    Navbar
  },
  computed:{
    ...mapState(['bmxBikes', 'selectedProduct'])
  },
  mounted(){
    this.fetchBikes()
  },
  created(){
    const bmxID = this.$route.params.bmxID
    this.fetchBike(bmxID)
  },
  methods:{
    ...mapActions(['fetchBikes', 'fetchBike']),

    selectProduct(bike){
      this.fetchBike(bike.bmxID)
      this.$router.push({ name: 'product', params: {bmxID: bike.bmxID} })
      console.log(bike.prodName);
    }
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