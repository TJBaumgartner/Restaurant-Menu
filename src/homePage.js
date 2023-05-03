const homeContent = () =>{
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('homeContainer')

    const homeHead = document.createElement('h1');
    homeHead.innerHTML = 'Welcome to the Pizza place where we make the best pizza you will ever taste!'
    homeContainer.appendChild(homeHead);

    const homeBody = document.createElement('p');
    homeBody.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    homeContainer.appendChild(homeBody);
    return homeContainer;
}
export {
    homeContent,
}