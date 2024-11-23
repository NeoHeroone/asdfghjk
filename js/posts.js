document.addEventListener("DOMContentLoaded", async () => {
  let container = document.querySelector(".container");
  let loading = document.querySelector(".loading");
  loading.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    loading.style.display = "none";

    data.forEach((user) => {
      let card = document.createElement("div");
      let UserId = document.createElement("h2");
      let Id = document.createElement("h3");
      let Title = document.createElement("h4");
      let body = document.createElement("div");

      UserId.textContent = `User Id: ${user.userId}`;
      Id.textContent = `ID: ${user.id}`;
      Title.textContent = `Title: ${user.title}`;
      body.textContent = `Body: ${user.body}`;

      card.append(UserId, Id, Title, body);
      container.append(card);
    });
  } catch (error) {
    console.error(error);
  }
});