document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const translationTextArea = document.getElementById('englishText');
    const translationOutput = document.getElementById('translation');
    const translateToMorseButton = document.getElementById('translateToMorse');
    const translateToEnglishButton = document.getElementById('translateToEnglish');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    translateToMorseButton.addEventListener('click', function () {
        const englishText = translationTextArea.value;
        const morseTranslation = translateToMorse(englishText);
        translationOutput.textContent = morseTranslation;
    });

    translateToEnglishButton.addEventListener('click', function () {
        const morseText = translationTextArea.value;
        const englishTranslation = translateToEnglish(morseText);
        translationOutput.textContent = englishTranslation;
    });

    function translateToMorse(text) {
        const englishToMorseMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
            'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
            'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
            '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
            '!': '-.-.--', '\'': '.----.', '\"': '.-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.',
            '/': '-..-.', '_': '..--.-', '=': '-...-', '+': '.-.-.', '-': '-....-', '$': '...-..-', '@': '.--.-.', ' ': '/'
        };
    
        text = text.toUpperCase();
        const words = text.split(' ');
    
        const morseWords = words.map(word => {
            const chars = word.split('');
            const morseChars = chars.map(char => {
                return englishToMorseMap[char] || char;
            });
            return morseChars.join(' ');
        });
    
        return morseWords.join(' / ');
    }
    
    function translateToEnglish(text) {
        const morseToEnglishMap = {
            '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
            '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
            '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
            '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.',
            '--..--': ',', '..--..': '?', '-.-.--': '!', '.----.': '\'', '.-..-.': '\"', '-.--.': '(', '-.--.-': ')', '.-...': '&',
            '---...': ':', '-.-.-.': ';', '-..-.': '/', '..--.-': '_', '-...-': '=', '.-.-.': '+', '-....-': '-', '...-..-': '$',
            '.--.-.': '@', '/': ' '
        };
    
        const morseWords = text.split(' / ');
    
        const words = morseWords.map(morseWord => {
            const morseChars = morseWord.split(' ');
            const englishChars = morseChars.map(morseChar => {
                return morseToEnglishMap[morseChar] || morseChar;
            });
            return englishChars.join('');
        });
    
        return words.join(' ');
    }    
});