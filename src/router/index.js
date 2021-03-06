import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output' //①import

Vue.use(Router)

export default new Router({
    router: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/outputs',
            name: 'Output',
            component: Output
        }
    ]
})