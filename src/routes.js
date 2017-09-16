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
// import houseList from './views/house/houseList.vue'
// import addhouse from '/views/house/addhouse.vue'

//import echarts from './views/charts/echarts.vue'
let adminRouters = [
    {
        path: '/admin/',
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
    }

];
let routes = [
        {
        path: '/',
        component: resolve => require(['./views/front/homeList.vue'], resolve),
        name: '',
        hidden: true
    },
        {
        path: '/detail',
        component: resolve => require(['./views/front/detail.vue'], resolve),
        name: '',
        hidden: true
    },

    {
        path: '/admin/login',
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
        path: '/admin/',
        component: resolve => require(['./views/Home.vue'], resolve),
        name: '租赁管理',
        iconCls: 'fa fa-id-card-o',
        children: [

            {
                path: '/admin/rentList',
                component: resolve => require(['./views/house/rentList.vue'], resolve),
                name: '租赁列表'
            },
            {
                path: '/admin/addRenthouse',
                component: resolve => require(['./views/house/rentAddhouse.vue'], resolve),
                name: '添加房产'
            },
        ]
    },
       {
        path: '/admin/',
        component: resolve => require(['./views/Home.vue'], resolve),
        name: '买卖管理',
        iconCls: 'fa fa-id-card-o',
        children: [

            {
                path: '/admin/houseList',
                component: resolve => require(['./views/house/houseList.vue'], resolve),
                name: '房产列表'
            },
            {
                path: '/admin/addhouse',
                component: resolve => require(['./views/house/addhouse.vue'], resolve),
                name: '添加房产'
            },
        ]
    },
    {
        path: '/admin/',
        component: resolve => require(['./views/Home.vue'], resolve),
        name: 'Setting',
        iconCls: 'el-icon-setting',
        children :[
            {
                path: '/admin/setting',
                component: resolve => require(['./views/setting/setting.vue'], resolve),
                name: 'Profile'
            }
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
let allRouters = Object.assign([], routes);
allRouters.push.apply(allRouters, adminRouters);

export default routes = {'adminRouters': adminRouters, 'commRouter': routes, 'allRoutes': allRouters};