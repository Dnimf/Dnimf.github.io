document.addEventListener('DOMContentLoaded', function() {
    livro=document.querySelectorAll('img')[2]
    popup1=document.querySelector('.tabela1')
    proximo=popup1.querySelector('.proximo')
    popup2=document.querySelector('.tabela2')
    vaso=popup2.querySelector('.vaso2')
    livro.addEventListener('click', function(){
        // popup1.style.backgroundColor='black'
        console.log(popup1)
        popup1.style.right=0
    })
    proximo.addEventListener('click', function(){
        popup2.style.right=0
    })
})
