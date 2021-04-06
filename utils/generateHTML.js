  const generateHTML = () => 
  `
    <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/69600a8117.js" crossorigin="anonymous"></script>
    
    <title>Team Profile Generator</title>
    </head>
    
    <body>
    <header>
    <h1>Team Profile</h1>
    </header>
    
    <div class="container">
    
    <div class='row'>
    
    <div class="col-12 d-flex justify-content-center">
    `
    
 const createManager = (manager) =>
`
      <div class="card m-2 col-3">
        <div class="card-body">
          <h5 class="card-title">${manager.name}
          <i class="fas fa-mug-hot"></i>Manager</h5>
        </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office #:${manager.officeNumber}</li>
      </ul>
      </div>`
 
 
    
const createEngineer = (engineer) => 
`
      <div class="card m-2 col-3">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}
        <i class="fas fa-glasses"></i>Engineer</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Office #:${engineer.github}</li>
      </ul>
      </div>`

    
const createIntern = (intern) =>
`
      <div class="card m-2 col-3">
      <div class="card-body">
        <h5 class="card-title">${intern.name}
        <i class="fas fa-user-graduate"></i>Intern</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">Office #:${intern.school}</li>
      </ul>
      </div>`
        
const endHTML = () =>
`         
        </div>
      </div>
    </div>
 
  
  </body>
  </html>
  `

module.exports = {
  generateHTML,
  endHTML,
  createManager,
  createIntern,
  createEngineer,
}