import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '@/layout/FrontLayout.vue'
import HomeView from '@/views/HomeView.vue'


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
          component: () => import('@/views/RoomsView.vue'),
          meta: {
            title:'客房旅宿'
          }
        },
        {
          path: 'rooms/:roomId',
          name: 'room-detail',
          component: () => import('@/views/RoomDetailView.vue'),
          meta: {
            title:'房型詳細'
          }
        },
        {
          path: 'rooms/:roomId/booking',
          name: 'booking',
          component: () => import('@/views/BookingView.vue'),
          meta: {
            title:'預約房型'
          }
        },
        {
          path: 'booking/confirmation/:bookingId',
          name: 'booking-confirmation',
          component: () => import('@/views/BookingConfirmView.vue'),
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
              component: () => import('@/components/user/UserProfile.vue'),
              meta: {
                title: '個人資料'
              }
            },
            {
              path: 'order',
              name: 'user-order',
              component: () => import('@/components/user/UserOrder.vue'),
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
          component: () => import('@/components/account/AccountSignup.vue'),
          meta: {
            title:'註冊會員'
          }
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ top: 0 })
        }, 0)
      })
    }
  }
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ? `${to.meta.title} - 享樂酒店｜Enjoyment Luxury Hotel` : `享樂酒店｜Enjoyment Luxury Hotel`;
})

export default router
