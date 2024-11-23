document.addEventListener("DOMContentLoaded", async () => {
  let container = document.querySelector(".container");
  let loading = document.querySelector(".loading");
  loading.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    loading.style.display = "none";

    data.forEach((user) => {
      let card = document.createElement("div");
      let AlbumId = document.createElement("h2");
      let Id = document.createElement("h3");
      let Title = document.createElement("h4");
      let url = document.createElement("a");
      let thumbnail = document.createElement("img");

      AlbumId.textContent = `Album Id: ${user.albumId}`;
      Id.textContent = `ID: ${user.id}`;
      Title.textContent = `Title: ${user.title}`;
      thumbnail.setAttribute("src", `${user.thumbnailUrl}`);
      thumbnail.style.width = "100px";

      url.setAttribute("href", `${user.url}`);
      url.textContent = "View Full Image";
      url.setAttribute("target", "_blank");

      card.append(AlbumId, Id, Title, thumbnail, url);

      container.append(card);
    });
  } catch (error) {
    console.error(error);
  }
});