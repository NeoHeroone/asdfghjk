let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let form = document.querySelector("form");
let addNewBtn = document.getElementById("addNewBtn");
let formTitle = document.getElementById("formTitle");
let submitBtn = document.getElementById("submitBtn");

const API_URL = "http://localhost:3001/employees";

let editId = null;

const createTableHead = async () => {
  const response = await fetch(API_URL);
  const datas = await response.json();
  if (datas.length) {
    thead.innerHTML = `<tr>${Object.keys(datas[0])
      .map((key) => `<th>${key[0].toUpperCase() + key.slice(1)}</th>`)
      .join("")}<th>Action</th></tr>`;
  }
};

const renderTableData = async () => {
  const response = await fetch(API_URL);
  const datas = await response.json();
  tbody.innerHTML = datas.length
    ? datas
        .map(
          (val) => `
      <tr>
        <td>${val.id}</td>
        <td>${val.name}</td>
        <td>${val.email}</td>
        <td>${val.num}</td>
        <td>
          <button onclick="onEdit(${val.id})">🖍️</button>
          <button onclick="onDelete(${val.id})">🗑️</button>
        </td>
      </tr>`
        )
        .join("")
    : `<tr><td colspan="5">No data found</td></tr>`;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let [nameText, emailText, numText] = [...form.querySelectorAll("input")].map(
    (input) => input.value
  );
  if (!nameText || !emailText || !numText)
    return alert("Please fill in all fields");

  const newData = {
    name: nameText,
    email: emailText,
    num: numText,
  };

  if (editId !== null) {
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    editId = null;
    formTitle.textContent = "Add New Data";
    submitBtn.textContent = "Add New";
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
  }

  form.reset();
  form.classList.add("hidden");
  renderTableData();
});

window.onDelete = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  renderTableData();
};

window.onEdit = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const val = await response.json();

  form.classList.remove("hidden");
  formTitle.textContent = "Edit Data";
  submitBtn.textContent = "Update";
  form.querySelectorAll("input")[0].value = val.name;
  form.querySelectorAll("input")[1].value = val.email;
  form.querySelectorAll("input")[2].value = val.num;
  editId = id;
};

addNewBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
  if (form.classList.contains("hidden")) form.reset();
  formTitle.textContent = "Add New Data";
  submitBtn.textContent = "Add New";
  editId = null;
});

(async () => {
  await createTableHead();
  await renderTableData();
})();