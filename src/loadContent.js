import {header} from './createContent';
import {footer} from './createContent';
import {homeContent} from './homePage';
const loadPage = () => {
    const contentContainer = document.getElementById('content');
    const displayHeader = header();
    const displayBody = homeContent();
    const displayFooter = footer();
    contentContainer.appendChild(displayHeader);
    contentContainer.appendChild(displayBody);
    contentContainer.appendChild(displayFooter);
}
export default loadPage;