/***
  array of quotes with source, and optional year and citation
***/
var quotes = [
  {
    quote: 'Never let the fear of striking out keep you from playing the game',
    source: 'Babe Ruth'
  },
  {
    quote: 'Today you are You, that is truer than true. There is no one alive who is Youer than You.',
    source: 'Dr. Suess',
    year: 1959,
    citation: 'Happy Birthday to You!'
  },
  {
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: 'Benjamin Franklin'
  },
  {
    quote: "Truth only means something when it's hard to admit.",
    source: 'Nicholas Sparks',
    year: 2008,
    source: 'The Last Song'
  },
  {
    quote: 'You is kind. You is smart. You is important.',
    source: 'Kathryn Stockett',
    year: 2009,
    source: 'The Help'
  }

];


/***
  getRandomQuote function- returns a random quote from the quotes array
***/

function getRandomQuote (array){
  var randomQuote = array[ Math.floor(Math.random() * array.length)];
  return randomQuote;
};

/***
  printQuote function- prints the random quote to the page with source
  and year/citation if available
***/

function printQuote(){
  var random = getRandomQuote(quotes);
  var html= '';
  html += '<p class="quote">' + random.quote + '</p>'
  html += '<p class="source">' + random.source + '</p>'
  if (random.year) {
     html+= '<span class="year">' + random.year + '</span>';
  }
  if (random.citation) {
    html += '<span class="citation">' + random.citation + '</span>';
  }
    document.getElementById('quote-box').innerHTML = html;
};
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
