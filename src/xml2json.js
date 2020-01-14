const Feed = require('rss-to-json');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

Feed.load('https://metodista.br/rss.xml', (err, rss) => {
  console.log(rss);
});
