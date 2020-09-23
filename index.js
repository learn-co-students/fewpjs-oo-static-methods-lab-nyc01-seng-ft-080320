class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let words = string.split(" ");
    const array = []
    const skips = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', "from"];
    words.forEach(word=>{
      if (skips.includes(word)){
        array.push(word)
      }else{
      array.push(this.capitalize(word))}
    })
    return this.capitalize(array.join(" "))
  }
}