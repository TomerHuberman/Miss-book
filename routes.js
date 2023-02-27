import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import BookIndex from './pages/BookIndex.js'
import BookDetails from './pages/BookDetails.js'
import BookEdit from './pages/BookEdit.js'
import AddReview from './pages/AddReview.js'

const { createRouter, createWebHashHistory } = VueRouter
const options = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
    {
      path: '/book',
      component: BookIndex,
    },
    {
      path: '/book/:bookId',
      component: BookDetails,
      name:'details',
      // props:true
    },
    {
      path: '/book/review/:bookId',
      component: AddReview,
      name:'review',
      // props:true
    },
    {
      path: '/book/edit/:bookId?',
      component: BookEdit,
    },
    // Last fallback if no route was matched:
    {
      path: '/:catchAll(.*)',
      component: AboutPage,
    },
  ],
}
export const router = createRouter(options)
