/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  let myGithubUser = axios.get("https://api.github.com/users/mwhyte18")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
//let addDomChild = document.querySelector('.cards').appendChild(cardComponent(myGithubUser));

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [  
  "mwhyte18",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(data => {
  axios.get(`https://api.github.com/users/${data}`)
  .then(response => {
    document.querySelector(".cards").appendChild(cardComponent(response));
  })
  .catch(error => {
    console.log(error);
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardComponent(object) {
const card = document.createElement('div');
card.classList.add('card');



const userImg = document.createElement('img');
userImg.setAttribute('src', object.data.avatar_url);
card.appendChild(userImg);

const cardInfo = document.createElement('div');
cardInfo.classList.add('card-info');
card.appendChild(cardInfo);


const nameH3 = document.createElement('h3');
nameH3.classList.add('name');
nameH3.textContent = object.data.name;
cardInfo.appendChild(nameH3);


const usernameP = document.createElement('p');
usernameP.classList.add('username');
usernameP.textContent = object.data.login;
cardInfo.appendChild(usernameP);


const locationP = document.createElement('p');
cardInfo.appendChild(locationP);
if (object.data.location != null){
  locationP.textContent = object.data.location;
}
else{
  locationP.TextContent = "Not Available";
}
const profileLinkA = document.createElement('a');
profileLinkA.setAttribute('href', object.data.html_url);


const profileP = document.createElement('p');
cardInfo.appendChild(profileP);
profileP.textContent = `Profile: ${profileLinkA}`;

profileP.appendChild(profileLinkA);



const followersP = document.createElement('p');
followersP.textContent = `Followers: ${object.data.followers}`;
cardInfo.appendChild(followersP);


const followingP = document.createElement('p');
followingP.textContent = `Following: ${object.data.followingP}`;
cardInfo.appendChild(followingP);

const bioP = document.createElement('p');
bioP.textContent = `Bio: ${object.data.bio}`;
cardInfo.appendChild(bioP);

return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
