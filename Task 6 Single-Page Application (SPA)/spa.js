// Array of quotes
const quotes = [
    { quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "Always do your best. What you plant now, you will harvest later.", author: "Og Mandino" },
    { quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "I can accept failure, everyone fails at something. But I can’t accept not trying.", author: "Michael Jordan" }
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
  
    document.getElementById('quote-text').textContent = selectedQuote.quote;
    document.getElementById('quote-author').textContent = `- ${selectedQuote.author}`;
  }
  
  // Event listener for button
  document.getElementById('new-quote-btn').addEventListener('click', displayRandomQuote);
  