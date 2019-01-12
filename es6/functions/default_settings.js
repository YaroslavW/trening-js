function showMenu(title='Menu', width=300, height=200){
    console.log(`Title = ${title}; Width = ${width}; Height = ${height}`);
}
showMenu();
// Title = Menu; Width = 300; Height = 200

showMenu(undefined, null);
// Title = Menu; Width = null; Height = 200