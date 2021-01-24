//This module puts fish objects in HTML
import { useFish } from './FishDataProvider.js'
// (ENTERED NEW CODE FROM CH13 ON 1/15/2021 WHERE "usefish" IMPORT IS NOT NEEDED)
import { Fish } from './fish.js'
import { mostHolyFish, nonHolyFish, soldierFish } from './FishDataProvider.js'
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList")
    // const fishes = useFish() **maybe delete this after functions from Chapter 13**
    const arrayofHolyFish = mostHolyFish()  
    // console.log("holyFish", holyFishArray) 
    const arrayofSoldierFish = soldierFish()
    const arrayofRegularFish = nonHolyFish()
    


    // Generate all of the HTML for all of the fish
    let holyFishHTMLRepresentations = "<h3>Holy Fish</h3>"
    //  for (const fish of fishes)  OLD CODE from Martins Aquarium
    for (const fishObj of arrayofHolyFish) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
    //    fishHTMLRepresentations += Fish(fish)
    holyFishHTMLRepresentations += Fish(fishObj)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section class=".containerLeft__fishList">
            ${holyFishHTMLRepresentations}
        </section>
    `

////////////////////////////SOLDIER FISH FUNCTION//////////////////////////////
let soldierFishHTMLRepresentations = "<h3>Soldier Fish</h3>"
for (const fishObj of arrayofSoldierFish) {

    soldierFishHTMLRepresentations += Fish(fishObj)
    console.log (soldierFishHTMLRepresentations)
    
    contentElement.innerHTML += `
    <article class=".containerLeft__fishList">
        ${soldierFishHTMLRepresentations}
    </article>
    `
}

let regularFishHTMLRepresentations = "<h3>Reg Fish</h3>"
for (const fishObj of arrayofRegularFish) {

    regularFishHTMLRepresentations += Fish(fishObj)
    console.log(regularFishHTMLRepresentations)

    contentElement.innerHTML += `
    <article class=".containerLeft__fishList">
        ${regularFishHTMLRepresentations}
    </article>
    `
    
    }
}