document.addEventListener('DOMContentLoaded', function() {
    livro=document.querySelectorAll('img')[2]
    popup1=document.querySelector('.tabela1')
    livro.addEventListener('click', function(){
        // popup1.style.backgroundColor='black'
        console.log(popup1)
        popup1.style.right=0
    })
})
