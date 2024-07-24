import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '@/layout/FrontLayout.vue'
import HomeView from '@/views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import RoomDetailView from '@/views/RoomDetailView.vue'
import BookingView from '@/views/BookingView.vue'

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
      ]
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ? `${to.meta.title} - 享樂酒店｜Enjoyment Luxury Hotel` : `享樂酒店｜Enjoyment Luxury Hotel`;
})

export default router
