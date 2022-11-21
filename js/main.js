/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//richiama elementi html
const container = document.getElementById("container");
const numbersBox = document.getElementById("numbers_box");
const inputBox = document.querySelector(".inputs");


document.getElementById("play").addEventListener("click",
    function () {
        //imposta punteggio a 0
        let punteggio = 0;

        //genera 5 numeri random in un array
        const randomNumbers = arrRandomNumMinMax(5,1,100);
        console.log("numeri random ", randomNumbers);

        //stampali in pagina
        for (let i = 0; i < randomNumbers.length; i++) {
            numbersBox.innerHTML += `${randomNumbers[i]}, `;
        }

        //timer 30s che fa scomparire numeri e fa comparire messaggio con input text per utente
        let seconds = 2;
        let timer = setInterval(function(){
            
            console.log(seconds);
            if (seconds === 0) {
                numbersBox.innerHTML = `inserisci i ${randomNumbers.length} numeri che hai visto`;
                inputBox.classList.add("active");
                clearInterval(timer);
            } else {
                seconds--;
            }
            
        }, 1000);

        //inserimento numeri utente
        const inputText = document.getElementById("input_text");
        const userNumbers = [];
        document.getElementById("send").addEventListener("click", onSendClick);

        function onSendClick () {

            let inputUser = parseInt(inputText.value);
            console.log(inputUser);
        
            if (userNumbers.length < randomNumbers.length) {
            
                if (!userNumbers.includes(inputUser)) {
                    userNumbers.push(inputUser);
                } else {
                    alert("hai gia inserito questo numero");
                }
                console.log(userNumbers); 
            
            } 
        
            if (userNumbers.length === randomNumbers.length) {
                for (let i = 0; i < randomNumbers.length; i++) {
                    if (randomNumbers.includes(userNumbers[i])) {
                        punteggio++;
                        container.innerHTML = `ti sei ricordato ${punteggio} numeri su ${randomNumbers.length}`
                        console.log("punteggio ", punteggio);
                    } else {
                        container.innerHTML = `ti sei ricordato ${punteggio} numeri su ${randomNumbers.length}`
                    }
                }
            }
            
            inputText.value = "";
        }
    }
);






