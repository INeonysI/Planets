export default class format {
  static capitalize(word) {
    const firstLetterCap = word.charAt(0).toUpperCase();
    const completeWord = firstLetterCap + word.substring(1);
    return completeWord;
  }
}
