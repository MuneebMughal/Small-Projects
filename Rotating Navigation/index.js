const _open = document.getElementById('open');
const _close = document.getElementById('close');
const container = document.querySelector('.container');
_open.addEventListener('click',()=>{
    container.classList.add('show-nav')
})
_close.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})