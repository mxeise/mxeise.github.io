window.onload = function () {
  rq();

  function rq() {
      $.getJSON("https://talaikis.com/api/quotes/random/", function(randomquote) {
        $("#quote").text(randomquote.quote);
        $("#quote_by").text(randomquote.author);
        var author = randomquote.author;
        var quote = trimQuote(randomquote.quote, randomquote.author);
        $("#twitter-btn").attr("href", "https://twitter.com/intent/tweet?text=" + author + ": " + quote);
      });
    }

  function trimQuote(quote, author) {
    if((quote.length + (author.length + 2)) >= 140) {
      return quote.slice(0, 137) + "...";
    }
    return quote;
  }
  
  $("#quote-btn").click(rq);

};
