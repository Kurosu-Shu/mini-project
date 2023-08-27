const randomQt = document.getElementById('randomQt');
const selectQt = document.getElementById('selectQt');

randomQt.addEventListener("click", generateQuote);

selectQt.addEventListener("change", generateQuote);

function generateQuote(e) {
    tag = e.target.value;
    fetchQuote(tag);
}

async function fetchQuote(tag) {
    try {
        const response = await fetch(`https://api.quotable.io/random?tags=${tag}`);
        const quotes = await response.json();

        let display = document.querySelector(".displayer");
        display.innerHTML = `
    <h2>${quotes?.author}</h2>
    <p class="quote">
        "${quotes?.content}"
    </p>
    <span>category: <b>${quotes?.tags[0]},${quotes.tags[1] ? quotes.tags[1] : ""}</b></span>
    `;
    } catch (err) {
        console.error(err);
    }

}