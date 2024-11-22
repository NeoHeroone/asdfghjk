const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      "apple",
      "banana",
      "cherry",
      "date",
      "fig",
      "grape",
      "kiwi",
      "lemon",
      "mango",
      "orange",
    ]);
  }, 1500);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      "https://via.placeholder.com/150/1",
      "https://via.placeholder.com/150/2",
      "https://via.placeholder.com/150/3",
      "https://via.placeholder.com/150/4",
      "https://via.placeholder.com/150/5",
      "https://via.placeholder.com/150/6",
      "https://via.placeholder.com/150/7",
      "https://via.placeholder.com/150/8",
      "https://via.placeholder.com/150/9",
      "https://via.placeholder.com/150/10",
    ]);
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then(([data, strings, images]) => {
    const dataList = document.getElementById("data-list");
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      dataList.appendChild(li);
    });

    const stringList = document.getElementById("string-list");
    strings.forEach((str) => {
      const li = document.createElement("li");
      li.textContent = str;
      stringList.appendChild(li);
    });

    const imageList = document.getElementById("image-list");
    images.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      imageList.appendChild(img);
    });
  })
  .catch((error) => {
    console.error("Xatolik yuz berdi:", error);
  });
