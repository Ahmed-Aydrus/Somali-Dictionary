const somaliInput = document.getElementById('somaliInput');
const translateButton = document.getElementById('translateButton');
const englishDefinition = document.getElementById('englishDefinition');

const dictionary = {
    "asc": "hello",
    "mahadsanid": "thank you",
    "sidee tahay": "how are you",
    "waan fiican ahay": "I am good",
    "maxaa wada": "what's going on",
    "nin": "man",
    "naag": "woman",
    "wiil": "boy",
    "gabar": "girl",
    "abad": "century",
    "sanad": "year",
    "bil": "month",
    "maalin": "day",
    "saacad": "hour",
    "daqiiqo": "minute",
    "ilbidhiqsi": "second",
    "wakhtiy": "time",
    "guri": "house",
    "qoyska": "family",
    "shaqo": "work",
    "jaamacad": "university",
    "dugsi": "school",

    // ...  waalagu dari karaa !

};

translateButton.addEventListener('click', () => {
    const somaliWord = somaliInput.value.trim().toLowerCase();

    if (somaliWord in dictionary) {
        englishDefinition.textContent = dictionary[somaliWord];
    } else {
        englishDefinition.textContent = "Word not found in dictionary.";
    }
});
