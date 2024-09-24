/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((num: string): number =>
        Number.isNaN(+num) ? 0 : +num,
    );
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const rmD = amounts.map((amount: string): string =>
        amount.replace("$", ""),
    );
    //const rmD2 = rmD.map((rmD: string): number => +rmD);
    //(rmD2: number): number => (Number.isNaN(rmD2) ? 0 : rmD2);
    const rmD2 = rmD.map((num: string): number =>
        Number.isNaN(+num) ? 0 : +num,
    );
    return rmD2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    const capEx = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    return capEx;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const wrongColors = colors.filter(
        (color: string): boolean => color !== "red",
    );
    const wrong2 = wrongColors.filter(
        (color: string): boolean => color !== "blue",
    );
    const wrong3 = wrong2.filter((color: string): boolean => color !== "green");
    return wrong3.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    if (addends.length === 0) {
        const equ = 0;
        return sum + "=" + equ;
    }
    const equ = addends.reduce(
        (currentString: string, num: number): string =>
            currentString.length === 0 ?
                currentString + num
            :   currentString + "+" + num,
        "",
    );
    return sum + "=" + equ;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const injected = [...values];
    if (values.length === 0) {
        return [0];
    }
    var index = values.findIndex((value: number): boolean => value < 0);
    var toSum = [];
    if (index < 0) {
        index = values.length;
        toSum = injected;
    } else {
        toSum = values.slice(0, index);
    }
    const positive = toSum.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    injected.splice(index + 1, 0, positive);
    return injected;
}
