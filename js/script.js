// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var intervalID = window.setInterval(printQuote, 30000);

var randomQuoteIndex;
var randomQuote;
var outputHTML = '';
var quotes = [
  {
    quote: "If it wasn't hard everyone would do it, it's the hard that makes it great.",
    source: "COL Publications",
    tags: "Motivation"
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",
    tags: "Business"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    source: "Henry Ford",
    tags: "Motivation"
  },
  {
    quote: "Change your thoughts and you can change your world.",
    source: "Norman Vincent Peale",
    tags: "Creative"
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up",
    source: "Vince Lombrdi",
    tags: "Motivation"
  },
  {
    quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
    source: "Helen Keller",
    tags: "Serious"
  },
  {
    quote: "There are no limits to what you can accomplish, except the limits that you place on your thinking",
    source: "Brian Tracy",
    tags: "Creative"
  }
];


function getRandomQuote() {
  randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

function printQuote() {
  setRandomColor();
  randomQuote = getRandomQuote();
  outputHTML = '<p class="quote">' + randomQuote.quote + '</p>';
  outputHTML += '<p class="source">' + randomQuote.source + '</p>';
  document.getElementById('quote-box').innerHTML = outputHTML;
}

function setRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}
