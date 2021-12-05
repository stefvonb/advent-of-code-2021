function splitTextarea(textareaId) {
    let textarea = document.getElementById(textareaId);
    let allText = textarea.value;
    let lines = allText.split(/\r?\n/);
    return lines;
}

function persistTextarea() {
    let textarea = document.getElementById('input-text');
    let allText = textarea.value;
    sessionStorage.removeItem('puzzle-input');
    sessionStorage.setItem('puzzle-input', allText);
}
