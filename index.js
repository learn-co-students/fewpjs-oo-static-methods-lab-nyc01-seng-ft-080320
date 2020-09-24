class Formatter {
   static capitalize(string){
       return string[0].toUpperCase() + string.slice(1)
   }

   static sanitize(string){
       return string.replace(/[^A-Za-z0-9-' ]/g, '')
   }

   static titleize(string){
        const exempt = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let formattedWords = []
        let arrayOfWords = string.split(' ')

        for (let i = 0; i < arrayOfWords.length; i++){
            if(i === 0){
                formattedWords.push(this.capitalize(arrayOfWords[i]))
            } else if (exempt.includes(arrayOfWords[i])){
                formattedWords.push(arrayOfWords[i])
            } else {
                formattedWords.push(this.capitalize(arrayOfWords[i]))
            }
        }
      return formattedWords.join(' ')
   }
}