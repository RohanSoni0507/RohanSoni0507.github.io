const newsList = document.getElementById('news-list');
const refreshInterval = 5000;

async function fetchNews() {
  try {
    const response = await fetch('/api/news');
    const newsData = await response.json();
    appendNews(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

function appendNews(newsData) {
  newsData.forEach((news) => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${news.title}</h2>
      <img src="${news.imageUrl}" alt="${news.title}" />
      <p>${news.description}</p>
    `;
    newsList.appendChild(article);
  });
}
fetchNews();

setInterval(fetchNews, refreshInterval);