let availableKeywords = [
  { keyword: 'Type', url: '/search?q=Type' },
  { keyword: 'CSS', url: '/search?q=CSS' },
  { keyword: 'test', url: '/search?q=test' },
  { keyword: 'yowzers', url: '/search?q=yowzers' },
  { keyword: 'haliburton', url: '/search?q=haliburton' }
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const form = document.getElementById("search-form");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value.trim();

  if (input.length) {
    result = availableKeywords.filter((item) =>
      item.keyword.toLowerCase().includes(input.toLowerCase())
    );
  }

  display(result);

  if (!result.length) {
    resultsBox.innerHTML = '';
  }
};

function display(results) {
  const content = results.map(item => {
    return `<li onclick="selectInput('${item.keyword}', '${item.url}')">${item.keyword}</li>`;
  });
  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(keyword, url) {
  inputBox.value = keyword;
  resultsBox.innerHTML = '';
  window.location.href = url;
}