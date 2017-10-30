import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Meetup from '@/components/Meetup/Meetup'
import AunthGuard from './auth-guard'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AunthGuard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AunthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    { path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
