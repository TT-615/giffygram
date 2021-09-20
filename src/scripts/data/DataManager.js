const loggedInUser = {
	id: 1,
	name: "Tia",
	email: "tia@gmail.com",
	dateJoined: 1630513631166,
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

let userCollection = [];

export const getUsers = () => {

	return fetch("http://localhost:8088/users")
	.then(response => response.json())
	.then(parsedResponse => {
		userCollection = parsedResponse;
		return parsedResponse;
	})
}

export const createPost = postObj => {
	return fetch("http://localhost:8088/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(postObj)
  
	})
		.then(response => response.json())
  }
  

let postCollection = [];

export const getPosts = () => {
	return fetch("http://localhost:8088/posts")
	.then(response => response.json())
	.then(parsedResponse => {
		postCollection = parsedResponse;
		return parsedResponse;
	})
}

export const deletePost = postId => {
	return fetch(`http://localhost:8088/posts/${postId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		}
  
	})
		.then(response => response.json())
		.then(getPosts)
  }
  
