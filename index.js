
//The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line.//
var number=1
function takeANumber(katzDeliLine) {
  katzDeliLine.push(number)
  return `Welcome, guest. You are number ${number}`
  number++
}
  

//This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

  function nowServing(deliLine){
    if (deliLine.length>0){
      var line=deliLine.shift()
      return (`Currently serving ${line}.`)
    }
    if(deliLine.length===0){
      return("There is nobody waiting to be served!")}
  }
  
  
  //Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."
  function currentLine(line){
    if (line.length>0){
      var linePeeps=[]
      for (let i=0; i<line.length; i++)      
       linePeeps.push(` ${i+1}. ${line[i]}`)
       //i+1 - customer position, line - name
        return (`The line is currently:` + linePeeps.join(','))}
        
    if (line.length===0){
       return('The line is currently empty.')
    }
}
  
  
  
  