var movieStar = {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  };
  
  console.log(movieStar.name);
  // James Bond


  var movieStar = {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  };
  
  let { name, profession } = movieStar;
  
  console.log(name, profession);
  
  // James Bond
  // Federal Agent

  //==>With arrays
  var mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

console.log(mortalKombat[0]);
// Scorpion



let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [user1, user2] = mortalKombat;

console.log(user1, user2);
// Scorpion
// Liu Kang


let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [userA, , userB] = mortalKombat;
let [user, ...users] = mortalKombat;

console.log(userA, userB);
// Scorpion
// Sub Zero

console.log(user, users);
// Scorpion
// ['Liu Kang', 'Sub Zero', 'Johnny Cage']