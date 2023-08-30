<template>
    <div>
        <h1>Products</h1>
        <div class="container">
            <div class="row">
                <div class="col" v-for="bike in bmxBikes" :key="bike.bmxID">
                    <div class="card p-2" style="width: 18rem; background-color: #D9D9D9;">
                        <img :src="bike.prodUrl" class="card-img-top" alt="..." loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">{{ bike.prodName }}</h5>
                          <p class="card-text">{{ bike.prodDesc }}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex';

    export default {
        computed:{
            bmxBikes(){
                return this.$store.state.bmxBikes
            }
        },
        mounted(){
            this.$store.dispatch('fetchBikes')
        }
    }
</script>

<style lang="scss" scoped>

</style>