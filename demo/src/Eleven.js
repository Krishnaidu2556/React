import React from 'react'

function Eleven() {

    const qoutes = [
        "The way to get started is to quit talking and begin doing.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "Opportunities don't happen. You create them.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The only place where success comes before work is in the dictionary.",
        "Believe you can and you're halfway there.",
        "Start where you are. Use what you have. Do what you can.",
        "Success usually comes to those who are too busy to be looking for it.",
        "The future depends on what you do today.",
        "Do something today that your future self will thank you for.",
        "If you can dream it, you can do it.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Don’t limit your challenges. Challenge your limits.",
        "Push yourself, because no one else is going to do it for you.",
        "The secret of getting ahead is getting started.",
        "Great things never come from comfort zones.",
        "Success doesn’t just find you. You have to go out and get it.",
        "Dream it. Wish it. Do it.",
        "Little things make big days."

    ]

     const random = Math.floor(Math.random() * qoutes.length)
     const quote = qoutes[random]
    return (
        <div>
            {quote}
        </div>
    )
}

export default Eleven