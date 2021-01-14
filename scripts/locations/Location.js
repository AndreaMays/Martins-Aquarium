export const Location = (location) => {
    return `
        <section class="containerLeft__travelLocations">
            <div><img  class="fish__image image--card" src="${travel.image}" /></div>
            <div class="travel">${travel.name}</div>
            <div class="travel">${travel.species}</div>
            <div class="travel">${travel.length}</div>
            <div class="travel">${travel.location}</div>
            <div class="travel">${travel.food}</div>
        </section>
    `
}