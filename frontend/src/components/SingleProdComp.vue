<template>
    <div>
        <Navbar/>
        <h1>This is a test</h1>
        <div class="custom-container">
            <div class="right-side">

            </div>
            <div class="left-side">
                <h1>BMX BIKE</h1>
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