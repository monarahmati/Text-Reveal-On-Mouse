const cursor = document.querySelector('#cursor');

window.addEventListener("mousemove" , (e) => {
    cursor.style.left = ( e.x - 150 ) + 'px'
    cursor.style.top = ( e.y - 150 ) + 'px'
})



