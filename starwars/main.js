import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'

const greetingDiv = document.querySelector(".greeting")
const maleButton = document.querySelector("maleButton")
const femaleButton = document.querySelector("femaleButton")
const otherButton = document.querySelector("otherButton")
//const castList = document.createElement ("ul")



let counter = 1

people.forEach(person => {
   //let listItem = document.createElement("li")
   //listItem.textContent = person.name
   //castList.appendChild(listItem)

   let anchorWrap = document.createElement("a")
   anchorWrap.href = "#"

   let imageItem = document.createElement("img")
   imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

   imageItem.addEventListener('error', (event) => {
      //log.textContent = log.textContent + `${event.type}: Loading image\n`;
      //console.log(event)
      imageItem.hidden = true
      //imageItem.src = ""
  });
  
   
   // add some way to handle user clicks on the image
   imageItem.addEventListener("click", (event) => {
   console.log(event)
})
anchorWrap.appendChild(imageItem)
greetingDiv.appendChild(anchorWrap)
counter++
})
