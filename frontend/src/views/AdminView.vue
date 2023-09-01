<template>
    <div>
        <Navbar/>
        <div class="container">
            <h1>Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>BMX ID</th>
                        <th>BMX Name</th>
                        <th>BMX Description</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bike in bikes" :key="bike.bmxID">
                        <td>{{ bike.bmxID }}</td>
                        <td>{{ bike.prodName }}</td>
                        <td>{{ bike.prodDesc }}</td>
                        <td>{{ bike.quantity }}</td>
                        <td>{{ bike.amount }}</td>
                        <td>{{ bike.category }}</td>
                        <td>
                            <img :src="bike.prodUrl" style="width: 18rem" alt="">
                        </td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex'
    export default {
        components:{
            Navbar
        },
        computed:{
            ...mapState(['bikes'])
        },
        mounted(){
            this.fetchBikes()
        },
        methods:{
            ...mapActions(['fetchBikes'])
        }
    }
</script>

<style scoped>
.container{
    margin: 4rem;
}
</style>