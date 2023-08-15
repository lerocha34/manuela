document.querySelector('.menu-mobile').addEventListener('click',()=> {
    if (document.querySelector('#menu-desliza').style.left === '-250px'){
        document.querySelector('#menu-desliza').style.left = '0'
    } else {
        document.querySelector('#menu-desliza').style.left = '-250px'
    }
})

document.querySelector('#menu-desliza').addEventListener('mouseleave',() => {
    document.querySelector('#menu-desliza').style.left = '-250px'
})