let log = console.log;
let upper_case_button = document.querySelector("#upper-case");
let lower_case_button = document.querySelector("#lower-case");
let proper_case_button = document.querySelector("#proper-case");
let sentence_case_button = document.querySelector("#sentence-case");
let textarea_node = document.querySelector('#textarea');

upper_case_button.addEventListener("click", () => {
    textarea_node.value = textarea_node.value.toUpperCase()
});
lower_case_button.addEventListener("click", () => {
    textarea_node.value = textarea_node.value.toLowerCase()
});
proper_case_button.addEventListener("click", () => {
    textarea_node.value = to_proper_string(textarea_node.value)
});
sentence_case_button.addEventListener("click", () => {
    textarea_node.value = textarea_node.value.toLowerCase().match(/[^.!?]+[\s.!?]*/g).map(sentence =>
        sentence[0].toUpperCase() + sentence.slice(1)
    ).join("");
});

function to_proper_string(text) {
    let array_of_words = text.toLowerCase().match(/[^\s.!?]+[\s.!?]*/g);
    return array_of_words.map(word =>
        word[0].toUpperCase() + word.slice(1)
    ).join("");
}