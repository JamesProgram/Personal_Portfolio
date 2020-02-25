import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'

const greetingDiv = document.querySelector(".greeting")

const castList = document.createElement ("ul")



let counter = 1

people.forEach(person => {
   let listItem = document.createElement("li")
   listItem.textContent = person.name

   castList.appendChild(listItem)

   let imageItem = document.createElement("img")
   imageItem.src = ""
   greetingDiv.appendChild(imageItem)
   // add some way to handle user clicks on the image
   imageItem.addEventListener("click", () => console.log("Click happend"))
   counter++
});

greetingDiv.appendChild(castList)
