const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let i = 0;

const titleCased = () =>{

  while (i <= 9){
  let firstLineTwo = tutorials.splice([i],1)
  //console.log(firstLineTwo)

  let firstLine =  firstLineTwo.toString()

  
  // Split it into seperated words
  let splitToWords= firstLine.split(" ")
  let newLine = splitToWords.map(function(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  })
  let newFirstLine = newLine.join(" ")
  // console.log(newLine)
  // console.log(newFirstLine)

  
  if (i === 0){
    tutorials.unshift(newFirstLine)
  }
  else {
    tutorials.splice(i,0, newFirstLine)
  }

  i++
}
return (tutorials)
}

titleCased();