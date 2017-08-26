//redirect user from amazon.com to affiliate link
console.log("start amazon script");
console.log(window.location.href);
if (window.location.href == "https://www.amazon.com/"){
  window.location.replace("https://www.amazon.com/?&_encoding=UTF8&tag=kiliso-20&linkCode=ur2&linkId=d92d7acb21b4e0b7bc910200b0ef3a0c&camp=1789&creative=9325");
}
