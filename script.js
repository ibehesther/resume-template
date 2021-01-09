const progressBar=()=>{
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
   
} 
// progressBar();

const navIconFocus=()=>{
    var navIcon2= document.getElementById("nav5");
    var circle= document.getElementsByClassName('circle');
    var no = document.getElementsByClassName('no');
    var personalDetails = document.getElementById('personal-details');
    var professionalSkills = document.getElementById('professional-skills');
    var educationInfo = document.getElementById('education-info');
    console.log('working');
    // document.getElementsByTagName('body')[0].onscroll= () => {
    //     console.log(educationInfo.offsetTop);
    // };
    var observer = new IntersectionObserver(function(entries){
        for (let i=0; i < entries.length; i++){
            if ( entries[i].intersectionRatio > 0.3  ){
                console.log(entries.length);
                console.log(entries);
                circle[i].style.backgroundColor= '#F6B618';
                circle[i].style.fontSize= '2vw';
                no[i].style.visibility='visible';
                var removeCircle= [...circle];
                removeCircle.splice(i, 1);
                var removeNo= [...no];
                removeNo.splice(i, 1);
                for (var j=0; j < removeCircle.length; j++){
                    removeCircle[i].style.backgroundColor= 'rgb(88,88,88)';
                    removeNo[i].style.visibility='hidden';
                }
            }
        }
    }, {threshold: [0.1] });
        observer.observe(personalDetails);
        observer.observe(educationInfo);
        observer.observe(professionalSkills);
   
   
    
    
    
}
navIconFocus();