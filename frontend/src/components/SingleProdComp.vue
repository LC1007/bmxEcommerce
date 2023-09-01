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
            ...mapState(['selectedBike'])
        },
        methods:{
            ...mapActions(['fetchBike'])
        }
    }
</script>

<style lang="scss" scoped>

</style>