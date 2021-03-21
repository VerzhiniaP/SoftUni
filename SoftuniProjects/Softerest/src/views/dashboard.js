import {html} from '../../node_modules/lit-html/lit-html.js'
import {getIdeas} from '../api/data.js'

const dashBoardTemplate = (data ) => html`
<div id="dashboard-holder">
        ${data.map(rowTemplate)}
       ${ data ? '' :  html`<h1>No ideas yet! Be the first one :)</h1>`}
    </div>
`

const rowTemplate = (item) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${item.title}</p>
            </div>
            <img class="card-image" src=${item.img} alt="Card image cap">
            <a class="btn" href='/data/ideas/${item._id}'>Details</a>
           
        </div>`

 export async function dashboardPage(ctx){
    //const token = sessionStorage.getItem('authToken')
    const data = await getIdeas()
    ctx.setUserNav()
   ctx.render(dashBoardTemplate(data)) 
   
}