// Your code here
//code that runs when DOM content has been loaded
document.addEventListener ('DOMContentLoaded', ()=>{
fetch('http://localhost:3000/films')
.then((response) => response.json())
.then((json) =>{ 
    let filmArray = [...(json)]
    document.querySelector('.film.item').remove()

//use a for Loop to iterate over the array elements
    for (let i = 0; i<filmArray.length; i++) {
        let li = document.createElement('li')
        li.textContent= (filmArray[i].title ).toUpperCase()
        li.addEventListener('click', selectAndDisplayFilms)

//defaults shown on DOM load. Would take the first movie in the array
    document.querySelector("ul#films.ui.divided.list").appendChild(li)
    let posterImage = document.querySelector("#poster")
    posterImage.src = filmArray[0].poster
    let movieTitle = document.querySelector("#title")
    movieTitle.innerHTML = filmArray[0].title
    let runtime = document.querySelector("#runtime")
    runtime.innerHTML = `${filmArray[0].runtime} Minutes`
    let description = document.querySelector("#film-info")
    description.innerHTML = filmArray[0].description
    let showTime = document.querySelector("#showtime")
    showTime.innerHTML = filmArray[0].showtime
    let remainingTickets = document.querySelector("#ticket-num")
    remainingTickets.innerHTML = parseInt(`${filmArray[0].capacity}`) - parseInt(`${filmArray[0].tickets_sold}`)

function selectAndDisplayFilms(){

        posterImage.src=filmArray[1].poster
        movieTitle.innerHTML = filmArray[1].title
        runtime.innerHTML = `${filmArray[1].runtime} Minutes`
        description.innerHTML = filmArray[1].description
        remainingTickets.innerHTML = parseInt(`${filmArray[1].capacity}`) - parseInt(`${filmArray[1].tickets_sold}`)

    }
}
})
})

//Event Listener for a 'click' event for purchasing tickets
let button = document.querySelector("#buy-ticket")
button.addEventListener("click", ()=>{
let valueRem = document.querySelector("#ticket-num").innerHTML
    if(valueRem > 1) {
        valueRem --
        document.querySelector("#ticket-num").innerHTML = valueRem
    }
else {
    document.querySelector("#ticket-num").innerHTML = 'SOLD OUT!!!'
    //add button attribute to 'gray-out' the button when tickets have been sold out
    button.setAttribute("disabled", "disabled")
    //stop the event listener
    removeEventListener('click',addEventListener)
}  
})
// function selectAndDisplayFilms(e){
//     fetch('http://localhost:3000/films')
// .then((response) => response.json())
// .then((json) =>{ 
//    console.log ((json))
//     let films = [...(json)]
// console.log(films[e].title)
//     }
//     )
// }

