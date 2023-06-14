const quotes = [
    {
      quote: "You have to dream before your dreams can come true.",
      author: "APJ Abdul Kalam"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
      author: "Mary Kom"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts",
      author: "Ratan Tata"
    }
  ];
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('author').textContent = randomQuote.author;
  }
  
  document.getElementById('generateBtn').addEventListener('click', generateRandomQuote);
  