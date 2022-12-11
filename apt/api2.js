document.addEventListener('DOMContentLoaded', function() {
    getNews();
})
function getNews(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb02e7b20bd847c5aa804ae96453e40b')
.then(response => response.json())

.then(news => {
    console.log(news);
    let articles = [i];
    articles.forEach(article => {
    console.log(article);
  document.getElementById('main-article1').innerHTML+= `
  <img src="${news.articles[0].url}" alt="${news.articles[0]}" id="urlToImage"/>
  <h3 class="main-title" id="title">${news.articles[0].title}</h3>
          <div class="main-sourse" id="sourse">${news.articles[0]['source']['name']}</div>
          <div id="author">${news.articles[0].author}</div>
          <div class="main-content" id="content">${news.articles[0].content}</div>
          <div class="publishedAt" id="publishedAt">${news.articles[0].publishedAt}</div>
  `
  document.getElementById('main-article2').innerHTML+= `
  <img src="${news.articles[2].url}" alt="${news.articles[2]}" id="urlToImage"/>
  <h3 class="main-title" id="title">${news.articles[2].title}</h3>
          <div class="main-sourse" id="sourse">${news.articles[2]['source']['name']}</div>
          <div id="author">${news.articles[2].author}</div>
          <div class="main-content" id="content">${news.articles[2].content}</div>
          <div class="publishedAt" id="publishedAt">${news.articles[2].publishedAt}</div>
  `
  document.getElementById('article11').innerHTML+= `
  <h3 class="main-title">${news.articles[11].title}</h3>
          <img src="${news.articles[11].url}" alt="${news.articles[11]}" />
          `
          document.getElementById('article12').innerHTML+= `
          <h3 class="main-title">${news.articles[12].title}</h3>
                  <img src="${news.articles[12].url}" alt="${news.articles[12]}" />
                  `
                  document.getElementById('article13').innerHTML+= `
                  <h3 class="main-title">${news.articles[13].title}</h3>
                          <img src="${news.articles[13].url}" alt="${news.articles[13]}" />
                          `                           
})
.catch(error => (console.log(error)));
}
)}
