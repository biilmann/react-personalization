export function randomBucket(name, choices) {
  return {
    name,
    choices,
    choose() {
      return this.choices[Math.floor(Math.random() * this.choices.length)];
    }
  };
}
