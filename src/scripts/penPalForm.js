//Module will output the pen pal form HTML content and have an event listener for when a user clicks the submit button in the browser
import { getUsers, getTopics, sendLetter, fetchUsers } from "./dataAcess.js"

document.addEventListener("click", e => {
    if (e.target.id === "sendButton") {
        const userAuthor = document.querySelector(`select[id="author"]`).value
        const userText = document.querySelector(`textarea[name="letterBody"]`).value
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
    <div id="penpal">
        <div class="field">
            <label for="author">Author</label>
            <select id="author">
                <option value="0">Select an author...</option>
                ${displayUsers()}
            </select>
        </div>
        <div class="field">
            <label for="letterBody">Letter</label>
            <textarea type="text" id="letterBody" name="letterBody" placeholder="Write message here..."></textarea>
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
    </div>
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
        return `<label for="topic">
                    <input type="radio" id="topic" name="topic" value="${topic.type}">${topic.type}</label>`
    })

    const html = options.join("")

    return html
}

let userTopic = ""
document.addEventListener("click", e => {
    if (e.target.id === "topic") {
        userTopic = e.target.value;
    }
})