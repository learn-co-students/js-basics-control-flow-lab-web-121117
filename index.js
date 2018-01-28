// Write your code in this file!


function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return "This one is on me!"
  } else if (num > 2500) {
    return "No can do."
  }else {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(x) {
  if (x === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(x) {
  switch (x) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
    return "Bye."
  }
}
