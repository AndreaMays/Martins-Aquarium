const locationCollection = [
    {
        cityName: "Vava'u",
        countryName: " Tonga",
        image: "https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/VAV/vav-vavau-tonga.jpg.image.750.563.low.jpg"
    },     
    {
        cityName: "Watamu",
        countryName: "Kenya",
        image:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160112152645-kenya-live-8.jpg"
    },
    {
        cityName: "Niue",
        countryName: "Island",
        image: "https://images.squarespace-cdn.com/content/v1/53b6ec86e4b09a1fb529c6b8/1444113810756-AGCDH4X772M8DSZPBTQF/ke17ZwdGBToddI8pDm48kG3zKbvSeiyK83VonJw1vY4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcF2EyE_KmpxcZq4Kygad-sBpPsQDaTQWmRT6lsDAeVEGATlP9ZORxAehQBatWHMoU/P8304949.jpg"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}