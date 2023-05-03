const clearContent = function() {
    const content = document.getElementById('content');
    while(content.children.length > 2){ 
        if(content.children[1].classList.contains('footerContainer')){
            content.children[2].remove();
            return;
        }
        content.children[1].remove();
    }
}
export default clearContent;