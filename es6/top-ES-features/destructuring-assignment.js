var movieStar = {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  };
  
  console.log(movieStar.name);
  // James Bond

  var movieStar1 = {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  };
  
  let { name, profession } = movieStar1;
  
  console.log(name, profession);
  
  // James Bond
  // Federal Agent

 //WITH ARRAY
 
 var mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

console.log(mortalKombat[0]);
// Scorpion

let mortalKombat1 = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [user1, user2] = mortalKombat1;

console.log(user1, user2);
// Scorpion
// Liu Kang

let mortalKombat2 = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [userA, , userB] = mortalKombat2;
let [user, ...users] = mortalKombat2;

console.log(userA, userB);
// Scorpion
// Sub Zero

console.log(user, users);
// Scorpion
// ['Liu Kang', 'Sub Zero', 'Johnny Cage']