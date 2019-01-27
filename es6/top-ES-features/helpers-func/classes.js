class Profile {   
    constructor(firstName, lastName = '') { // class constructor
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() { // class method       
      console.log(`Name: ${this.firstName} ${this.lastName}`);    
    } 
 }
 let profileObj = new Profile('Yaroslav', 'Kolesnikov');
 profileObj.getName(); // output: Name: Yaroslav Kolesnikov