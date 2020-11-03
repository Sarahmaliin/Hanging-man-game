//Ska vi ha olika bilder som roterar beroende på om du har fel eller rätt

//jaa det låter bra

//timer on reload

let movies = ["casablanca", "titanic", "inception", "aliens", "transformers", "aladdin", "avatar"];

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
hej hej
hej

funderar just nu på att när man väl gissat klart, få ett meddelande lr ngt/alternativt om vi ska ha maxgissningar för att hålla koll?
ja man kan göra en variable som följer antal misstag och det addas en varje gång man gör fel
super, 

*/
//let word = movies[Math.floor(Math.random()*movies.lenght)];||

let word = movies[Math.floor(Math.random() * movies.length)];
let guesses = 10;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "__";
}
console.log(answerArray);
document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
//while loop? medan numberofMistakes är mindre än tio körs detta? haha fast då måste iofs alla ha 10..  jag är lite dålig med loopar du kan testa det om du vill 
//samma här faktiskt, bara spånar haha :P ska se om hittar ngt

//funkar ej, kollar upp, tror det är för att multipla if-statements.. men försöker hitta ngt.. 
//med while loopen där det verkar krascha 
    document.getElementById('a').addEventListener('click', () => {
        if (word.includes("a")) {
            //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
            //anv sig av join() metoden? lägger ihop alla element i en array till sträng..?
            //venne om funkar, men hitta på youtube
            //vi testar
            //tar bara bort kommatecknena, alt om man skriver in "a" vid join skriver den ut a ist för kommatecken
            //undrar om vi kan använda det för att ta bort komma från answerArray i html 
            //ändrade kod till detta ist för ovan, då skrivs bokstäver ut men sparas ej, undersöker hur sparar..
            //hiddenWord.innerHTML = 'a';
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'a') {
                    answerArray[i] = ("a");
                    
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('a').disabled = true;
        }
        //function + if-statement om vunnit/förlorat
        //sätta till if-statement häri? if won = text, else if lost = text..
    });
    

    // jag tar paus kan inte komma på något bra sätt att loppa igenom array och får alla index som har "a". Vi kan testa imorgon igen.
    //Okej vi gör så, hörs imorrn, bra jobbat :)
    //funkar görbra, bara när man har flera av samma den inte reagerar dock och går inte o klicka multipla ggr.. annars svinbra ju :)
    // det verkar vara case sensitive också 

    //eller om man kan anv toggle för att visa bokstaven i ordet på ngt sätt vid klick? Som den goldilocksövningen?
    // man togglar hela html elememten där tror inte det går
    //ahaa okej, attans...

    document.getElementById('b').addEventListener('click', () => {
        if (word.includes("b")) {
            //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'b') {
                    answerArray[i] = ("b");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('b').disabled = true;
        }

    });
    document.getElementById('c').addEventListener('click', () => {
        if (word.includes("c")) {
            //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'c') {
                    answerArray[i] = ("c");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('c').disabled = true;
        }
    });
    document.getElementById('d').addEventListener('click', () => {
        if (word.includes("d")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'd') {
                    answerArray[i] = ("d");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('d').disabled = true;
        }
    });
    document.getElementById('e').addEventListener('click', () => {
        if (word.includes("e")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'e') {
                    answerArray[i] = ("e");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('e').disabled = true;
        }

    });
    document.getElementById('f').addEventListener('click', () => {
        if (word.includes("f")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'f') {
                    answerArray[i] = ("f");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('f').disabled = true;
        }
    });
    document.getElementById('g').addEventListener('click', () => {
        if (word.includes("g")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'g') {
                    answerArray[i] = ("g");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('g').disabled = true;
        }
    });
    document.getElementById('h').addEventListener('click', () => {
        if (word.includes("h")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'h') {
                    answerArray[i] = ("h");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('h').disabled = true;
        }

    });
    document.getElementById('i').addEventListener('click', () => {
        if (word.includes("i")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'i') {
                    answerArray[i] = ("i");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('i').disabled = true;
        }
    });
    document.getElementById('j').addEventListener('click', () => {
        if (word.includes("j")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'j') {
                    answerArray[i] = ("j");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('j').disabled = true;
        }
    });
    document.getElementById('k').addEventListener('click', () => {
        if (word.includes("k")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'k') {
                    answerArray[i] = ("k");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('k').disabled = true;
        }
    });
    document.getElementById('l').addEventListener('click', () => {
        if (word.includes("l")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'l') {
                    answerArray[i] = ("l");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('l').disabled = true;
        }
    });
    document.getElementById('m').addEventListener('click', () => {
        if (word.includes("m")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'm') {
                    answerArray[i] = ("m");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('m').disabled = true;
        }
    });
    document.getElementById('n').addEventListener('click', () => {
        if (word.includes("n")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'n') {
                    answerArray[i] = ("n");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('n').disabled = true;
        }
    });
    document.getElementById('o').addEventListener('click', () => {
        if (word.includes("o")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'o') {
                    answerArray[i] = ("o");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('o').disabled = true;
        }
    });
    document.getElementById('p').addEventListener('click', () => {
        if (word.includes("p")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'p') {
                    answerArray[i] = ("p");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('p').disabled = true;
        }
    });
    document.getElementById('q').addEventListener('click', () => {
        if (word.includes("q")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'q') {
                    answerArray[i] = ("q");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('q').disabled = true;
        }
    });
    document.getElementById('r').addEventListener('click', () => {
        if (word.includes("r")) {
            //detta ska vara ordet som includerar boktav som man valdet, ifall man har rätt. Funderar på hur man ska komma dit;
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'r') {
                    answerArray[i] = ("r");
                }
            }
            //anv sig av join() metoden? lägger ihop alla element i en array till sträng..? Se ovan?
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('r').disabled = true;
        }
    });
    document.getElementById('s').addEventListener('click', () => {
        if (word.includes("s")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 's') {
                    answerArray[i] = ("s");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('s').disabled = true;
        }
    });
    document.getElementById('t').addEventListener('click', () => {
        if (word.includes("t")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 't') {
                    answerArray[i] = ("t");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('t').disabled = true;
        }
    });
    document.getElementById('u').addEventListener('click', () => {
        if (word.includes("u")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'u') {
                    answerArray[i] = ("u");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('u').disabled = true;
        }
    })
        ; document.getElementById('v').addEventListener('click', () => {
            if (word.includes("v")) {
                for (i = 0; i < word.length; i++) {
                    if (word[i] === 'v') {
                        answerArray[i] = ("v");
                    }
                }
                document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
                console.log("you are right")
            }
            else {
                console.log("you are wrong")
            }
            if (guesses === 0){
                document.getElementById('hiddenWord').innerHTML = "You lose";
                document.getElementById('v').disabled = true;
            }
        });

    document.getElementById('w').addEventListener('click', () => {
        if (word.includes("w")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'w') {
                    answerArray[i] = ("w");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('w').disabled = true;
        }
    });
    document.getElementById('x').addEventListener('click', () => {
        if (word.includes("x")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'x') {
                    answerArray[i] = ("x");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('x').disabled = true;
        }
    });
    document.getElementById('y').addEventListener('click', () => {
        if (word.includes("y")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'y') {
                    answerArray[i] = ("y");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('y').disabled = true;
        }
    });
    document.getElementById('z').addEventListener('click', () => {
        if (word.includes("z")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'z') {
                    answerArray[i] = ("z");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('z').disabled = true;
        }
    });
    document.getElementById('å').addEventListener('click', () => {
        if (word.includes("å")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'å') {
                    answerArray[i] = ("å");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('å').disabled = true;
        }
    });
    document.getElementById('ä').addEventListener('click', () => {
        if (word.includes("ä")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'ä') {
                    answerArray[i] = ("ä");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('ä').disabled = true;
        }
    });
    document.getElementById('ö').addEventListener('click', () => {
        if (word.includes("ö")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'ö') {
                    answerArray[i] = ("ö");
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            console.log("you are right")
            }
            else {
                console.log("you are wrong")
                guesses--;
                console.log(guesses);
        }

        if (guesses === 0){
            document.getElementById('hiddenWord').innerHTML = "You lose";
            document.getElementById('ö').disabled = true;
        }
    });
