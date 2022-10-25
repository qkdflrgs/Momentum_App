const quotes = [
    {
        quote: "Carry each other's burdens, and in this way you will fulfill the law of Christ.",
        author: "Galatians 6:2",
    },
    {
        quote: "Serve the LORD with fear and rejoice with trembling.",
        author: "Psalms 2:11",
    },
    {
        quote: "Set your minds on things above, not on earthly things.",
        author: "Colossians 3:2",
    },    
    {
        quote: "I can do everything through him who gives me strength.",
        author: "Philippians 4:13",
    },
    {
        quote: "And everyone who calls on the name of the LORD will be saved.",
        author: "Acts 2:21",
    },
    {
        quote: "Now you are the body of christ, and each one of you is a part of it.",
        author: "1 Corinthians 12:27",
    },
    {
        quote: "yet I will rejoice in the LORD, I will be joyful in God my Savior.",
        author: "Habakkuk 3:18",
    },
    {
        quote: "Every day they continued to meet together in the temple courts.",
        author: "Acts 2:46",
    },
    {
        quote: "By this all men will know that you are my discipes, if you love one another.",
        author: "John 13:35",
    },
    {
        quote: "I cry to you for help, O LORD; in the morning my prayer comes before you.",
        author: "Psalms 88:13",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;