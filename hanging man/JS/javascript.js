//Ska vi ha olika bilder som roterar beroende på om du har fel eller rätt

//jaa det låter bra

//timer on reload

let movies = ["Casablanca", "Titanic", "Inception", "Aliens", "Transformers","Aladdin","Avatar"];

/*let letters =[
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

*/
//let word = movies[Math.floor(Math.random()*movies.lenght)];
let word = movies.[Math.floor(Math.random()*movies.length)];
word
let answerArray = [];
for (let i = 0; i < word.length; i++) {
 answerArray[i] = "__";
}
let remainingLetters = word.length;
console.log(answerArray);
document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
// jag tar en 20 min rast vill dusha
//gör så, pausar lite 
//aah det funkade, inga komman nu!
//console.log funkar kanon enl nedan.. 
//Tvärtom nu, gissar man rätt kommer kommatecken fram
document.getElementById('a').addEventListener('click', () => {
    if (word.includes("a")){
        //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
       //anv sig av join() metoden? lägger ihop alla element i en array till sträng..?
       //venne om funkar, men hitta på youtube
       //vi testar
       //tar bara bort kommatecknena, alt om man skriver in "a" vid join skriver den ut a ist för kommatecken
       //undrar om vi kan använda det för att ta bort komma från answerArray i html 
        //ändrade kod till detta ist för ovan, då skrivs bokstäver ut men sparas ej, undersöker hur sparar..
        //hiddenWord.innerHTML = 'a';
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'a') {
                answerArray[i] =  ("a");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
// jag tar paus kan inte komma på något bra sätt att loppa igenom array och får alla index som har "a". Vi kan testa imorgon igen.
//Okej vi gör så, hörs imorrn, bra jobbat :)
//funkar görbra, bara när man har flera av samma den inte reagerar dock och går inte o klicka multipla ggr.. annars svinbra ju :)
// det verkar vara case sensitive också 

//eller om man kan anv toggle för att visa bokstaven i ordet på ngt sätt vid klick? Som den goldilocksövningen?
// man togglar hela html elememten där tror inte det går
//ahaa okej, attans...

document.getElementById('b').addEventListener('click', () => {
    if (word.includes("b")){
        //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'b') {
                answerArray[i] =  ("b");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('c').addEventListener('click', () => {
    if (word.includes("c")){
        //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'c') {
                answerArray[i] =  ("c");
          }
        }
        
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('d').addEventListener('click', () => {
    if (word.includes("d")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'd') {
                answerArray[i] =  ("d");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('e').addEventListener('click', () => {
    if (word.includes("e")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'e') {
                answerArray[i] =  ("e");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }

});
document.getElementById('f').addEventListener('click', () => {
    if (word.includes("f")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'f') {
                answerArray[i] =  ("f");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('g').addEventListener('click', () => {
    if (word.includes("g")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'g') {
                answerArray[i] =  ("g");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('h').addEventListener('click', () => {
    if (word.includes("h")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'h') {
                answerArray[i] =  ("h");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }

});
document.getElementById('i').addEventListener('click', () => {
    if (word.includes("i")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'i') {
                answerArray[i] =  ("i");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('j').addEventListener('click', () => {
    if (word.includes("j")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'j') {
                answerArray[i] =  ("j");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('k').addEventListener('click', () => {
    if (word.includes("k")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'k') {
                answerArray[i] =  ("k");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('l').addEventListener('click', () => {
    if (word.includes("l")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'l') {
                answerArray[i] =  ("l");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('m').addEventListener('click', () => {
    if (word.includes("m")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'm') {
                answerArray[i] =  ("m");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('n').addEventListener('click', () => {
    if (word.includes("n")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'n') {
                answerArray[i] =  ("n");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('o').addEventListener('click', () => {
    if (word.includes("o")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'o') {
                answerArray[i] =  ("o");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('p').addEventListener('click', () => {
    if (word.includes("p")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'p') {
                answerArray[i] =  ("p");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('q').addEventListener('click', () => {
    if (word.includes("q")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'q') {
                answerArray[i] =  ("q");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('r').addEventListener('click', () => {
    if (word.includes("r")){
        //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'r') {
                answerArray[i] =  ("r");
          }
        }
       //anv sig av join() metoden? lägger ihop alla element i en array till sträng..? Se ovan?
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('s').addEventListener('click', () => {
    if (word.includes("s")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 's') {
                answerArray[i] =  ("s");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('t').addEventListener('click', () => {
    if (word.includes("t")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 't') {
                answerArray[i] =  ("t");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('u').addEventListener('click', () => {
    if (word.includes("u")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'u') {
                answerArray[i] =  ("u");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
})
;document.getElementById('v').addEventListener('click', () => {
    if (word.includes("v")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'v') {
                answerArray[i] =  ("v");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});

document.getElementById('w').addEventListener('click', () => {
    if (word.includes("w")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'w') {
                answerArray[i] =  ("w");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('x').addEventListener('click', () => {
    if (word.includes("x")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'x') {
                answerArray[i] =  ("x");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('y').addEventListener('click', () => {
    if (word.includes("y")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'y') {
                answerArray[i] =  ("y");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('z').addEventListener('click', () => {
    if (word.includes("z")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'z') {
                answerArray[i] =  ("z");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('å').addEventListener('click', () => {
    if (word.includes("å")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'å') {
                answerArray[i] =  ("å");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('ä').addEventListener('click', () => {
    if (word.includes("ä")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'ä') {
                answerArray[i] =  ("ä");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});
document.getElementById('ö').addEventListener('click', () => {
    if (word.includes("ö")){
        for(i = 0; i < word.length; i++) {
            if (word[i] === 'ö') {
                answerArray[i] =  ("ö");
          }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        console.log("you are right")
    }
    else {
        console.log("you are wrong")
    }
});