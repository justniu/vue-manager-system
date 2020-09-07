import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/views/Main'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/home/Home')
            },
            {
                path: '/video',
                name: 'video',
                component: () => import('@/views/videoManage/VideoManage')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/views/usermanage/UserManage')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('@/views/Others/PageOne')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('@/views/Others/PageTwo')
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
