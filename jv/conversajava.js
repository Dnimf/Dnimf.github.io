document.addEventListener('DOMContentLoaded', function() {
    popup1=document.querySelectorAll('img')
    popup2=popup1[1]
    popup2.addEventListener('click', function(){
        popup2.style.backgroundColor='black'
        console.log('a')
    })
})
