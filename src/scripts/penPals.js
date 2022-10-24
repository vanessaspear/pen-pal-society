import { penPalForm } from "./penPalForm.js"
import { lettersList } from "./letters.js"

export const penPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="penPalForm">
        ${penPalForm()}
    </section>
    <section class="lettersSent">
        <h2>Letters</h2>
        ${lettersList()}
    </section>
`
}