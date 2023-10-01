const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

const apiKey = '22782790a3864020b16621912d5ef144';
const foreignSources = 'cnn,bbc-news,al-jazeera-english,reuters,the-washington-post';
const indianSources = 'the-times-of-india,the-hindu,hindustan-times';
const newsApiUrl = `https://newsapi.org/v2/top-headlines?sources=${foreignSources},${indianSources}&apiKey=${apiKey}`;

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(newsApiUrl);
    const articles = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      imageUrl: article.urlToImage,
    }));
    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});