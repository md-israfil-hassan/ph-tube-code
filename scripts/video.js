function getTimeString(time){
    // get Hour and rest seconds
    const hour = parseInt(time / 3600) ;
let reminigSeconds = time % 3600 ;
const minute = parseInt(reminigSeconds / 60) ;
 let seconds = reminigSeconds % 60 ;
return `${hour} hour ${minute} mitute ${seconds} seconds ago` ;

}

const removeActiveClass = () =>{
  const button = document.getElementsByClassName('category-btn') ;
  console.log(button)
  for( let btn of button ){
    btn.classList.remove('active')
  }
}

//1. Fetch, Load and show Categories on HTML

// Create loadCategories

const loadCategories = () =>{
// Fetch the data
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then( (res) => res.json())
.then( (data) => displayCategories(data.categories
))
.catch( (error) => console.log(error))
};

const loadVideos = () =>{
// Fetch the data
fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
.then( (res) => res.json())
.then( (data) => displayVideos(data.videos))
.catch( (error) => console.log(error))
};

const loadCategoriesVideos = (id) =>{
  // alert(id)
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
.then( (res) => res.json())
.then( (data) => {
  removeActiveClass() ;
  // sobike active koro class remove korao 
  const activeBtn = document.getElementById(`btn-${id}`)
  activeBtn.classList.add("active") ;
  displayVideos(data.category)
})
.catch( (error) => console.log(error))
}

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }; 

const displayVideos = (videos) =>{
const videoConteriner = document.getElementById('videos');
videoConteriner.innerHTML =''

if(videos.length == 0 ){
  videoConteriner.classList.remove('grid')
  videoConteriner.innerHTML = `
  <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center "> <img src="assets/Icon.png" /> 
  <h2 class="text-xl font-bold text-gray-500 ">
  No Content Here in this category</h2>
  </div>
  ` ;
  return ;
}
else{
  videoConteriner.classList.add('grid')
}


    videos.forEach( video =>{
console.log(video)
const card = document.createElement('div');
card.classList = "card";
card.innerHTML =`
  <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes" class=" h-full w-full object-cover" />

${
video.others.posted_date?.length == 0 ? "" :
`<span class=" absolute text-xs right-2 bottom-2 text-white bg-black rounded p-1 ">${getTimeString(video.others.posted_date)}</span>`
}


  </figure>
  <div class="px-0 py-2 flex gap-2 ">
<div>
<img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
</div>
<div>
<h2 class="font-bold">${video.title}</h2>
<div class=" flex items-center gap-2">
<p class="text-gray-400"> ${video.authors[0].profile_name}</p>
${video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>'
 : ''}

</div>

<p> </p>
    </div>
  </div>
` ;
videoConteriner.append(card)

} )
}

// Create DisplayCetagories
const displayCategories = (categories) =>{

    const categoriesContainer = document.getElementById('categories')

    // add Data in html
    categories.forEach( (item) => {
        // console.log(item)
        // creat a button

       const buttonContainer = document.createElement('div') ;
       buttonContainer.innerHTML = `
       <button id="btn-${item.category_id}" onclick="loadCategoriesVideos(${item.category_id})" class ="btn category-btn "> ${item.category} </button>
       `
    
        // add button to categories container

        categoriesContainer.append(buttonContainer)
    });
};

loadCategories() ;
loadVideos();