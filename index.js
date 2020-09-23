class Formatter {

  static capitalize(string){
    let first = string.charAt(0).toUpperCase();
    let rest = string.slice(1);
    return first + rest
  }

  static sanitize(string) {
    //Regex seems evil
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let words = string.split(" ")
    words[0] = this.capitalize(words[0])

    let titleized = []

    for(let word of words) {
      titleized.push(this.updateWord(word, badWords));
    }

    return titleized.join(" ")
  }

  static updateWord(word, badWords) {
    if(badWords.includes(word)) {
      return word;
    } else {
      return this.capitalize(word)
    }
  }

}
