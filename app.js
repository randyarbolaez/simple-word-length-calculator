function submitWord(e) {
  e.preventDefault();
  let input = document.getElementById('input').value;
  console.log(input.length);
  let wordLength = document.getElementById('word-length');
  if (input.length === 0) {
    wordLength.innerHTML = 'Please enter a word';
  } else {
    wordLength.innerHTML = `Word Length: ${input.length}`;
  }
}
