
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
let lives = 10;
let counter = 0;
let word = movies[Math.floor(Math.random() * movies.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "__";
}
winORLooseToHTML = () => {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";

    }
    for (var i = 0; i < word.length; i++) {
      if (counter === word.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");

winORLooseToHTML();
document.getElementById('a').addEventListener('click', () => {
    if (word.includes("a")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'a') {
                answerArray[i] = ("a");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('a').disabled = true;
});

document.getElementById('b').addEventListener('click', () => {
    if (word.includes("b")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'b') {
                answerArray[i] = ("b");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--;
        winORLooseToHTML();
    }
    document.getElementById('b').disabled = true;
});
document.getElementById('c').addEventListener('click', () => {
    if (word.includes("c")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'c') {
                answerArray[i] = ("c");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('c').disabled = true;
});
document.getElementById('d').addEventListener('click', () => {
    if (word.includes("d")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'd') {
                answerArray[i] = ("d");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('d').disabled = true;
});
document.getElementById('e').addEventListener('click', () => {
    if (word.includes("e")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'e') {
                answerArray[i] = ("e");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('e').disabled = true;
});
document.getElementById('f').addEventListener('click', () => {
    if (word.includes("f")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'f') {
                answerArray[i] = ("f");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('f').disabled = true;
});
document.getElementById('g').addEventListener('click', () => {
    if (word.includes("g")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'g') {
                answerArray[i] = ("g");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('g').disabled = true;
});
document.getElementById('h').addEventListener('click', () => {
    if (word.includes("h")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'h') {
                answerArray[i] = ("h");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; winORLooseToHTML();
    }
    document.getElementById('h').disabled = true;
});
document.getElementById('i').addEventListener('click', () => {
    if (word.includes("i")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'i') {
                answerArray[i] = ("i");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; winORLooseToHTML();
    }
    document.getElementById('i').disabled = true;
});
document.getElementById('j').addEventListener('click', () => {
    if (word.includes("j")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'j') {
                answerArray[i] = ("j");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('j').disabled = true;
});
document.getElementById('k').addEventListener('click', () => {
    if (word.includes("k")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'k') {
                answerArray[i] = ("k");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {

        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('k').disabled = true;
});
document.getElementById('l').addEventListener('click', () => {
    if (word.includes("l")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'l') {
                answerArray[i] = ("l");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('l').disabled = true;
});
document.getElementById('m').addEventListener('click', () => {
    if (word.includes("m")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'm') {
                answerArray[i] = ("m");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('m').disabled = true;
});
document.getElementById('n').addEventListener('click', () => {
    if (word.includes("n")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'n') {
                answerArray[i] = ("n");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('n').disabled = true;
});
document.getElementById('o').addEventListener('click', () => {
    if (word.includes("o")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'o') {
                answerArray[i] = ("o");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();

    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('o').disabled = true;
});
document.getElementById('p').addEventListener('click', () => {
    if (word.includes("p")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'p') {
                answerArray[i] = ("p");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();

    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('p').disabled = true;
});
document.getElementById('q').addEventListener('click', () => {
    if (word.includes("q")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'q') {
                answerArray[i] = ("q");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('q').disabled = true;
});
document.getElementById('r').addEventListener('click', () => {
    if (word.includes("r")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'r') {
                answerArray[i] = ("r");
                counter++;
            }
        }
        //anv sig av join() metoden? lägger ihop alla element i en array till sträng..? Se ovan?
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('r').disabled = true;
});
document.getElementById('s').addEventListener('click', () => {
    if (word.includes("s")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 's') {
                answerArray[i] = ("s");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('s').disabled = true;
});
document.getElementById('t').addEventListener('click', () => {
    if (word.includes("t")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 't') {
                answerArray[i] = ("t");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('t').disabled = true;
});
document.getElementById('u').addEventListener('click', () => {
    if (word.includes("u")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'u') {
                answerArray[i] = ("u");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('u').disabled = true;
})
    ; document.getElementById('v').addEventListener('click', () => {
        if (word.includes("v")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'v') {
                    answerArray[i] = ("v");
                    counter++;
                }
            }
            document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
            winORLooseToHTML();
        }
        else {
            lives--; winORLooseToHTML();
        }
        document.getElementById('v').disabled = true;
    });

document.getElementById('w').addEventListener('click', () => {
    if (word.includes("w")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'w') {
                answerArray[i] = ("w");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('w').disabled = true;
});
document.getElementById('x').addEventListener('click', () => {
    if (word.includes("x")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'x') {
                answerArray[i] = ("x");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('x').disabled = true;
});
document.getElementById('y').addEventListener('click', () => {
    if (word.includes("y")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'y') {
                answerArray[i] = ("y");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; winORLooseToHTML();
    }
    document.getElementById('y').disabled = true;
});
document.getElementById('z').addEventListener('click', () => {
    if (word.includes("z")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'z') {
                answerArray[i] = ("z");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('z').disabled = true;
});
document.getElementById('å').addEventListener('click', () => {
    if (word.includes("å")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'å') {
                answerArray[i] = ("å");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('å').disabled = true;
});
document.getElementById('ä').addEventListener('click', () => {
    if (word.includes("ä")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'ä') {
                answerArray[i] = ("ä");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('ä').disabled = true;
});
document.getElementById('ö').addEventListener('click', () => {
    if (word.includes("ö")) {
        for (i = 0; i < word.length; i++) {
            if (word[i] === 'ö') {
                answerArray[i] = ("ö");
                counter++;
            }
        }
        document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");
        winORLooseToHTML();
    }
    else {
        lives--; 
        winORLooseToHTML();
    }
    document.getElementById('ö').disabled = true;
});
