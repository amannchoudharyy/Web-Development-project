const notices = document.getElementsByClassName('notices')
 noticehead = document.querySelectorAll('.noticehead')
function togglenotices(){
    let itemClass = this.parentNode.className

    for(i = 0; i < notices.length; i++){
        notices[i].className = 'notices notice-close'
    }
 if(itemClass === 'notices notice-close'){
     this.parentNode.className = 'notices notice-open'
 }
}
noticehead.forEach((el) =>{
    el.addEventListener('click',togglenotices)
})