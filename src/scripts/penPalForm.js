//Module will output the pen pal form HTML content and have an event listener for when a user clicks the submit button in the browser
import { getUsers, getTopics, sendLetter, fetchUsers } from "./dataAcess.js"

document.addEventListener("click", e => {
    if (e.target.id === "sendButton") {
        const userAuthor = document.querySelector(`select[id="author"]`).value
        const userText = document.querySelector(`input[name="letterBody"]`).value
        const userTopic = document.querySelector(`input[name="topic"]`).value
        const userRecipient = document.querySelector(`select[id="recipient"]`).value

        const userLetter = {
            author: userAuthor,
            letterText: userText,
            topic: userTopic,
            recipient: userRecipient
        }

        sendLetter(userLetter)
    }
})

export const penPalForm = () => {
    return `
        <div class="field">
            <label for="author">Author</label>
            <select id="author">
                <option value="0">Select an author...</option>
                ${displayUsers()}
            </select>
        </div>
        <div class="field">
            <label for="letterBody">Letter</label>
            <input type="text" name="letterBody">
        </div>
        <div class="field">
            <label for="topic">Topics</label>
                ${displayTopics()}
        </div>
        <div class="field">
            <label for="recipient">Recipient</label>
            <select id="recipient">
            <option value="0">Select a recipient...</option>
                ${displayUsers()}
            </select>
        </div>

        <button id="sendButton">Send Letter</button>

    `
}

const displayUsers = () => {
    let users = getUsers()
    const options = users.map(user => {
        return `<option value="${user.name}">${user.name}</option>`
    })

    const html = options.join("")

    return html
}

const displayTopics = () => {
    let topics = getTopics()
    const options = topics.map(topic => {
        return `<label>
                    <input type="radio" name="topic" value="${topic.type}">${topic.type}</label>`
    })

    const html = options.join("")

    return html
}