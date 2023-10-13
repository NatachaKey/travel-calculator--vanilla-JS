// Language Translation code
let spanishToEnglish = {
    "Viaje:": "Journey:",
    "Cuántas personas": "How Many People",
    "Avión": "Plane",
    "Tren": "Train",
    "Autobus": "Bus",
    "Coche": "Car",
    "Taxi": "Taxi",
    "Hotel": "Hotel",
    "Comida": "Meal",
    "Diversión": "Fun",
    "Calcular": "Calculate",
    "Total:": "Total:",
    "Total por persona:": "Total per person:",
    "€ por persona": "€ per person"
}


let englishToSpanish = {
    "Journey:": "Viaje:",
    "How Many People": "Cuántas personas",
    "Plane": "Avión",
    "Train": "Tren",
    "Bus": "Autobus",
    "Car": "Coche",
    "Taxi": "Taxi",
    "Hotel": "Hotel",
    "Meal": "Comida",
    "Fun": "Diversión",
    "Calculate": "Calcular",
    "Total:": "Total:",
    "Total per person:": "Total por persona:",
    "€ per person": "€ por persona"
}


function translation(isSpanish)
{    
    let wordsToBeTranslated = document.querySelectorAll(".language-toggle");
    let inputPlaceholder = document.querySelectorAll(".input-language-toggle");
    
    wordsToBeTranslated.forEach(element => {
        let textToBeUpdated = element.innerHTML;
        element.innerHTML = isSpanish ? englishToSpanish[textToBeUpdated] : spanishToEnglish[textToBeUpdated];
    })

    inputPlaceholder.forEach(element => {
        let inputToBeUpdated = element.placeholder;
        element.placeholder = isSpanish ? englishToSpanish[inputToBeUpdated] : spanishToEnglish[inputToBeUpdated];
    });

}

function onClickToggle()
{
    let spanish = document.querySelector(".spanish"),
        english = document.querySelector(".english");

    // Add default selection
    spanish.classList.add("selected");

    // Change the language to spanish
    spanish.addEventListener("click", () => {
        if(!spanish.classList.contains('selected'))
        {
            spanish.classList.add('selected');
            english.classList.remove('selected');
            translation(true);
        }
    });

    // Change the language to english
    english.addEventListener("click", (e) => {

        if(!english.classList.contains('selected'))
        {
            english.classList.add('selected');
            spanish.classList.remove('selected');
            translation(false);
        }
        
    });
}

onClickToggle();