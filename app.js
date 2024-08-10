function groupAnagrams(words) {
    return Object.values(words.reduce((acc, word) => {
        const key = word.split('').sort().join('');
        (acc[key] = acc[key] || []).push(word);
        return acc;
    }, {}));
}

const input = ["bat", "tap", "cat", "tab", "pat"];
console.log(groupAnagrams(input));