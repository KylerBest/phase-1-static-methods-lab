class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let result = []
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words = string.split(' ')
    result.push(this.capitalize(words[0]))
    for(let i = 1; i < words.length; i++){
      if(exceptions.includes(words[i])) result.push(words[i])
      else result.push(this.capitalize(words[i]))
    }
    return result.join(' ')
  }
}