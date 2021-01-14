import { useTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'


export const TipList = () => {
    
    const contentElement = document.querySelector(".containerRight")
    const tips = useTips()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {

        locationHTMLRepresentations += Tip(tip)

    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="TipList">
            ${tipsHTMLRepresentations}
        </article>
    `
}