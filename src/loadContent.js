
    const header = () => {
        const headContainer = document.createElement('div')
        headContainer.classList.add('headContainer')

        const head = document.createElement('h1');
        head.innerHTML = 'Pizza Place'
        headContainer.appendChild(head);
        
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
            listElement.appendChild(listItem);
            listItem = document.createElement('button');
        }
        
        return headContainer;
    }

    /**const image = document.createElement('img');
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg";
    const bodyContent = document.createElement('p');
    bodyContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const contentContainer = document.createElement('div');
    contentContainer.appendChild(header);
    contentContainer.appendChild(image);
    contentContainer.appendChild(bodyContent);
    return contentContainer*/

export{
    header,
}
