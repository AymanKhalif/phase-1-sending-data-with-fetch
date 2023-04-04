function submitData(name, email) {
  const url = "http://localhost:3000/users";
  const data = { name: name, email: email };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}
