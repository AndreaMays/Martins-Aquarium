export const Tip = (tips) => {
    return `
        <section class="containerRight ">
            <div><img  class="imgLocations" src="${tips.image}" /></div>
            <div class="travel">${tips.cityName}</div>
            <div class="travel">${tips.countryName}</div>
        </section>
    `
}