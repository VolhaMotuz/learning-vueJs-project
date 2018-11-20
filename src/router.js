import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login.vue'
import Dashboard from './pages/dashboard.vue'
import ProductManagement from './pages/product-management.vue'
import ProductsManagement from './pages/products-management.vue'
import UsersManagement from './pages/users-management.vue'
import NewProduct from './pages/new-product.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/product-management/:id',
            name: 'product-management',
            component: ProductManagement
        },
        {
            path: '/products-management',
            name: 'products-management',
            component: ProductsManagement
        },
        {
            path: '/users-management',
            name: 'users-management',
            component: UsersManagement
        },
        {
            path: '/new-product',
            name: 'new-product',
            component: NewProduct
        },
    ]
})