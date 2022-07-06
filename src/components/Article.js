import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {
    
    
    
    const mojiMaker = minutes => {
        if(minutes <30) {
            const count = Math.round(minutes/5)
            let moji = ""
            for (let i=0; i<count; i++) {
                moji += "☕️"
            }
            return moji
        } else {
            const count = Math.round(minutes/10)
            let moji = ""
            for (let i=0; i<count; i++) {
                moji += "🍱"
            }
            return moji
        }
    }

    const readTime = `${minutes} minutes ${mojiMaker(minutes)}`
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{readTime}</p>
        </article>
    )
}

export default Article; 