import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import {logout} from '../src/api/data.js'
import { createPage} from './views/create.js' 
import {dashboardPage} from './views/dashboard.js'
import {detailsPage} from './views/details.js'
import {loginPage} from './views/login.js'
import {registerPage} from './views/register.js'
import { home } from './views/home.js'

 import * as api from './api/api.js'

 window.api = api
const main = document.getElementById('container')

page('/', decorateCtx, home)
page('/dashboard' ,decorateCtx, dashboardPage)
page('/create',decorateCtx, createPage)
page('/data/ideas/:id',decorateCtx, detailsPage)
page('/login',decorateCtx, loginPage)
page('/register',decorateCtx, registerPage)
setUserNav()
page.start()

document.getElementById('logout').addEventListener('click', async ()=>{
    await logout()
    sessionStorage.clear()
     setUserNav()
    page.redirect('/')
})
function decorateCtx(ctx,next){
    ctx.render = (content) => render(content,main)
    ctx.setUserNav = setUserNav
    next()
}
function setUserNav(){
const token = sessionStorage.getItem('authToken')
    if(!token){
    document.getElementById('login').style.display = 'inline'
    document.getElementById('register').style.display = 'inline'
    //document.getElementById('dashboard').style.display = 'none'
    document.getElementById('create').style.display = 'none'
    document.getElementById('logout').style.display = 'none'

    }else{
        document.getElementById('login').style.display = 'none'
        document.getElementById('register').style.display = 'none'
       // document.getElementById('dashboard').style.display = 'inline'
        document.getElementById('create').style.display = 'inline'
        document.getElementById('logout').style.display = 'inline'
       }

}
