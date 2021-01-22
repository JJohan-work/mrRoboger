const input = 24



function increment(input) {
  output = []
  for (i = 0; i <= input; i++) {
    output.push(i)
  }
  return output
}


function robert(input) {
  output = input.map(function(value) {
    if (/3/g.test(value)) {return "Won't you be my neighbor?"}
    else if (/2/g.test(value)) {return "Boop!"}
    else if (/1/g.test(value)) {return "Beep!"}
    else {return value}
  });
  return output
}

console.log(increment(input))
console.log(robert(increment(input)))