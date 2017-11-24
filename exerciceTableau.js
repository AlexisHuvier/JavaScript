var nicks = [],
    nick;

while (true) 
{
    nick = prompt('Entrez un prénom :');

    if (nick) 
    {
        nicks.push(nick)
    } 
    else 
    {
        break; // On quitte la boucle
    }
}

if (nicks.length == 0)
{
    alert("Aucun prénom à afficher !")
}
else
{
    alert(nicks.join(' ')) // Affiche les prénoms à la suite
}