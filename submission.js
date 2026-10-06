/**
 * Predicate functions in this file accept: null, undefined, any Number
 * (including NaN), or a string representing a number (e.g. "1", "1.1").
 */

// Returns true for an even integer, or a numeric string that coerces to
// one. Returns false for null, undefined, NaN, and non-integer values.
let even_predicate = function (value)
{
    if (value === null) {
        // Number(null) is 0, which would otherwise look even.
        return false;
    }
    let numericValue = Number(value);
    return Number.isInteger(numericValue) && numericValue % 2 === 0;
};

// Returns true for an odd integer, or a numeric string that coerces to
// one. Returns false for null, undefined, NaN, and non-integer values.
let odd_predicate = function (value)
{
    if (value === null) {
        // Number(null) is 0, which is even, not odd.
        return false;
    }
    let numericValue = Number(value);
    return Number.isInteger(numericValue) && numericValue % 2 !== 0;
};

let undefined_predicate = function (value)
{
    return value === undefined;
};

let null_predicate = function (value)
{
    return value === null;
};

let check = function (predicate,value)
{
    return predicate(value);
};

let getDictionary = function (lang)
{
    // Accepts 'E'/'English' or 'F'/'French' in any capitalization.
    let normalizedLang = lang.toLowerCase();

    let englishDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    }

    let frenchDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    }

    if (normalizedLang === "e" || normalizedLang === "english") {
        return englishDictionary;
    } else {
        return frenchDictionary;
    }
}

// Test calls demonstrating both dictionaries.
let english = getDictionary("English");
console.log(english(1)); // "one"
console.log(english(5)); // "not included in dictionary"

let french = getDictionary("f");
console.log(french(2)); // "deux"