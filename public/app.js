import * as Auth from './controller/auth.js'
import * as Home from './viewpage/home_page.js'
import * as About from './viewpage/about_page.js'
import * as Routes from './controller/routes.js'

Auth.addEventListeners()
Home.addEventListeners()
About.addEventListeners()

//when reloaded actions
window.onload = () =>{
    const pathname = window.location.pathname
    const href = window.location.href

    Routes.routing(pathname, href)
}