// business logic
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

// ui logic
function textChange(toChange,changedText) {
  var quote = $(toChange);
  var numWords = changedText.length;
  if ((numWords >= 1) && (numWords < 30)) {
      quote.css("font-size", "40px");
  }
  else if ((numWords >= 30) && (numWords < 50)) {
      quote.css("font-size", "25px");
  }
  else if ((numWords >= 50) && (numWords < 100)) {
      quote.css("font-size", "20px");
  }
  else if ((numWords >= 100) && (numWords < 300)) {
      quote.css("font-size", "15px");
  }
  else {
      quote.css("font-size", "10px");
  }    
}

$(document).ready(function() {
  $("input").on('change keyup paste',function(event) {
    changedText = robert(increment(($(this).val())))
    $("#output p").text(changedText);
    textChange("#output",changedText);
  });
  $();

});