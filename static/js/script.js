// challenge 1: Your Age in Days 
function ageInDays(){

    var birthYear=prompt("What year were you born... Good friend?");
    var ageInDayss=(2018-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswear=document.createTextNode('You are '+ageInDayss+' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswear);
    document.getElementById('flex-box-result').appendChild(h1);
}

