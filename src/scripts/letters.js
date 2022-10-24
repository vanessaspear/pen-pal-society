import { getLetters } from "./dataAcess.js";

export const lettersList = () => {
    const letters = getLetters()
    
    let letterList = letters.map(letter => {
        return  `
        <div id="letter">
            Dear ${letter.recipient}, 
            <br>
            <br>
            ${letter.letterText} 
            <br>
            <br>
            Sincerely, 
            <div id="signature">
                ${letter.author}
            </div>
            <div id="letter-topics">
                ${letter.topic}
            </div>
        </div>`
    })

    let html = letterList.join("")
        
    return html
}