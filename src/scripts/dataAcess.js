const applicationState = {
    letters: [],
    users: [],
    topics: []
}

const API = "http://localhost:8088"

//GET letters from JSON server
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(res => res.json())
        .then( (data) => {
            applicationState.letters = data
        })
}

//COPY letters from appState (transient state) database
export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

//POST a letter to the JSON server
export const sendLetter = (letter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letter)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(res => res.json())
        .then(
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        )
}



//GET users from JSON server
export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(res => res.json())
        .then( (data) => {
            applicationState.users = data
        })
}

//COPY users from appState (transient state) database
export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

//GET topics from JSON server
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(res => res.json())
        .then( (data) => {
            applicationState.topics = data
        })
}

//COPY topics from appState (transient state) database
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}