
const header = () => {
        const headContainer = document.createElement('div')
        headContainer.classList.add('headContainer')

        const head = document.createElement('h1');
        head.innerHTML = 'Pizza Place'
        headContainer.appendChild(head);
        
        //create nav buttons
        let navElements = ['Home', 'Menu', 'Contact'];
        const listContainer = document.createElement('div');
        listContainer.classList.add('navList');
        let listElement = document.createElement('ul');
        let listItem = document.createElement('button');
        headContainer.appendChild(listContainer)
        listContainer.appendChild(listElement);
        let numberofElements = navElements.length;
        for(let i = 0; i < numberofElements; i++){
            listItem.textContent = navElements[i];
            if(i == 0) {
                listItem.setAttribute('id', 'homeButton');
                listElement.appendChild(listItem);
                listItem = document.createElement('button');
            }
            if(i == 1) {
                listItem.setAttribute('id', 'menuButton');
                listElement.appendChild(listItem);
                listItem = document.createElement('button');
            }
            if(i == 2) {
                listItem.setAttribute('id', 'contactButton');
                listElement.appendChild(listItem);
                listItem = document.createElement('button');
            }

        }  
        return headContainer;
}
const footer = () =>{
    const footerContainer = document.createElement('div')
    footerContainer.classList.add('footerContainer')

    const footer = document.createElement('p');
    footer.innerHTML = 'Copyright © 2023 Pizza Place, Inc.'
    footerContainer.appendChild(footer);
    return footerContainer;
}
export{
    header,
    footer
}
