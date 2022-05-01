const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
})