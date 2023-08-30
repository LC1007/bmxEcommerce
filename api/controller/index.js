const express = require('express')
const routes = express()
const { products, users } = require('../model')
const bodyParser = require('body-parser')
const { authorize } = require('../middleware/AuthorizeUser')
const path = require('path')

// Fetch all products
routes.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

// Fetch single product
routes.get('/product/:bmxID', (req, res) =>{
    products.fetchProduct(req, res)
})

// Add a product
routes.post('/products', bodyParser.json(), (req, res) =>{
    products.addProduct(req, res)
})

// Updated a product
routes.patch('/product/:bmxID', bodyParser.json(), (req, res) =>{
    products.updateProduct(req, res)
})

// Delete a product
routes.delete('/product/:bmxID', (req, res) =>{
    products.deleteProduct(req, res)
})

// ================= Admin ================== //

routes.get('/admin', authorize('admin'), (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../static/html/admin.html'))
})

// ================= Users ================== //

// Fetch all users
routes.get('/users', (req, res) =>{
    users.fetchUsers(req, res)
})

// Fetch all users
routes.get('/user/:userID', (req, res) =>{
    users.fetchUser(req, res)
})

// Add user
routes.post('/users', (req, res) =>{
    users.addUser(req, res)
})

routes.patch('/user/:userID', (req, res) =>{
    users.updateUser(req, res)
})

// Delete a user
routes.delete('/user/:userID', (req, res) =>{
    users.deleteUser(req, res)
})

module.exports ={
    express,
    routes
}