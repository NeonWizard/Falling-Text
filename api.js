let options = {
	method: "GET",
}

function getBeeQuote() {
  if (!modifiers.beeQuotes) {
    return Promise.reject("Bee Quotes disabled!")
  }

  return fetch(new Request("http://localhost:3054/line"))
  .then((response) => {
    return response.json()
  }).then((data) => {
  	return data.line;
  })
}
