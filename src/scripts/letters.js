import { getLetters } from "./dataAcess.js";

export const lettersList = () => {
    const letters = getLetters()
    let html = "<ul>"
    let list = letters.map(letter => {
        return `<li>Dear ${letter.recipient}, ${letter.letterText} Sincerely, ${letter.author}</li>`
    })

    html += list.join("")

    html += `</ul>`

    return html

}

/*

   {
      "author": "Dolly Parton",
      "letterText": "I will always love you",
      "topic": "Business",
      "recipient": "Kacey Musgraves",
      "id": 9
    }

*/