let upper_case_button = document.querySelector("#upper-case");
let lower_case_button = document.querySelector("#lower-case");
let proper_case_button = document.querySelector("#proper-case");
let sentence_case_button = document.querySelector("#sentence-case");
let save_text_file_button = document.querySelector("#save-text-file");
let textarea_node = document.querySelector('#textarea');

upper_case_button.addEventListener("click", () => {
    textarea_node.value = textarea_node.value.toUpperCase();
});
lower_case_button.addEventListener("click", () => {
    textarea_node.value = textarea_node.value.toLowerCase();
});
proper_case_button.addEventListener("click", () => {
    textarea_node.value = to_proper_string(textarea_node.value);
});
sentence_case_button.addEventListener("click", () => {
    textarea_node.value = to_sentence_string(textarea_node.value);
});
save_text_file_button.addEventListener("click", () => {
    download("text.txt", textarea_node.value);
})

function to_proper_string(text) {
    let array_of_words = text.toLowerCase().match(/[^\s.!?]+[\s.!?]*/g);
    if (Array.isArray(array_of_words)) return array_of_words.map(word => first_char_to_upper(word)).join("");
    return text;
}

function to_sentence_string(text) {
    let array_of_sentences = text.toLowerCase().match(/[^\n.!?]+[\s.!?]*/g);
    if (Array.isArray(array_of_sentences)) return array_of_sentences.map(sentence => first_char_to_upper(sentence)).join("");
    return text;
}

function first_char_to_upper(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}