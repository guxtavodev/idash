async function Teste() {
  fetch('https://ApiSite.gustavobarros7.repl.co/dados', { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json', 
      
    }, 
    body: JSON.stringify({ // your expected POST request payload goes here 
      title: "My post title", 
      body: "My post content." 
      
    }) 
    
  }) 
    .then(res => res.json()) 
    .then(data => { // enter you logic when the fetch is successful 
    console.log(data) }) 
    .catch(error => { // enter your logic for when there is an error (ex. error toast) 
    console.log(error) 
      
    }) 
}

Teste()
