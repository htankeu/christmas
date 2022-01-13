const ring=(a)=>{
    const audio=new Audio();
    audio.src= a + ".mp3";
    audio.play();
};

const keypressContainer=document.getElementById("key");
key.textContent="a";
document.addEventListener("keypress",(e)=>{
    if(e.key==="a"){
        ring("a");;
        key.textContent="w";
    }else if(e.key==="w"){
        ring("w");
        key.textContent="i";
    }else if(e.key==="i"){
        ring("i");
        key.textContent="c";
    }else if(e.key==="c"){
        ring("c");
        key.textContent="h";
    }else if(e.key==="h"){
        ring("h");
        key.textContent="y";
    }else if(e.key==="y"){
        ring("y");
        key.textContent="o";
    }else if(e.key==="o"){
        ring("o");
        key.textContent="u";
    }else if(e.key==="u"){
        ring("u");
        key.textContent="Have a Happy new Year";
    }else{
        key.textContent="a";
    }
})