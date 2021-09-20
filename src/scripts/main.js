import { getJokes } from "./data/JokesData.js";
import { getPosts, getUsers, usePostCollection, createPost, deletePost } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { PostEntry } from "./feed/PostEntry.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./footer/Footer.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showPostEntry = () => {
   const entryElement = document.querySelector(".entryForm");
   console.log("entry element is", entryElement);
         entryElement.innerHTML = PostEntry();
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
    console.log("what was clicked", event.target)
    if (event.target.id === "logout"){
        console.log("You clicked on logout")
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
      const postId = event.target.id.split("--")[1];
      deletePost(postId)
        .then(response => {
          showPostList();
        })
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
    showPostEntry();
    showPostEdit();

    // theJokes();
}

startGiffyGram();


applicationElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
      //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "newPost__submit") {
  //collect the input values into an object to post to the DB
    const title = document.querySelector("input[name='postTitle']").value
    const url = document.querySelector("input[name='postURL']").value
    const description = document.querySelector("textarea[name='postDescription']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
        title: title,
        imageURL: url,
        description: description,
        userId: 1,
        timestamp: Date.now()
    }

    applicationElement.addEventListener("click", event => {
      event.preventDefault();
      if (event.target.id.startsWith("edit")) {
        const postId = event.target.id.split("--")[1];
        getSinglePost(postId)
          .then(response => {
            showEdit(response);
          })
      }
    })
    
    const showEdit = (postObj) => {
      const entryElement = document.querySelector(".entryForm");
      entryElement.innerHTML = PostEdit(postObj);
    }
    
    applicationElement.addEventListener("click", event => {
      event.preventDefault();
      if (event.target.id.startsWith("updatePost")) {
        const postId = event.target.id.split("--")[1];
        //collect all the details into an object
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value
        const timestamp = document.querySelector("input[name='postTime']").value
        
        const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: getLoggedInUser().id,
          timestamp: parseInt(timestamp),
          id: parseInt(postId)
        }
        
        updatePost(postObject)
          .then(response => {
            showPostList();
          })
      }
    })
    



  // be sure to import from the DataManager
      createPost(postObject)
      .then(dbResponse => {
        showPostList();
        showPostEntry();
      })
  }
})
