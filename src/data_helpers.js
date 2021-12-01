function splitTextarea(textareaId) {
    let textarea = document.getElementById(textareaId);
    let allText = textarea.value;
    let lines = allText.split(/\r?\n/);
    return lines;
}