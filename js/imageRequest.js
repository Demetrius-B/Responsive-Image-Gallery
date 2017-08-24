// Add querySelector for imageContainer
const body = document.querySelector('body')
const gallery = document.querySelector('.imageGallery')

// Add api link
const apiBase = `https://api.unsplash.com/search/photos?page=1&query=shark&client_id=`
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
  data = responseAsJson.results

  for (var i = 0; i < data.length; i++) {
    gallery.insertAdjacentHTML('afterbegin', '<figure class=imageDetails><img src="' + data[i].urls.small +  '"srcset=" '+ data[i].urls.thumb + ' 200w,' +  data[i].urls.small + ' 400w, ' +  data[i].urls.regular + '  1080w" sizes="(min-width:426px) 49%, (min-width:769px) 33%, 100%""/> <figcaption> <div><img src="img/user-icon.svg" alt=user icon/> <p>' + data[i].user.name + '</p></div> <div> <img src=img/heart.svg alt=heart icon/> <p>' + data[i].user.total_likes + '</p></div></figcaption></article>'
    )
  }
})
