const sample1 =
  "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";

const sample2 =
  "To live is to suffer, to survive is to find some meaning in the suffering. (Friedrich Nietzsche)";

const sample3 =
  "All mankind... being all equal and independent, no one ought to harm another in his life, health, liberty or possessions. (John Locke)";

function wordSearch(sample) {
  const words = sample.split(" ");
  let longestWord = "";
  let maxVowelCount = 0;

  // Regular expression to match English letters
  const englishLettersRegex = /^[a-zA-Z]+$/;

  for (const word of words) {
    // Filter out non-English letters and convert the word to lowercase
    const cleanWord = word
      .toLowerCase()
      .split("")
      .filter((char) => englishLettersRegex.test(char))
      .join("");

    // Calculate the vowel count in the cleaned word
    const vowelCount = cleanWord
      .split("")
      .filter((char) => "aeiouAEIOU".includes(char)).length;

    // Compare with the current longest word
    if (
      cleanWord.length > longestWord.length ||
      (cleanWord.length === longestWord.length && vowelCount > maxVowelCount)
    ) {
      longestWord = cleanWord;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

console.log(wordSearch(sample1));

console.log(wordSearch(sample2));

console.log(wordSearch(sample3));

