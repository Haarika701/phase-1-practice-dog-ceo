console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 
const dogImageContainer = document.getElementById("dog-image-container");
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((resp) => resp.json())
  .then((dogBreeds) => {
    dogBreeds.message.forEach((element=> {
      const img = document.createElement('img');
      

      img.src = element;
      console.log(imgUrl)
      dogImageContainer.append(img);

    }));
})  
const dogBreedsContainer = document.getElementById('dog-breeds')

fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    const breeds = Object.keys(data.message)
    breeds.forEach(breed => {
      const newLi = document.createElement('li')
      newLi.textContent = breed
      dogBreedsContainer.append(newLi)

      newLi.addEventListener('click', (event)  => {
        if (newLi.style.color === 'firebrick') {
          newLi.style.color = 'black'
        } else {
          newLi.style.color = 'firebrick'
        }
      })
    })
  })