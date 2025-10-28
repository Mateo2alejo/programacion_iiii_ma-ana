const caja=document.getElementById('caja');
caja.addEventListener('mouseover',()=>{
    caja.style.background = 'yellow';
});
caja.addEventListener('mouseout',()=>{
    caja.style.background = 'gray';
});
caja.addEventListener('click',()=>{
    alert('click en la caja');
});