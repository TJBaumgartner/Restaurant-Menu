import './style.css';
import loadPage from './loadContent';
import clearContent from './clearContent';
import {menuContent} from './menuPage'
import {homeContent} from './homePage';
import {contactContent} from './contactPage';
loadPage();
const contentContainer = document.getElementById('content');

const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
homeButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(homeContent());
});
menuButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(menuContent());
});
contactButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(contactContent());
});
//COOOKIE PIZZA FOR BRE
//ANCHOVIE PIZZA FOR BRE