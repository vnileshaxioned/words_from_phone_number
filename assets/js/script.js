var userInput = document.querySelector('.input-field'),
  inputBlock = document.querySelector('.user-input'),
  submit = document.querySelector('.submit-cta'),
  output = document.querySelector('.output'),
  span = document.createElement('span'),
  outputArr = [],
  pattern = /^[2-9]+$/;
span.className = 'error';

userInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    validate();
  }
});

submit.addEventListener('click', function (e) {
  e.preventDefault();
  validate();
});

function validate() {
  if (inputBlock.childNodes[3]) {
    inputBlock.removeChild(inputBlock.childNodes[3]);
  }
  if (userInput.value) {
    output.innerHTML = "";
    getResult(0);
  } else {
    span.innerText = 'Field is required';
    inputBlock.appendChild(span);
  }
}

function getResult(count) {
  var inputArr = userInput.value.split(""),
    words = {
      2 : 'abc',
      3 : 'def',
      4 : 'ghi',
      5 : 'jkl',
      6 : 'mno',
      7 : 'pqrs',
      8 : 'tuv',
      9 : 'wxyz'
    };

  if (count === inputArr.length) {
    var li = document.createElement('li'),
      span = document.createElement('span');

    li.className = 'output-list';
    span.className = 'output-content';
    span.innerText = outputArr.join('');

    li.appendChild(span);
    output.appendChild(li);
  } else if (userInput.value.match(pattern)) {
    for(var i = 0; i < words[inputArr[count]].length; i++) {
      outputArr.push(words[inputArr[count]][i]);
      getResult(count + 1);
      outputArr.pop();
    }
  } else {
    var span = document.createElement('span');
    span.className = 'error';
    span.innerText = 'Between 2 - 9 digits are allowed';
    inputBlock.appendChild(span);
  }
}