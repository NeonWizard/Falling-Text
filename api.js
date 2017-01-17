let options = {
  method: "GET",
}

fetch(new Request("http://localhost:3054/line"), options).then((response) => {
  return response.json()
}).then((data) => {
  console.log("hi", data)
})
