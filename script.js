let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let restartBoton = document.getElementById("restart");
let volverBoton = document.getElementById("buttonvolver");




playBoton.addEventListener('click',()=>{
    video.play()

   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});

restartBoton.addEventListener('click',()=>{
    video.currentTime = 0;
    video.load();
})

volverBoton.addEventListener('click',()=>{
        
    if(sast.style.display == 'none'){
        sast.style.display = 'block';
    }
})

function showme(id) {

    let icon = document.getElementById(id);
    let SAST = document.getElementById("imagen1");
    let SHART = document.getElementById("imagen2");
    let KARL = document.getElementById("imagen3");


    if(icon.style.display == 'block') {
        icon.style.display = 'none';
        SAST.innerHTML = '';
        SHART.innerHTML = '';
        KARL.innerHTML = '';
    } else {
        icon.style.display = 'block';
        SAST.innerHTML = '';
        SHART.innerHTML = '';
        KARL.innerHTML = '';
    }
}