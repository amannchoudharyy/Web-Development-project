function toggleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display == 'none'){
        para.style.display = 'block';
    }
    else{
        para.style.display = 'none';
    }
}
// const helo = document.querySelector('.uil-bars');
// helo.addEventListener('click', () =>{
//     helo.classList.add('uil-times');
// })
//  const hey = document.querySelector('.uil-times');
//  hey.addEventListener('click', () =>{
//      hey.classList.add('uil-bars');
//  })