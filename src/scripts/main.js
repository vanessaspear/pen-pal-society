import { penPals } from "./penPals.js";
import { fetchLetters, fetchUsers, fetchTopics } from "./dataAcess.js";

const render = () => {
    fetchLetters()
        .then( () => fetchUsers())
        .then( () => fetchTopics())
        .then(
            () => {
                document.querySelector("#container").innerHTML = penPals()
            }
        )
}

render()

document.querySelector("#container").addEventListener("stateChanged", customEvent => {
    console.log("The state has changed.  HTML is reloading...")
    render()
})