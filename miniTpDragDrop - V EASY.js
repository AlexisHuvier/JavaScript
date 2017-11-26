var nb;

while(isNaN(nb= prompt("Combien voulez vous de box ?")))
{
    alert("ERREUR : "+nb+" n'est pas un nombre !")
}

for(var i = 0; i<nb;i++)
{
    var box = document.createElement("div");
    box.className = "draggableBox";
    box.innerHTML = i+1;
    document.getElementsByTagName("body")[0].appendChild(box);
}

var boxs = document.querySelectorAll('.draggableBox'),
    drag;

for(var i = 0, c = boxs.length; i<c ; i++)
{
    boxs[i].addEventListener("mousedown", function(e){
        drag = e.target;
    });
    
    boxs[i].addEventListener("mouseup", function(){
        drag = undefined;
    });
    
    document.addEventListener("mousemove", function(e){
        if (drag) 
        {
            drag.style.top = e.clientY - 25 + 'px';
            drag.style.left = e.clientX - 50 + 'px';
        }
    });
}