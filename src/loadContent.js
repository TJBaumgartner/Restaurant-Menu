import {header} from './createContent';
const loadPage = () => {
    const contentContainer = document.getElementById('content');
    const displayHeader = header();
    contentContainer.appendChild(displayHeader)
}
export default loadPage;