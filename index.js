function scuberGreetingForFeet(distance_feet) {
  if (distance_feet <=400){
      return 'This one is on me!';
   }
  else if (distance_feet > 2000 && distance_feet < 2500) {
      return 'I will gladly take your thirty bucks.';
   }
  else if (distance_feet > 2500) {
      return 'No can do.';
   }
}

function ternaryCheckCity (city) {
   return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {
  switch (tip){
     case 'generous':
       return 'Thank you so much.';
     case 'not as generous':
       return 'Thank you.';
     default:
       return 'Bye.';
   }
}
