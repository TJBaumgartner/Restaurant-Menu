const contactContent = () =>{
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')

    const contactHead = document.createElement('h1');
    contactHead.innerHTML = 'Contact Us here'
    contactContainer.appendChild(contactHead);

    const contactText = document.createElement('p');
    contactText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    contactContainer.appendChild(contactText);
    return contactContainer;
}
export {
    contactContent
}