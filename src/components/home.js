import React, {useState} from "react";
import "./home.css";

function Home(){

    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Life is what happens when you're busy making other plans.",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Life is what happens when you're busy making other plans",
        "Success is not final, failure is not fatal: It is the courage to continue that counts",
        "The only way to do great work is to love what you do",
        "In three words I can sum up everything I've learned about life: It goes on",
        "Believe you can and you're halfway there",
        "Everything you can imagine is real",
        "Do what you can, with what you have, where you are",
        "The best time to plant a tree was 20 years ago. The second best time is now",
        "The future belongs to those who believe in the beauty of their dreams",
        "It does not matter how slowly you go as long as you do not stop",
        "Strive not to be a success, but rather to be of value",
        "The only limit to our realization of tomorrow will be our doubts of today",
        "The greatest glory in living lies not in never falling, but in rising every time we fall",
        "Your time is limited, don't waste it living someone else's life",
        "The journey of a thousand miles begins with one step",
        "The only impossible journey is the one you never begin",
        "In the end, it's not the years in your life that count. It's the life in your years",
        "The only way to do great work is to love what you do",
        "Life is what happens to us while we are making other plans",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    ];

    const [quote, setQuote] = useState("The only way to do great work is to love what you do");

    const newQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };


    return(
        <>
        
            <div className="flex flex-col h-svh justify-center items-center">
                <p className="font-mono text-5xl font-semibold">Quote Generator</p>
                <div className="border-2 border-black m-8 p-4 px-20">
                    <p className="font-mono text-md">{quote}</p>
                </div>
                <button onClick={newQuote} className="text-white bg-black p-1 px-3 rounded-md">New Quote</button>
            </div>

            

            
        
        </>
    );
}

export default Home;