// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <=400){
    return 'This one is on me!';
  }
  else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  let output;
  city === "NYC" ? output = "Ok, sounds good." : output =  "No go.";
  return output
}


function switchOnCharmFromTip(tip) {
  let charm;

  switch (tip) {
    case 'generous':
      charm = "Thank you so much.";
      break;
    case 'not as generous':
      charm = "Thank you.";
      break;
    default:
      charm = "Bye.";
      break;
  }
  return charm;
}
