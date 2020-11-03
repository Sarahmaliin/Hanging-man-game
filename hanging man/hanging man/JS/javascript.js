
//timer on reload
let movies = ["casablanca", "titanic", "inception", "aliens", "transformers", "aladdin", "avatar"];

let word = movies[Math.floor(Math.random() * movies.length)]; //randomiserar film från listan ovan. 
let guesses = 10; //antal gånger man får gissa fel innan spelet avslutas. 

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "__"; //ersätter bokstäver i randomiserat ord med _
}
console.log(answerArray);
document.getElementById('hiddenWord').innerHTML = answerArray.join(" ");

    document.getElementById('a').addEventListener('click', () => { 
        if (word.includes("a")) { 
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
                    document.getElementById('hiddenWord').innerHTML = "Game over";
                    document.getElementById('a').disabled = true;
                }
    });

    document.getElementById('b').addEventListener('click', () => {
        if (word.includes("b")) {
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
            document.getElementById('b').disabled = true;
        }

    });
    document.getElementById('c').addEventListener('click', () => {
        if (word.includes("c")) {
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
            document.getElementById('q').disabled = true;
        }
    });
    document.getElementById('r').addEventListener('click', () => {
        if (word.includes("r")) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === 'r') {
                    answerArray[i] = ("r");
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
                document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
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
            document.getElementById('hiddenWord').innerHTML = "Game over";
            document.getElementById('ö').disabled = true;
        }
    });
