<template>
    <div>
        <div v-if="selectedProduct">
            <p>{{ selectedProduct.prodName }}</p>
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
            ...mapState(['selectedProduct'])
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