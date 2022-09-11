const quotes = [
  {
    quote: "Don't dream, Be it.",
    author: "Tim Curry ♥",
  },
  {
    quote: "No pain, No gain.",
    author: "Benjamin Franklin ♡",
  },
  {
    quote: "No sweat, No sweet.",
    author: "Unknown ♥",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller ♡",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt ♡",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer ♡",
  },
  {
    quote: "The course of true love never did run smooth.",
    author: "William Shakespeare ♥",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson ♡",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak ♥",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand ♡",
  },
];

const quote = document.querySelector(".main-box__lesson");
const author = document.querySelector(".main-box__author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

function handleMouseOver() {
  author.classList.remove("hidden");
}

function handleMouseMove() {
  author.classList.add("hidden");
}

quote.addEventListener("mouseover", handleMouseOver);
quote.addEventListener("mouseleave", handleMouseMove);
