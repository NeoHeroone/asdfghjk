document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const gobackBtn = document.querySelector(".goback");
  gobackBtn.addEventListener("click", () => {
    location.replace("/index.html");
  });
  const userId = location.search.slice(1);
  const datas = JSON.parse(localStorage.getItem("cards"));
  const user = datas.find((val) => val.id == userId);
  function displayUser(user) {
    if (user) {
      const card = document.createElement("div");
      card.classList.add("card", "p-3", "bg-info");
      card.style.width = "300px";
      const elements = [
        { tag: "h2", text: `Name: ${user.name}` },
        { tag: "h3", text: `Username: ${user.username}` },
        { tag: "p", text: `Email: ${user.email}` },
        { tag: "h4", text: `Street: ${user.address.street}` },
        { tag: "h4", text: `Suite: ${user.address.suite}` },
        { tag: "h4", text: `City: ${user.address.city}` },
        { tag: "h4", text: `Zipcode: ${user.address.zipcode}` },
        { tag: "h5", text: `Company: ${user.company.name}` },
        { tag: "p", text: `Catch Phrase: ${user.company.catchPhrase}` },
        { tag: "p", text: `BS: ${user.company.bs}` },
        { tag: "p", text: `Phone: ${user.phone}` },
        {
          tag: "a",
          text: `Website: ${user.website}`,
          attributes: { href: `http://${user.website}`, target: "_blank" }
        }
      ];
      elements.forEach(element => {
        const el = document.createElement(element.tag);
        el.textContent = element.text;
        if (element.attributes) {
          Object.entries(element.attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
          });
        }
        card.appendChild(el);
      });
      container.appendChild(card);
    } else {
      container.textContent = "User not found!";
    }
  }
  displayUser(user);
});