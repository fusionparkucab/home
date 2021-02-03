
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 


const aquaimg = document.querySelector('.aquadiv .img-logo');
const caeliimg = document.querySelector('.caelidiv .img-logo');
const ignisimg = document.querySelector('.ignisdiv .img-logo');
const terraimg = document.querySelector('.terradiv .img-logo');
const aquadiv = document.querySelector('.aquadiv');
const caelidiv = document.querySelector('.caelidiv');
const ignisdiv = document.querySelector('.ignisdiv');
const terradiv = document.querySelector('.terradiv');
const welcomeDiv = document.querySelector('.welcome');



let audioaqua = document.getElementById("aqua");
let audiocaeli = document.getElementById("caeli");
let audioignis = document.getElementById("ignis");
let audioterra = document.getElementById("terra");




//animate In Desktop
aquadiv.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    aquaimg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY);
});

//animate Out Desktop
aquadiv.addEventListener('mouseenter', (e) =>{
    aquaimg.style.transition = "box-shadow ease-in 0.2s";
    audioaqua.play();
    
    
});


aquadiv.addEventListener('mouseleave', (e) =>{
    aquaimg.style.transition = "all 0.5s ease";
    aquaimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioaqua.currentTime = 0;
    audioaqua.pause()
    
    
});

//animate In Mobile
aquadiv.addEventListener('touchmove', (e) =>{
    for (let i=0; i < e.changedTouches.length; i++) {
      let xAxis = (window.innerWidth / 2 - e.changedTouches[i].pageX);
      let yAxis = (window.innerHeight / 2 - e.changedTouches[i].pageY);
      aquaimg.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      console.log(e.changedTouches[i].pageX, e.changedTouches[i].pageY, );
    }
    audioaqua.play();
  });
  
  //animate Out Mobile

  aquadiv.addEventListener('touchend', (e) =>{
    aquaimg.style.transition = "all 0.5s ease";
    aquaimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioaqua.currentTime = 0;
    audioaqua.pause()
  });

  
//animate In Desktop
caelidiv.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    caeliimg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY);
});

//animate Out Desktop
caelidiv.addEventListener('mouseenter', (e) =>{
    caeliimg.style.transition = "box-shadow ease-in 0.2s";
    audiocaeli.play();
    
});


caelidiv.addEventListener('mouseleave', (e) =>{
    caeliimg.style.transition = "all 0.5s ease";
    caeliimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audiocaeli.currentTime = 0;
    audiocaeli.pause()
});

//animate In Mobile
caelidiv.addEventListener('touchmove', (e) =>{
    for (let i=0; i < e.changedTouches.length; i++) {
      let xAxis = (window.innerWidth / 2 - e.changedTouches[i].pageX);
      let yAxis = (window.innerHeight / 2 - e.changedTouches[i].pageY);
      caeliimg.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      console.log(e.changedTouches[i].pageX, e.changedTouches[i].pageY, );
    }
    audiocaeli.play();
  });
  
  //animate Out Mobile

  
  
  caelidiv.addEventListener('touchend', (e) =>{
    caeliimg.style.transition = "all 0.5s ease";
    caeliimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audiocaeli.currentTime = 0;
    audiocaeli.pause()
  });


//animate In Desktop
ignisdiv.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    ignisimg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY);
});

//animate Out Desktop
ignisdiv.addEventListener('mouseenter', (e) =>{
    ignisimg.style.transition = "box-shadow ease-in 0.2s";
    audioignis.play();
    
});


ignisdiv.addEventListener('mouseleave', (e) =>{
    ignisimg.style.transition = "all 0.5s ease";
    ignisimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioignis.currentTime = 0;
    audioignis.pause()
});

//animate In Mobile
ignisdiv.addEventListener('touchmove', (e) =>{
    for (let i=0; i < e.changedTouches.length; i++) {
      let xAxis = (window.innerWidth / 2 - e.changedTouches[i].pageX);
      let yAxis = (window.innerHeight / 2 - e.changedTouches[i].pageY);
      ignisimg.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      console.log(e.changedTouches[i].pageX, e.changedTouches[i].pageY, );
    }
    audioignis.play();
  });
  
  //animate Out Mobile

  
  ignisdiv.addEventListener('touchend', (e) =>{
    ignisimg.style.transition = "all 0.5s ease";
    ignisimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioignis.currentTime = 0;
    audioignis.pause()
  });

  
//animate In Desktop
terradiv.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    terraimg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(e.pageX, e.pageY);
});

//animate Out Desktop
terradiv.addEventListener('mouseenter', (e) =>{
    terraimg.style.transition = "box-shadow ease-in 0.2s";
    audioterra.play();
    
});


terradiv.addEventListener('mouseleave', (e) =>{
    terraimg.style.transition = "all 0.5s ease";
    terraimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioterra.currentTime = 0;
    audioterra.pause()
});

//animate In Mobile
terradiv.addEventListener('touchmove', (e) =>{
    for (let i=0; i < e.changedTouches.length; i++) {
      let xAxis = (window.innerWidth / 2 - e.changedTouches[i].pageX);
      let yAxis = (window.innerHeight / 2 - e.changedTouches[i].pageY);
      terraimg.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      console.log(e.changedTouches[i].pageX, e.changedTouches[i].pageY, );
    }
    audioterra.play();
  });
  
  //animate Out Mobile
  
  terradiv.addEventListener('touchend', (e) =>{
    terraimg.style.transition = "all 0.5s ease";
    terraimg.style.transform = `rotateY(0deg) rotateX(0deg)`;
    audioterra.currentTime = 0;
    audioterra.pause()
  });

 
function start() {
    welcomeDiv.style.transform = 'translateX(100%)';
    
}

function backgroundMove() {
    
    setTimeout(function(){welcomeDiv.style.backgroundColor = "#0098ff";}, 1000); 
    setTimeout(function(){welcomeDiv.style.backgroundColor = '#d8ffcc';}, 2000);
    setTimeout(function(){welcomeDiv.style.backgroundColor = '#f91b1b';}, 3000); 
    setTimeout(function(){
        welcomeDiv.style.backgroundColor = '#d87b2a';
        backgroundMove()
    }, 4000);  
}

backgroundMove();

function myFunction() {
  setTimeout(function(){ alert("Hello"); }, 3000);
}