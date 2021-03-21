import {html} from '../../node_modules/lit-html/lit-html.js'
import {getIdeaById, deleteIdea} from '../api/data.js'

const detailsTemplate = (data, isOwner, onDelete) => html`
<div class="container home some">
        <img class="det-img" src=${data.img}>
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
            ${isOwner ? html`<a @click=${onDelete} class="btn detb" href="javascript:void(0)">Delete</a>` : ''}
        </div>
    </div>`

 export async function detailsPage(ctx){
    const id = ctx.params.id
    const data = await getIdeaById(id)
    const userId = sessionStorage.getItem('userId')
   const OwnerId = data._ownerId
   let isOwner = userId == OwnerId

   ctx.setUserNav()
   ctx.render(detailsTemplate(data, isOwner, onDelete))

   async function onDelete(){
    const confirmed = confirm('Are you sure you want to delete this item?')
    
       if(confirmed){
           let id = data._id
           await deleteIdea(id)
           ctx.page.redirect('/dashboard')
       }
   }
     
    }