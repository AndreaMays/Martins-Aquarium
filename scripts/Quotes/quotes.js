export const Quotes = (quote) => {
    return `
        <section class="containerLeft__travelquotes quotes ">
            <div class="travel">${quote.Phrase}</div>
            <div class="travel">${quote.author}</div>
        </section>
     `
}