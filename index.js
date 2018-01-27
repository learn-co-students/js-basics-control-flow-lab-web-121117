// Write your code in this file!
let greet, response;
function scuberGreetingForFeet(feet){
  if (feet < 400){
    greet = "This one is on me!";
    return greet;
  }else if(feet > 2500){
    greet = 'No can do.';
    return greet;
  }else if(feet > 2000){
    greet = 'I will gladly take your thirty bucks.';
    return greet;
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      response = 'Thank you so much.';
      return response;
    case 'not as generous':
      response = 'Thank you.';
      return response;
    default:
      return 'Bye.'
  }
}
