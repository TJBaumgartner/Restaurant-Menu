const clearContent = function() {
    const content = document.getElementById('content');
    while(content.children.length > 2){
        content.children[1].remove();
    }
}
export default clearContent;