let params = new URLSearchParams(document.location.search.substring(1))
let name = params.get("postID"); 
console.log(name);

