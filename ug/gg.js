//ex1
const text = document.querySelector("p");
text.innerHTML = text.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style = "background-color: yellow">${word}</span>` : word ) 
.join(' ');

//ex2
const link = document.createElement('a');  
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Link';
document.body.appendChild(link);
//ex3
text.innerHTML = text.innerHTML
.split('.')
.join('</p><p>')+'</p>';
//ex4
const count = text.innerText.split(' ').length;
const countElem = document.createElement('div');
countElem.innerText = ` ${count} words  `;
document.body.insertBefore(countElem, text);
//ex5
Array.from(document.querySelectorAll('p'))
.forEach(p =>{
  p.innerHTML = p.innerHTML
  .replace(/\?/g,'🤔')
  .replace(/\!/g,'😲')
})
