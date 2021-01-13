const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "clown",
        location: "Brazil",
        length: 8 
    },
    {
        name: "Harley",
        food: "algae",
        species: "common carp",
        location: "Hawaii",
        length: 6 
    },
    {
        name: "Dory",
        food: "pellets",
        species: "blue tang",
        location: "Australia",
        length: 5 
    },
    {
        name: "Nemo",
        food: "krill",
        species: "clown",
        location: "Great Barrier Reef",
        length: 5 
    },
    {
        name: "Blinky",
        food: "Holacanthus ciliaris",
        species: "queen angel fish",
        location: "East Africa",
        length: 4 
    },
    {
        name: "Mary",
        food: "algae",
        species: "Bluebanded Goby",
        location: "Niue",
        length: 3 
    },
    {
        name: "Puff-Puff-Give",
        food: "crustaceons",
        location: "Panama",
        length: 10 
    },
    {
        name: "Zebra",
        food: "crustaceons",
        species: "Chaetodon striatus",
        location: "Hawaii",
        length: 5 
    }
]


export const useFish = () => {
    return fishCollection.slice()
}