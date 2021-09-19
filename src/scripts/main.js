import { getJokes } from "./data/JokesData.js";
import { getPosts, getUsers } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./footer/Footer.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

// const applicationElement = document.querySelector(".giffygram");

const showFooter = () => {
	const footerElement = document.querySelector ("footer");
		footerElement.innerHTML = Footer();
}

// const handleGiffyClick = (event) => {
// 	console.log("what was clicked", event)
// 	if (event.target.id === "logout"){
// 		console.log("You clicked on logout")
// 	}
// }
// applicationElement.addEventListener("click", handleGiffyClick)

// const startGiffyGram = () => {
// 	showNavBar();
// 	showPostList();
// }
// const theJokes = () => {
//     const postElement = document.querySelector(".jokesList");
//     getJokes().then(apiJoke => {
//     postElement.innerHTML = `<h3>${apiJoke.joke}</h3>`
// })
// }

const applicationElement = document.querySelector(".giffygram");
applicationElement.addEventListener("click", event => {
    console.log("what was cicked", event.target)
    if (event.target.id === "logout"){
        console.log("You clicked on logout")
    }
})


getUsers()
.then(data => {
    console.log("User Data", data)
})


const startGiffyGram = () => {
   
    showNavBar();
    showPostList();
    showFooter();
    // theJokes();
}


startGiffyGram();


applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })
  