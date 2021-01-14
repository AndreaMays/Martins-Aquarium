/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="LocationList">
            All the locations go here!
        </article>
    `
}