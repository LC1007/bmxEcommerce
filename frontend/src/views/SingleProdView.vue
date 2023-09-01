<template>
    <div>
        <Navbar/>
        <h1>This is a test</h1>
        <div class="custom-container">
            <div class="right-side">
                <div v-if="selectedBike">
                    <img :src="selectedBike.prodUrl" class="prod-img" style="width: 30rem" alt="">
                </div>
                <div v-else>
                    <p>loading...</p>
                </div>
            </div>
            <div class="left-side">
                <h1>{{ selectedBike.prodName }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from '@/components/NavbarComp.vue'

    export default {
        components:{
            Navbar
        },
        computed:{
            ...mapState(['selectedBike'])
        },
        created(){
            const bmxID = this.$route.params.bmxID
            this.fetchBike(bmxID)
        },
        methods:{
            ...mapActions(['fetchBike'])
        }
    }
</script>

<style scoped>

.prod-img{
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
}

</style>