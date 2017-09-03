//import Login from './views/Login.vue'
import NotFound from './views/404.vue'
//import Home from './views/Home.vue'
// import Main from './views/Main.vue'
// // import Table from './views/nav1/Table.vue'
// // import Form from './views/nav1/Form.vue'
// // import user from './views/nav1/user.vue'
// // import Page4 from './views/nav2/Page4.vue'
// // import Page5 from './views/nav2/Page5.vue'
// // import Page6 from './views/nav3/Page6.vue'
// import userList from './views/user/userList.vue'
// import hourseList from './views/hourse/hourseList.vue'
// import addHourse from '/views/hourse/addHourse.vue'

//import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: resolve => require(['./views/Login.vue'], resolve),
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: resolve => require(['./views/Home.vue'], resolve),
        name: '用户管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/main',
                component: resolve => require(['./views/Main.vue'], resolve),
                name: '主页',
                hidden: true
            },
            {
                path: '/userList',
                component: resolve => require(['./views/user/userList.vue'], resolve),
                name: '用户列表'
            },
        ]
    },
    {
        path: '/',
        component: resolve => require(['./views/Home.vue'], resolve),
        name: '房产管理',
        iconCls: 'fa fa-id-card-o',
        children: [

            {
                path: '/hourseLisr',
                component: resolve => require(['./views/hourse/hourseList.vue'], resolve),
                name: '房产列表'
            },
            {
                path: '/addHourse',
                component: resolve => require(['./views/hourse/addHourse.vue'], resolve),
                name: '添加房产'
            },
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;