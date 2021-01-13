const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        type: "clown",
        color: "blue/silver"
    },
    {
        name: "Harley",
        food: "algae",
        type: "common carp",
        color: "silver"
    },
    {
        name: "Dory",
        food: "pellets",
        type: "blue tang",
        color: "roayl blue"
    },
    {
        name: "Nemo",
        food: "krill",
        type: "clown",
        color: "orange/white"
    },
    {
        name: "Blinky",
        food: "Holacanthus ciliaris",
        type: "queen angel fish",
        color: "blue/yellow"
    },
    {
        name: "Mary",
        food: "algae",
        type: "Bluebanded Goby",
        color: "orange w/blue stripes"
    },
    {
        name: "Puff-Puff-Give",
        food: "crustaceons",
        type: "puffer fish",
        color: "gray"
    },
    {
        name: "Zebra",
        food: "crustaceons",
        type: "Chaetodon striatus",
        color: "black/white"
    },
]


export const useFish = () => {
    return fishCollection.slice()
}