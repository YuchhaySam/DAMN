import { codeList } from "../data/code-list.js";

//global variables

let videoListHTML = '';


//HTML generator

codeList.forEach((item)=>{
    videoListHTML += `
    <div class="video-item">
        <div class="video-thumbnail-container">
          <img class="video-thumbnail-image" src="${item.videoThumbnail}" alt="Video Thumbnail 1">
        </div>
        <div class="video-info">
          <h3 class="video-title">${item.videoTitle}</h3>
          <p class="video-description">${item.videoDescription}</p>
        </div>
      </div>
    `;
});


//display generated HTML

document.querySelector('.video-container-js').innerHTML = videoListHTML; 


console.log(codeList)
