import DashboardLayout from '../components/Dashboard/Layout/LeftMenu.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Home.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Feedbacks from 'src/components/Dashboard/Views/Feedbacks.vue'
import Typography from 'src/components/Dashboard/Views/Statistics.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import NewFeedBack from 'src/components/Dashboard/Views/NewFeedback.vue'
import EditFeedBack from 'src/components/Dashboard/Views/EditFeedback.vue'
import FeedbackDetail from 'src/components/Dashboard/Views/FeedBackDetail.vue'
import test from 'src/components/Dashboard/Views/test.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/home'
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/',
    children: [
      {
        path: 'home',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'feedbacks',
        name: 'Table List',
        component: Feedbacks
      },
      {
        path: 'feedbacks/new',
        name: 'New Feedback',
        component: NewFeedBack

      },
      {
        path: 'feedbacks/edit/:id',
        name: 'Edit Feedback',
        component: EditFeedBack

      },
      {
        path: 'feedbacks/detailll/:id',
        name: 'Feedback Detail',
        component: FeedbackDetail

      },
      {
        path: 'test',
        name: 'test',
        component: test
      },
      {
        path: 'statistics',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*',
    component: DashboardLayout,
    redirect: '/home' }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/
export default routes



