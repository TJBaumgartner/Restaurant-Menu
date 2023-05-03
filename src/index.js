import './style.css';
import loadPage from './loadContent';
import { contactContent } from './contactPage';
import clearContent from './clearContent';

loadPage();
const contentContainer = document.getElementById('content');

const menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(contactContent());
});

//COOOKIE PIZZA FOR BRE
//ANCHOVIE PIZZA FOR BRE