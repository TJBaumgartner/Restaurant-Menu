export default function createContent() {   

    const header = document.createElement('h1');
    header.textContent = "This is my Restaurant";  
    const image = document.createElement('img');
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg";
    const bodyContent = document.createElement('p');
    bodyContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const contentContainer = document.createElement('div');
    contentContainer.appendChild(header);
    contentContainer.appendChild(image);
    contentContainer.appendChild(bodyContent);
    return contentContainer
};
