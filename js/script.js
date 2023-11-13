// ================== back to top button ================
let back_to_top = document.querySelector('.back_to_top_button')
console.log(back_to_top)

window.addEventListener('scroll', ()=>{
    let scorlling = this.scrollY
    if(scorlling > 100){
        back_to_top.classList.add('go_top')
    }
    else{
        back_to_top.classList.remove('go_top')
    }
})
back_to_top.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        vehavior:"smooth",
    })
})

// ================= menu fixed===============
let menu_bar = document.querySelector('.menu_bar')
console.log(menu_bar)
window.addEventListener('scroll', function(){
    let scrolling = this.scrollY
    if (scrolling > 100){
        menu_bar.classList.add('menu_fixed')
    }else{
        menu_bar.classList.remove('menu_fixed')
    }
})