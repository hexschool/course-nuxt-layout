import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '@/layout/FrontLayout.vue'
import HomeView from '@/views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import RoomDetailView from '@/views/RoomDetailView.vue'
import BookingView from '@/views/BookingView.vue'
import BookingConfirmView from '@/views/BookingConfirmView.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import UserOrder from '@/components/user/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontLayout',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: RoomsView,
          meta: {
            title:'客房旅宿'
          }
        },
        {
          path: 'rooms/:roomId',
          name: 'room-detail',
          component: RoomDetailView,
          meta: {
            title:'房型詳細'
          }
        },
        {
          path: 'rooms/:roomId/booking',
          name: 'booking',
          component: BookingView,
          meta: {
            title:'預約房型'
          }
        },
        {
          path: 'booking/confirmation/:bookingId',
          name: 'booking-confirmation',
          component: BookingConfirmView,
          meta: {
            title: '預約成功'
          }
        },
        {
          path: 'user/:userId',
          name: 'user',
          component: () => import('@/layout/UserLayout.vue'),
          children: [
            {
              path: 'profile',
              name: 'user-profile',
              component: UserProfile,
              meta: {
                title: '個人資料'
              }
            },
            {
              path: 'order',
              name: 'user-order',
              component: UserOrder,
              meta: {
                title: '訂單列表'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/account',
      component: () => import('@/layout/AccountLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/account/AccountLogin.vue'),
          meta: {
            title:'會員登入'
          }
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../components/account/AccountSignup.vue'),
          meta: {
            title:'註冊會員'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ? `${to.meta.title} - 享樂酒店｜Enjoyment Luxury Hotel` : `享樂酒店｜Enjoyment Luxury Hotel`;
})

export default router
