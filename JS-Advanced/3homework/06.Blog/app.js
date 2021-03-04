function attachEvents() {
    const posts = `http://localhost:3030/jsonstore/blog/posts`
    const comments = `http://localhost:3030/jsonstore/blog/comments`
    const loadBtn = document.getElementById('btnLoadPosts')
    const post = document.getElementById('posts')
    loadBtn.addEventListener('click', onClick)
    async function onClick(e){
        const response = await fetch(posts)
        const data = await response.json()

        Object.values(data).forEach(obj => {
          let option = document.createElement('option')
          option.value = obj.id 
          option.textContent = obj.title.toUpperCase()
          post.appendChild(option)
        })
        document.getElementById('btnViewPost').addEventListener('click', onView)

        async function onView(){

        const responseC = await fetch(comments)
        const dataC = await responseC.json()
        let com = document.getElementById('post-comments')
        com.innerHTML = ''
        let body = document.getElementById('post-body')
        body.innerHTML = ''
        
         Object.values(dataC).forEach(x => {
             if(post.value == x.postId){
                let text = x.postId
                document.getElementById('post-title').textContent = data[text].title
                 let li = document.createElement('li')
                 li.textContent = x.text 
                 li.id = x.id
                 com.appendChild(li)
                 body.textContent = data[text].body
          }
         })
        
        }
      }
}

attachEvents();