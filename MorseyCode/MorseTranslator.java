import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class MorseTranslator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            String translation = translate(line);
            System.out.println(translation);
        }
    }

    private static String translate(String input) {
        Map<Character, String> englishToMorse = createEnglishToMorseMap();
        Map<String, Character> morseToEnglish = createMorseToEnglishMap();
        StringBuilder result = new StringBuilder();
        
        if (input.startsWith(".") || input.startsWith("-")) {
            String[] morseWords = input.split(" / ");
            for (String morseWord : morseWords) {
                String[] morseChars = morseWord.split(" ");
                for (String morseChar : morseChars) {
                    if (morseToEnglish.containsKey(morseChar)) {
                        result.append(morseToEnglish.get(morseChar));
                    }
                }
                result.append(" ");
            }
        } else {
            for (char c : input.toCharArray()) {
                if (c == ' ') {
                    result.append(" / ");
                } else if (englishToMorse.containsKey(Character.toUpperCase(c))) {
                    result.append(englishToMorse.get(Character.toUpperCase(c))).append(" ");
                } else {
                    result.append(c).append(" ");
                }
            }
        }
        
        return result.toString().trim();
    }
    private static Map<Character, String> createEnglishToMorseMap() {
        Map<Character, String> englishToMorse = new HashMap<>();
        englishToMorse.put('A', ".-");
        englishToMorse.put('B', "-...");
        englishToMorse.put('C', "-.-.");
        englishToMorse.put('D', "-..");
        englishToMorse.put('E', ".");
        englishToMorse.put('F', "..-.");
        englishToMorse.put('G', "--.");
        englishToMorse.put('H', "....");
        englishToMorse.put('I', "..");
        englishToMorse.put('J', ".---");
        englishToMorse.put('K', "-.-");
        englishToMorse.put('L', ".-..");
        englishToMorse.put('M', "--");
        englishToMorse.put('N', "-.");
        englishToMorse.put('O', "---");
        englishToMorse.put('P', ".--.");
        englishToMorse.put('Q', "--.-");
        englishToMorse.put('R', ".-.");
        englishToMorse.put('S', "...");
        englishToMorse.put('T', "-");
        englishToMorse.put('U', "..-");
        englishToMorse.put('V', "...-");
        englishToMorse.put('W', ".--");
        englishToMorse.put('X', "-..-");
        englishToMorse.put('Y', "-.--");
        englishToMorse.put('Z', "--..");
        englishToMorse.put('0', "-----");
        englishToMorse.put('1', ".----");
        englishToMorse.put('2', "..---");
        englishToMorse.put('3', "...--");
        englishToMorse.put('4', "....-");
        englishToMorse.put('5', ".....");
        englishToMorse.put('6', "-....");
        englishToMorse.put('7', "--...");
        englishToMorse.put('8', "---..");
        englishToMorse.put('9', "----.");
        englishToMorse.put('.', ".-.-.-");
        englishToMorse.put(',', "--..--");
        englishToMorse.put('?', "..--..");
        englishToMorse.put('!', "-.-.--");
        englishToMorse.put('\'', ".----.");
        englishToMorse.put('\"', ".-..-.");
        englishToMorse.put('(', "-.--.");
        englishToMorse.put(')', "-.--.-");
        englishToMorse.put('&', ".-...");
        englishToMorse.put(':', "---...");
        englishToMorse.put(';', "-.-.-.");
        englishToMorse.put('/', "-..-.");
        englishToMorse.put('_', "..--.-");
        englishToMorse.put('=', "-...-");
        englishToMorse.put('+', ".-.-.");
        englishToMorse.put('-', "-....-");
        englishToMorse.put('$', "...-..-");
        englishToMorse.put('@', ".--.-.");
        englishToMorse.put(' ', " ");
        return englishToMorse;
    }
    private static Map<String, Character> createMorseToEnglishMap() {
        Map<String, Character> morseToEnglish = new HashMap<>();
        morseToEnglish.put(".-", 'A');
        morseToEnglish.put("-...", 'B');
        morseToEnglish.put("-.-.", 'C');
        morseToEnglish.put("-..", 'D');
        morseToEnglish.put(".", 'E');
        morseToEnglish.put("..-.", 'F');
        morseToEnglish.put("--.", 'G');
        morseToEnglish.put("....", 'H');
        morseToEnglish.put("..", 'I');
        morseToEnglish.put(".---", 'J');
        morseToEnglish.put("-.-", 'K');
        morseToEnglish.put(".-..", 'L');
        morseToEnglish.put("--", 'M');
        morseToEnglish.put("-.", 'N');
        morseToEnglish.put("---", 'O');
        morseToEnglish.put(".--.", 'P');
        morseToEnglish.put("--.-", 'Q');
        morseToEnglish.put(".-.", 'R');
        morseToEnglish.put("...", 'S');
        morseToEnglish.put("-", 'T');
        morseToEnglish.put("..-", 'U');
        morseToEnglish.put("...-", 'V');
        morseToEnglish.put(".--", 'W');
        morseToEnglish.put("-..-", 'X');
        morseToEnglish.put("-.--", 'Y');
        morseToEnglish.put("--..", 'Z');
        morseToEnglish.put("-----", '0');
        morseToEnglish.put(".----", '1');
        morseToEnglish.put("..---", '2');
        morseToEnglish.put("...--", '3');
        morseToEnglish.put("....-", '4');
        morseToEnglish.put(".....", '5');
        morseToEnglish.put("-....", '6');
        morseToEnglish.put("--...", '7');
        morseToEnglish.put("---..", '8');
        morseToEnglish.put("----.", '9');
        morseToEnglish.put(".-.-.-", '.');
        morseToEnglish.put("--..--", ',');
        morseToEnglish.put("..--..", '?');
        morseToEnglish.put("-.-.--", '!');
        morseToEnglish.put(".----.", '\'');
        morseToEnglish.put(".-..-.", '"');
        morseToEnglish.put("-.--.", '(');
        morseToEnglish.put("-.--.-", ')');
        morseToEnglish.put(".-...", '&');
        morseToEnglish.put("---...", ':');
        morseToEnglish.put("-.-.-.", ';');
        morseToEnglish.put("-..-.", '/');
        morseToEnglish.put("..--.-", '_');
        morseToEnglish.put("-...-", '=');
        morseToEnglish.put(".-.-.", '+');
        morseToEnglish.put("-....-", '-');
        morseToEnglish.put("...-..-", '$');
        morseToEnglish.put(".--.-.", '@');
        morseToEnglish.put(" ", ' ');
        return morseToEnglish;
    }
}