import { useLocation } from './LocationsDataProvider.js'
import { Location } from './Location.js'


export const LocationList = () => {
    
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {

        locationHTMLRepresentations += Location(location)

    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="LocationList">
            ${locationHTMLRepresentations}
        </article>
    `
}