import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api/axios'
import './assets/css/app.css'
import './mock/index'
import {
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Empty,
  Button,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  NavBar,
  Sidebar,
  SidebarItem,
  Sticky,
  Image as VanImage,
  Col,
  Row,
  Tag,
  Tabs,
  Icon,
  ConfigProvider
} from 'vant'

const app = createApp(App)
app.use(axios)
app.use(router)
app
  .use(Cell)
  .use(CellGroup)
  .use(Grid)
  .use(GridItem)
  .use(Empty)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(NavBar)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Sticky)
  .use(VanImage)
  .use(Col)
  .use(Row)
  .use(Tag)
  .use(Tabs)
  .use(Icon)
  .use(ConfigProvider)

app.mount('#app')
