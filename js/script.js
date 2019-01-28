/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
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
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote (array){
  var randomQuote = array[ Math.floor(Math.random() * array.length)];
  return randomQuote;
};

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  var random = getRandomQuote(quotes);
  var html= '';
  html += '<p class="quote">' + random.quote + '</p>'
  html += '<p class="source">' + random.source + '</p>'
  if (random.citation) {
    html += '<span class="citation">' + random.citation + '</span>';
  }
  if (random.year) {
     html+= '<span class="year">' + random.year + '</span>';
  }
  document.getElementById('quote-box').innerHTML = html;
};
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
