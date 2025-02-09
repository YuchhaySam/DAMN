//import





//declare global variables



//declare functions upon loading the page




//generate html for the homepage





//add event listeners to the homepage
document.querySelector('.profile-button').addEventListener('click', enableProfileDropDownList);


document.addEventListener("DOMContentLoaded", function() {
  // Set the initial state of the dropdown content to "none"
  document.querySelector(".js-profile-content").style.display = "none";

  // Add event listeners to the homepage
  document.querySelector('.profile-button').addEventListener('click', enableProfileDropDownList);
});


//create function for homepage

function enableProfileDropDownList(){
    const profileDropDownList = document.querySelector(".js-profile-content");
        if(profileDropDownList.style.display === "none"){
            profileDropDownList.style.display = "block";
        }else{
          profileDropDownList.style.display = "none";
        }
}