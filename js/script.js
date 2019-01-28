/*
  array of quotes with source, and optional year and citation
*/
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

/* array of colors  for background*/
var colors = ['slategray', 'plum', 'coral', 'powderblue', 'salmon', 'pink', 'teal', 'maroon'];

/*
  getRandomQuote function- returns a random quote from the quotes array
*/
function getRandomQuote (array){
  var randomQuote = array[ Math.floor(Math.random() * array.length)];
  return randomQuote;
};


/*changeColor function- selects random color from colors array*/
function changeColor (){
  var newColor = colors[ Math.floor(Math.random() * colors.length)];
  return newColor;
}

/*
  printQuote function- prints the random quote to the page with source
  and year/citation if available
*/
function printQuote(){
  var random = getRandomQuote(quotes);
  var color= changeColor();
  var time;
  var html= '';

  html += '<p class="quote">' + random.quote + '</p>'
  html += '<p class="source">' + random.source
  if (random.year) {
     html+= '<span class="year">' + random.year + '</span>';
  }
    if (random.citation) {
    html += '<span class="citation">' + random.citation + '</span>';
    }
    + '</p>'

    document.getElementById('quote-box').innerHTML = html;
    // from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
        document.body.style.backgroundColor = color// changes the background color with new quote
    //https://www.w3schools.com/jsref/met_win_setinterval.asp
        time= setInterval(printQuote, 8000); // automatically refreshes page after 8 seconds
};
printQuote();


/*
  When the botton is click, a new quote and background color is generated
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false)
