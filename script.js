(()=>{
    var progress1= document.getElementById('progress1');
    progress1.addEventListener('click', ()=>{
        var id1= document.getElementById('id1')
        id1.innerHTML= `${progress1.value}%`;
        progress1.style.backgroundImage= `linear-gradient(to right, #F6B618 ${progress1.value}%,  #ffffff33 ${100 - progress1.value}%)`
    })
    var progress2= document.getElementById('progress2');
    progress2.addEventListener('click', ()=>{
        var id2= document.getElementById('id2')
        id2.innerHTML= `${progress2.value}%`;
        progress2.style.backgroundImage= `linear-gradient(to right, #F6B618 ${progress2.value}%,  #ffffff33 ${100 - progress2.value}%)`
    })
    var progress3= document.getElementById('progress3');
    progress3.addEventListener('click', ()=>{
        var id3= document.getElementById('id3')
        id3.innerHTML= `${progress3.value}%`;
        progress3.style.backgroundImage= `linear-gradient(to right, #F6B618 ${progress3.value}%,  #ffffff33 ${100 - progress3.value}%)`
    })
    var progress4= document.getElementById('progress4');
    progress4.addEventListener('click', ()=>{
        var id4= document.getElementById('id4')
        id4.innerHTML= `${progress4.value}%`;
        progress4.style.backgroundImage= `linear-gradient(to right, #F6B618 ${progress4.value}%,  #ffffff33 ${100 - progress4.value}%)`
    })
    var progress5= document.getElementById('progress5');
    progress5.addEventListener('click', ()=>{
        var id5= document.getElementById('id5')
        id5.innerHTML= `${progress5.value}%`;
        progress5.style.backgroundImage= `linear-gradient(to right, #F6B618 ${progress5.value}%,  #ffffff33 ${100 - progress5.value}%)`
    })
   
}) ();