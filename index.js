class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    let temp = string.split(' ')
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < temp.length; i++) {
      if(!arr.includes(temp[i])){
        temp[i] = Formatter.capitalize(temp[i])
      }
    }
    temp[0] = Formatter.capitalize(temp[0])
    return temp.join(' ')
  }
}