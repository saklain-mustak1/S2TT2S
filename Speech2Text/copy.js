function copy(){
    let text = document.getElementById("txt-box");
    text.select();
    document.execCommand("copy");
    //window.getSelection().removeAllRanges();
}