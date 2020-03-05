import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'

const greetingDiv = document.querySelector(".greeting")
const maleButton = document.querySelector("#maleButton")
const femaleButton = document.querySelector("#femaleButton")
const otherButton = document.querySelector("#otherButton")

const maleCharacters = people.filter(person => person.gender === "male");

const femaleCharacters = people.filter(person => person.gender === "female");

const otherCharacters = people.filter(person => {
   if (person.gender === "hermaphrodite" 
   || person.gender === "n/a" 
   || person.gender === "none") {
      return person
   }
})


maleButton.addEventListener("click", (event) => {
   populateDOM(maleCharacters)
  })

//"url": "https://swapi.co/api/people.10/"

function getCharNumber(url) {
let end = url.lastIndexOf('/')
let start = end - 2
console.log(`Start is: ${url.charAt(start)} and end is: ${url.charAt(end)}`)
}

getCharNumber("https://swapi.co/api/people.10/")

function populateDOM(maleCharacters)
{maleCharacters.forEach(person => {
   // need to extract the number from the person.url property
   let charNum = 1
   let anchorWrap = document.createElement("a")
   anchorWrap.href = "#"

   let imageItem = document.createElement("img")
   imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

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

})
}
