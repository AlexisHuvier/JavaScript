function toLetters(nb)
{
    var chiffres=[],
        nTol = {
            1: "un",
            2: "deux",
            3: "trois",
            4: "quatre",
            5: "cinq",
            6: "six",
            7: "sept",
            8: "huit",
            9: "neuf",
            10: "dix",
            20: "vingt",
            30: "trente",
            40: "quarante",
            50: "cinquante",
            60: "soixante",
            70: "soixante-dix",
            80: "quatre-vingt",
            90: "quatre-vingt-dix"
        },
        temp = nb.toString(10).split('');
    if (temp.length == 1)
    {
        chiffres.push(nb);
    }
    else if(temp.length == 2)
    {
        chiffres.push(nb-(nb%10));
        chiffres.push(nb%10);
    }
    else
    {
        chiffres.push((nb-nb%100)/100);
        chiffres.push(nb-(nb-(nb%100))-(nb%10));
        chiffres.push(nb%10);
    }
    alert(chiffres);
    
    if (chiffres.length == 1)
    {
        return nTol[chiffres[0]];
    }
    else if (chiffres.length == 2)
    {
        return nTol[chiffres[0]]+" "+nTol[chiffres[1]];
    }
    else
    {
        return nTol[chiffres[0]] + " cent " + nTol[chiffres[1]]+" "+nTol[chiffres[2]];
    }
}

while (true)
{
    var nb = parseInt(prompt("Entrez un nombre de 0 à 100: "),10)
    if (isNaN(nb))
    {
        alert("Ce n'est pas un nombre"); 
    }
    else if (nb>0)
    {
        if (nb<999)
        {
            break;
        }
        else
        {
            alert("Ce nombre est supérieur à 999");
        }
    }
    else
    {
        alert("Ce nombre est inférieur à 0")
    }
}
alert(toLetters(nb))