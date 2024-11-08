document.addEventListener('DOMContentLoaded', function() {
    livro=document.querySelectorAll('img')[2]
    popup1=document.querySelector('.tabela1')
    proximo=popup1.querySelector('.proximo')
    popup2=document.querySelector('.tabela2')
    vaso=popup2.querySelector('.vaso2')
    popup3=document.querySelector('.tabela3')
    artigo=document.querySelector('article')
    livro.addEventListener('click', function(){
        // popup1.style.backgroundColor='black'
        console.log(popup1)
        popup1.style.right='5px'
    })
    proximo.addEventListener('click', function(){
        popup2.style.right='5px'
    })
    vaso.addEventListener('click',function(){
        popup3.style.right='5px'
        popup3.style.height='25%'
    })
})
