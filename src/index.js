//import './style.css';
//import  createContent from './loadContent';

//const divContent = createContent();
//document.body.appendChild(divContent)
import createContent from './loadContent';
const content = createContent();
const btn = document.createElement('button');
btn.addEventListener('click', buttonCheck);
function buttonCheck(){
    console.log('button works');
}
const contentContainer = document.getElementById('content');
contentContainer.appendChild(content)
contentContainer.appendChild(btn);