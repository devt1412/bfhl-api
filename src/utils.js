// Utility function to process input data
exports.processInputData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highestLowerCase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(Number(item));
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowerCase === '' || item > highestLowerCase)) {
                highestLowerCase = item;
            }
        }
    });

    return {
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowerCase ? highestLowerCase : null
    };
};
