/*路由界面配置*/
import ShowBloges from "./components/ShowBloges.vue"
import AddBloge  from "./components/AddBloge.vue"
import SingleBlog  from "./components/SingleBlog.vue"


export default [
{path: '/',component: ShowBloges},
{path: '/add',component: AddBloge},
{path: '/blog/:id',component: SingleBlog}

]