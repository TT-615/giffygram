export const Post = (postObject) => {
<<<<<<< HEAD
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <button id="delete__${postObject.id}">Delete</button>
      </section>
    `
  }
  
=======
  const newDate = new Date(postObject.timestamp);
  const formattedDate = newDate.toDateString();
  return `
    <section class="post">
      <header>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
      <div>${postObject.description}</div>
      <div>user id is: ${postObject.userId}</div>
      <div>posted on: ${formattedDate}</div>
      <div><button id="edit--${postObject.id}">Edit</button></div>
    </section>
  `
}

>>>>>>> 79ca9fbe66f97a158a3e630c47c3e4f5928f6e7c
