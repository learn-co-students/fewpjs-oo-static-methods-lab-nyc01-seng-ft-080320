class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    let keep_items = ["-","'"," "]
    let regEx = /[^a-z\d]/i
    let result = ""

    for (let i=0; i< string.length; i++){
        if(keep_items.includes(string[i]) ==  true || !regEx.test(string[i])){
            result = result + string[i]
        }
    }
    return result
  }
  
  static titleize(string){
      let result = []
      let badWords = ["the","a","an","but","of","and","for","at","by","from"]
      string =  string.split(" ")
      
      for(let i=0; i < string.length; i++){
          let word = string[i]
          if(badWords.includes(word)){
              result.push(word)
          }else{
              result.push(word[0].toUpperCase() + word.slice(1))
          }
        }
      return result.join(" ")
  }
}