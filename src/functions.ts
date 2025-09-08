/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let C = (temperature - 32) * (5 / 9);
    return C;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    //just first is greater than 0
    if (first > 0 && second < 0 && third < 0) {
        return first;
    }
    //just second is greater than 0
    if (first < 0 && second > 0 && third < 0) {
        return second;
    }
    //just third is greater than 0
    if (first < 0 && second < 0 && third > 0) {
        return third;
    }
    //first and second
    if (first > 0 && second > 0 && third < 0) {
        return first + second;
    }
    //first and third
    if (first > 0 && second < 0 && third > 0) {
        return first + third;
    }
    //second and third
    if (first < 0 && second > 0 && third > 0) {
        return second + third;
    }
    //all three
    if (first > 0 && second > 0 && third > 0) {
        return first + second + third;
    }
    //all less
    return 0;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    message = message.toUpperCase();
    let addmark: string = "!";
    let returnString: string = message + addmark;
    return returnString;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.charAt(message.length - 1) === "?" ? true : false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word === "Yes" || word === "YES") {
        return true;
    } else if (word === "no" || word === "No" || word == "NO") {
        return false;
    }
    return null;
}
