function showMenu(title='Menu', width=300, height=200 ,who = getName().toUpperCase()){
    console.log(`Title = ${title}; Width = ${width}; Height = ${height} Who = ${who}`);
}

function getName(){
    return 'yaroslav';
}
showMenu();
// Title = Menu; Width = 300; Height = 200

showMenu(undefined, null);
// Title = Menu; Width = null; Height = 200