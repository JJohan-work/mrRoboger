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
    if (/3/g.test(value)) {return "<span class='wont'>Won't you be my neighbor?</span>"}
    else if (/2/g.test(value)) {return "<span class='boop'>Boop!</span>"}
    else if (/1/g.test(value)) {return "<span class='beep'>Beep!</span>"}
    else {return `<span class="numRed">${value}</span>`}
  });
  return output
}


// ui logic
function textChange(toChange,changedText) {
  var quote = $(toChange);
  var numWords = changedText.length;
  if ((numWords >= 1) && (numWords < 40)) {
      quote.css("font-size", "40px");
  }
  else if ((numWords >= 40) && (numWords <80)) {
      quote.css("font-size", "30px");
  }
  else if ((numWords >= 80) && (numWords < 200)) {
      quote.css("font-size", "25px");
  }
  else if ((numWords >= 200) && (numWords < 500)) {
      quote.css("font-size", "20px");
  }
  else {
      quote.css("font-size", "15px");
  }    
}

// main loop
$(document).ready(function() {
  $("input").on('change keyup paste',function(event) {
    console.log(this)
    changedText = robert(increment($(this).val()))
    
    $("#output div").html(changedText.join(", "));
    textChange("#output",changedText);
  });
});