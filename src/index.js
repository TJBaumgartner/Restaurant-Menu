import './style.css';
import {header} from './loadContent';
const displayHeader = header();
const contentContainer = document.getElementById('content');
contentContainer.appendChild(displayHeader)
