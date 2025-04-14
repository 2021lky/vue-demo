import {createRouter, createWebHashHistory} from 'vue-router'
import SplashPage from '@/views/SplashPage/index.vue'
import IndexPage from '@/views/IndexPage/index.vue'
import CommendNav from '@/views/IndexPage/CommendNav/index.vue'
import FunnyNav from '@/views/IndexPage/FunnyNav/index.vue'
import FishbarNav from '@/views/IndexPage/FishbarNav/index.vue'
import FocusNav from '@/views/IndexPage/FocusNav/index.vue'
import DevelopNav from '@/views/IndexPage/DevelopNav/index.vue'
import ErrorPage from '@/views/ErrorPage/index.vue'
import RoomPage from '@/views/RoomPage/index.vue'

const routes = [
    {path: '/', name:'SplashPage', component: SplashPage},
    {
        path: '/index',
        name: 'IndexPage',
        component: IndexPage,
        redirect: '/index/commend',
        children: [
            {path: '/index/commend', name:'CommendNav', component: CommendNav},
            {path: '/index/funny', name: 'FunnyNav', component: FunnyNav},
            {path: '/index/fishbar', name: 'FishbarNav', component: FishbarNav},
            {path: '/index/develop', name: 'DevelopNav', component: DevelopNav},
            {path: '/index/focus', name: 'FocusNav', component: FocusNav}
        ]
    },
    {path: '/room', name:'RoomPage', component: RoomPage},
    {path: '/error', name:'ErrorPage', component: ErrorPage}

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {

    if(from.name === undefined){
        if(to.name == 'SplashPage' || to.name == 'ErrorPage')
            next()
        else if(sessionStorage.getItem('loading'))
            next()
        else{
            console.log("去往首页")
            next({ path: '/error' });
        }
    }else{
        if (to.path === from.path) {
            return next(false); // 中断导航
        }else
            next()
    }
    
});
export default router