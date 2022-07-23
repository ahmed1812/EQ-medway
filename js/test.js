
const test = document.querySelector('.test p');
test.innerHTML = test.innerText.split("").map(
  (char, i) => 
`<span style="transform:rotate(${i*13}deg)">${char}</span>`
).join("");


