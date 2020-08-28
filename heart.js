var welcom = document.getElementById("welcom")
var nxt = document.getElementById("nxt")
var icon = document.getElementById("icon")
var grand = document.getElementById("gq")
var final = document.getElementById("final")
var last = document.getElementById("last")

welcom.addEventListener('click', function(){
   if(change.style.display === 'none'){
       change.style.display = 'block';
       icon.style.display = 'none';
   }
})
nxt.addEventListener('click', function(){
    if(quiz.style.display === 'none'){
        change.style.display = 'none';
        quiz.style.display = 'block';
    }
 })
 grand.addEventListener('click', function(){
    if(box.style.display === 'none'){
        box.style.display = 'block';
        quiz.style.display = 'none';
    }
 })
last.addEventListener('click', function(){
    var inputVal = document.getElementById("inputValidationEx2").value;
    if(document.getElementById("inputValidationEx2").value === "Kuchiku"){
        box.style.display = 'none';
        final.style.display = 'block';
    }else{
        alert("Enter correct password")
    }
 })
setInterval(function(){
    var i = document.getElementById("menu").innerHTML
    if(i == "BIRTHDAY"){
        document.getElementById("menu").innerHTML = "TOGETHERNESS..BLA BLA"
        menu.style.color = '#ec407a';
    }else if(i == "TOGETHERNESS..BLA BLA"){
        document.getElementById("menu").innerHTML = "BIRTHDAY"
        menu.style.color = '#00e676';
    }
}, 1000)