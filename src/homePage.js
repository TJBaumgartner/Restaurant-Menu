const homeContent = () =>{
    const bodyContainer = document.createElement('div')
    bodyContainer.classList.add('bodyContainer')

    const bodyHead = document.createElement('h1');
    bodyHead.innerHTML = 'Welcome to the Pizza place where we make the best pizza you will ever taste!'
    bodyContainer.appendChild(bodyHead);

    const bodyText = document.createElement('p');
    bodyText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    bodyContainer.appendChild(bodyText);
    return bodyContainer;
}
export {
    homeContent,
}