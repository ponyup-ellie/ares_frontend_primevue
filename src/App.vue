<template>
  <div id="app">
    <div class="top-menu">
      <Menubar :model="topMenus">
        <template #start>
            <img @click="goDashboard" src="@/assets/primevue-logo.png" height="40" class="p-mr-2">
        </template>
      </Menubar>
    </div>
    <div class="layout-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
    data() {
        return {
            topMenus: [
                {
                   label:'경기일정',
                   icon:'pi pi-fw pi-calendar',
                   to: '/schedules'
                },
                {
                   label:'공지사항',
                   icon:'pi pi-fw pi-pencil',
                   to: '/notice'
                },
                {
                   label:'커뮤니티',
                   icon:'pi pi-fw pi-comments',
                   to: '/community'
                },
                {
                   label:'회원관리',
                   icon:'pi pi-fw pi-user-edit',
                   to: '/user'
                },
                {
                   label:'팀관리',
                   icon:'pi pi-fw pi-users',
                   to: '/team'
                }
             ]
        }
    },
    methods: {
      goDashboard () {
        this.$router.push('/')
      }
    },
    components: {
      Menubar
    }
}
</script>

<style scoped>
.layout-top {
  width: 100vw;
}
.layout-main {
  padding: 10px 10px 10px 10px;
}
</style>