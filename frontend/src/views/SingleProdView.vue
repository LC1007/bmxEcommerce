<template>
    <div>
        <h1>This is a test</h1>
        <div v-if="selectedBike">
            <h1>{{ selectedBike.prodName }}</h1>
            <img :src="selectedBike.prodUrl" style="width: 18rem
            " alt="">
        </div>
        <div v-else>
            <p>loading...</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
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

<style lang="scss" scoped>

</style>