import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateNav(starships) {
   starships.forEach(starship => {

   let anchorWrap = document.createElement("a")
   anchorWrap.href = "#"
   anchorWrap.addEventListener('click', event => {
      let shipName = event.target.textContent
      const foundShip = starships.find(ship => shipName === shipName)
      populateShipView.log(foundShip)
   })

   let listItem = document.createElement('li')
   listItem.textContent = starship.name

anchorWrap.appendChild(listItem)
navList.appendChild(anchorWrap)
nav.appendChild(navList)

})
}

function getCharNumber(url) {
   let end = url.lastIndexOf('/')
   let start = end - 2
   if(url.charAt(start) === '/') {
   start++
   }
   return url.slice(start, end)
   }

function populateShipView(shipData) {
   let shipNum = getCharNumber(shipData.url)
   let shipImage = document.createElement("img")
   shipImage.src = `https://starwars-visualguide.com/assets/img/characters/${shipNum}.jpg`

}

populateNav(starships)