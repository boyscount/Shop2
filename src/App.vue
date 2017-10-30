<template>
  <v-app>
      <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-title
         v-for="item in menuItem"
          :key="item.title"
          :to="item.link">
         <v-list-title-action>
          <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
         </v-list-title-action>
         <v-list-title-content>{{ item.title }}</v-list-title-content>
        </v-list-title>
          <v-list-title v-if="userIsAuthentication"
          @click="onLogout">
         <v-list-title-action>
          <v-icon>low_priority</v-icon>
          </v-btn>
         </v-list-title-action>
         <v-list-title-content>Logout</v-list-title-content>
        </v-list-title>
        </v-list>
       </v-navigation-drawer>
   <v-toolbar dark class="primary">
    <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
    <router-link to="/" tag="span" style="cursor: pointer">OH My Shoes!</router-link>
    </v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-xs-only">
    <v-btn
      flat
      v-for="item in menuItem"
      :key="item.title"
      :to="item.link">
    <v-icon left>{{ item.icon }}</v-icon>
    {{ item.title }}
    </v-btn>
    <v-btn
      v-if="userIsAuthentication"
      @click="onLogout"
      flat>
    <v-icon left>exit_to_app</v-icon>
      Logout
    </v-btn>
   </v-toolbar-items>
   </v-toolbar>
    <main>
    <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItem () {
        let menuItem = [
          {icon: 'person', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthentication) {
          menuItem = [
          {icon: 'supervisor_account', title: 'View Detail', link: '/meetups'},
          {icon: 'room', title: 'Add Item', link: '/meetup/new'},
          {icon: 'face', title: 'Promotion', link: '/profile'}
          ]
        }
        return menuItem
      },
      userIsAuthentication () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout: function () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/theme.styl'
  </style>
