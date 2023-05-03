const menuContent = () =>{
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')

    const menuHead = document.createElement('h1');
    menuHead.innerHTML = 'This is our menu'
    menuContainer.appendChild(menuHead);

    const menuText = document.createElement('p');
    menuText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    menuContainer.appendChild(menuText);
    return menuContainer;
}
export {
    menuContent
}