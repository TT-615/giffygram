export const Post = (postObject) => {
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

