function showName(firstName, lastName, ...rest){
    console.log(`First Name = ${firstName}; Last Name = ${lastName}; Rest = ${rest}`)
};

showName('Yaroslav', 'Kolesnikov','studying', 'java', 'script');
// First Name = Yaroslav; Last Name = Kolesnikov; Rest = studying,java,script