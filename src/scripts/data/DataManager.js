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

let postCollection = [];

export const getPosts = () => {
	return fetch("http://localhost:8088/posts")
	.then(response => response.json())
	.then(parsedResponse => {
		postCollection = parsedResponse;
		return parsedResponse;
	})
}

