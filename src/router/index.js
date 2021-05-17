import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard.vue';
import SchedulesMain from '@/components/Schedules/Main'
import NoticeMain from '@/components/Notice/Main'
import CommunityMain from '@/components/Community/Main'
import UserMain from '@/components/User/Main'
import TeamMain from '@/components/Team/Main'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/schedules',
        name: 'SchedulesMain',
        component: SchedulesMain,
    },
    {
        path: '/notice',
        name: 'NoticeMain',
        component: NoticeMain,
    },
    {
        path: '/community',
        name: 'CommunityMain',
        component: CommunityMain,
    },
    {
        path: '/user',
        name: 'UserMain',
        component: UserMain,
    },
    {
        path: '/team',
        name: 'TeamMain',
        component: TeamMain,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;