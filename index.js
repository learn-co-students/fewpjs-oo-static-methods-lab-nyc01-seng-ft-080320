class Formatter {
  
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '');
  }
  
  
  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = [];
    let splitString = string.toLowerCase().split(' ')
    for ( let i = 0; i < splitString.length; i++) {
      if ( i === 0) {
        newString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
      } else {
        if (except.includes(splitString[i])){
          newString.push(splitString[i])
        } else {
          newString.push( splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
        }
      }
    }
    return newString.join(' ');
  }
}