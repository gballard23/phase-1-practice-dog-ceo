console.log('%c HI', 'color: firebrick')
const imgURl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

fetchImg()
fetchDogBreeds()


function fetchImg() {
    fetch(imgURl)
    .then(res => res.json())
    .then(data => data.message.forEach(addImg))
}

function addImg(doge) {
    const newImg = document.createElement('img')
    newImg.src = doge
    document.querySelector('#dog-image-container').appendChild(newImg)
}

function fetchDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => Object.keys(data.message).forEach((breed) => {
        allBreeds = Object.keys(data.message)
        const newLi = document.createElement('li')
        newLi.innerText = breed
        document.querySelector('#dog-breeds').appendChild(newLi)
        newLi.addEventListener('click', (event) => {
            const colors = ['orange', 'red', 'blue', 'purple', 'green']
            const randomColor = colors[Math.floor(Math.random()*colors.length)]
            event.target.style.color = randomColor
        })
    }))
}