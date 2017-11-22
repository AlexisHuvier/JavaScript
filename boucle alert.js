function test(args){
    for(var i=1; i<=args; i++) {
        alert("Boucle "+i);
    }
}

var number;

while(isNaN(number)){
    number=parseInt(prompt("Entrez un nombre : "));
}
alert("Vous allez avoir "+number+" boucles");
test(number);