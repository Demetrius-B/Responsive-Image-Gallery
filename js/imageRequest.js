// Add querySelector for imageContainer
const body = document.querySelector('body')
const gallery = document.querySelector('.imageGallery')

// Add api link
const apiBase = `https://api.unsplash.com/photos/?client_id=`
const userId = "822755c3909116c557faeed4824151410949735c068bc286d6643656361522fd"
let data = []


const options = {
  method:"GET"
}

let url = `${apiBase}${userId}`
console.log(url);

fetch(url, options)
.then(response => response.json())
.then(responseAsJson => {
  data = responseAsJson

  for (var i = 0; i < data.length; i++) {
    gallery.insertAdjacentHTML('afterbegin',
    "<article class=imageDetails><img src=" + data[i].urls.small + "/> <div class=photoDetails> <div class=nameContainer><img src=img/user-icon.svg alt=user icon/> <p>" + data[i].user.name + "</p></div> <div class=likeContainer> <img src=img/heart.svg alt=heart icon/> <p>" + data[i].user.total_likes + "</p></div></div></article>"
    )
  }
})
