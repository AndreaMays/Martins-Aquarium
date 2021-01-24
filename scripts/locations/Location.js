export const Location = (location) => {
    return `
        <section class="containerLeft__travelLocations Locations ">
            <div><img  class="imgLocations" src="${location.image}" /></div>
            <div class="travel">${location.cityName}</div>
            <div class="travel">${location.countryName}</div>
        </section>
    `
}