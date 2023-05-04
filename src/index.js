import './style.css';
import loadPage from './loadContent';
import clearContent from './clearContent';
import {menuContent} from './menuPage'
import {homeContent} from './homePage';
import {contactContent} from './contactPage';
import {footer} from './createContent';

loadPage();
const contentContainer = document.getElementById('content');
const displayFooter = footer();

const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
homeButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(homeContent());
    contentContainer.appendChild(displayFooter);
});
menuButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(menuContent());
    contentContainer.appendChild(displayFooter);
});
contactButton.addEventListener('click', function(){
    clearContent();
    contentContainer.appendChild(contactContent());
    contentContainer.appendChild(displayFooter);
});
//COOOKIE PIZZA FOR BRE
//ANCHOVIE PIZZA FOR BRE