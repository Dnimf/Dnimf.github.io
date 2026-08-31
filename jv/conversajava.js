document.addEventListener('DOMContentLoaded', function() {
    livro=document.querySelectorAll('img')[2]
    popup1=document.querySelector('.tabela1')
    proximo=popup1.querySelector('.proximo')
    popup2=document.querySelector('.tabela2')
    vaso=popup2.querySelector('.vaso2')
    popup3=document.querySelector('.tabela3')
    popup4=document.querySelector('.tabela4')
    artigo=document.querySelector('article')
    proximo2=popup3.querySelector('.triangulo')
    voce=document.querySelector('.você')
    livro.addEventListener('click', function(){
        // popup1.style.backgroundColor='black'
        console.log(popup1)
        popup1.style.right='5px'
    })
    proximo.addEventListener('click', function(){
        popup2.style.right='5px'
        popup2.style.height='20%'
        // voce.style.right='5%'
    })
    vaso.addEventListener('click',function(){
        popup3.style.right='5px'
        popup3.style.height='30%'
    })
    proximo2.addEventListener('click',function(){
        popup4.style.right='5px'
        popup4.style.height='35%'
    })

})
