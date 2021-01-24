import { useQuotes } from './QuoteDataProvider.js'
import { Quotes } from './quotes.js'


export const QuoteList = () => {
    
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuotes()

    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {

        quoteHTMLRepresentations += Quotes(quote)

    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="LocationList">
            ${quoteHTMLRepresentations}
        </article>
    `
}