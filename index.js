

  class Formatter {
  
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  
    static sanitize(string) {
      return string.replace(/[^a-zA-Z0-9 '-]+/g, "")
    }
  
    static titleize(string) {
      let array = string.split(" ")
      let title = []

      for(let word of array){
        
        if(word === array[0]){
          title.push((word.charAt(0).toUpperCase() + word.slice(1)))
        }else if(word === "from" || word === "a" || word === "the" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "by" || word === "at"){
          title.push(word)
        }else {
          title.push((word.charAt(0).toUpperCase() + word.slice(1)))
        }
      }
      return title.join(' ')
    }

    
      
      // for(word of array){
      //   if(word === "a"){
      //     title += word
      //   }if(word === "an"){
      //     title += word
      //   }if(word === "but"){
      //     title += word
      //   }if(word === "of"){
      //     title += word
      //   }if(word === "and"){
      //     title += word
      //   }if(word === "for"){
      //     title += word
      //   }if(word === "at"){
      //     title += word
      //   }if(word === "by"){
      //     title += word
      //   }if(word === "from"){
      //     title += word
      //   }else {
      //     title += (word.charAt(0).toUpperCase() + string.slice(1))
      //   }      
      //}
  //   }
  // }

  }




  