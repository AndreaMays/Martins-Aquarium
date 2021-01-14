const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "clown",
        color: "blue/silver",
        location: "Hawaii",
        length: "5 inches",
        image: "https://oceana.org/sites/default/files/styles/lightbox/public/14_2.jpg?itok=f2JIrIAw"
    },
    {
        name: "Harley",
        food: "algae",
        type: "common carp",
        color: "silver",
        location: "East Africa",
        length: "7 inches",
        image: "https://oceana.org/sites/default/files/styles/lightbox/public/14_2.jpg?itok=f2JIrIAw"
    },
    {
        name: "Dory",
        food: "pellets",
        type: "blue tang",
        color: "roayl blue",
        location: "Australia",
        length: "4.5 inches",
        image: "https://www.hakaimagazine.com/wp-content/uploads/aquarium-reef-fish-blue-tang.jpg"
    },
    {
        name: "Nemo",
        food: "krill",
        type: "clown",
        color: "orange/white",
        location: "Bahamas",
        length: "5 inches",
        image:"https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
    },
    {
        name: "Blinky",
        food: "Holacanthus ciliaris",
        type: "queen angel fish",
        color: "blue/yellow",
        location: "Africa",
        length: "6 inches",
        image: "https://oceana.org/sites/default/files/styles/lightbox/public/14_2.jpg?itok=f2JIrIAw"
    },
    {
        name: "Mary",
        food: "algae",
        type: "Bluebanded Goby",
        color: "orange w/blue stripes",
        location: "Panama",
        length: "5 inches",
        image: "https://oceana.org/sites/default/files/styles/lightbox_full/public/shutterstock_natalie_jean_bluebanded_goby.jpg?itok=pzsCwNGB"
    },
    {
        name: "Puff-Puff-Give",
        food: "crustaceons",
        type: "puffer fish",
        color: "gray",
        location: "Brazil",
        length: "10 inches",
        image: "https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/animals/pufferfish-closeup-cut.ngsversion.1556636497139.adapt.1900.1.jpg" 
    },
    {
        name: "Zebra",
        food: "crustaceons",
        type: "Chaetodon striatus",
        color: "black/white",
        location: "Palmerston",
        length: "3 inches",
        image: "https://oceana.org/sites/default/files/styles/lightbox_full/public/shutterstock_149810930.jpg?itok=1ZAyOR_r"
    },
]


export const useFish = () => {
    return fishCollection.slice()
}