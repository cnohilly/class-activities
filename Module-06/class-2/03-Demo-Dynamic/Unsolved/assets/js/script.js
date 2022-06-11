var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++){
        var divEl = document.createElement('div');
        var imgEl = document.createElement('img');
        imgEl.style.height = '100px';
        imgEl.style.width = '100px';
        imgEl.setAttribute('src',data[i].avatar_url);
        divEl.append(imgEl);
        var headEl = document.createElement('h2');
        headEl.textContent = data[i].login;
        divEl.append(headEl);
        var aEl = document.createElement('a');
        aEl = document.createElement('a');
        aEl.textContent = data[i].html_url;
        aEl.setAttribute('href',data[i].html_url);
        aEl.setAttribute('target','_blank');
        divEl.append(aEl);
        userContainer.append(divEl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
