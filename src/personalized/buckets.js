export function randomBucket(name, choices) {
  return {
    name,
    choices,
    choose() {
      return this.choices[Math.floor(Math.random() * this.choices.length)];
    }
  };
}

export function localeBucket() {
  return {
    name: "locale",
    choices: ["en", "es"],
    choose() {
      return fetch("/locale.json")
        .then(resp => resp.json())
        .then(data => {
          console.log("Got data: %o", data);
          return data.locale;
        });
    }
  };
}
