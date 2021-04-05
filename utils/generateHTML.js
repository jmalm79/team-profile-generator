const generateHTML = (teamInfo) => { 
    
    const createManager = (data) => {
    `
    <div class="card m-2 col-3">
    <div class="card-body">
      <h5 class="card-title">${data.name}
      <i class="fas fa-mug-hot"></i>Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.name}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office #:${data.officeNumber}</li>
    </ul>
    </div>
    
    `}

    const createEngineer = (data) => {
    `
    <div class="card m-2 col-3">
    <div class="card-body">
      <h5 class="card-title">${data.name}
      <i class="fas fa-glasses"></i>Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.name}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office #:${data.github}</li>
    </ul>
    </div>
    
    `}

    const createIntern = (data) => {
    `
    <div class="card m-2 col-3">
    <div class="card-body">
      <h5 class="card-title">${data.name}
      <i class="fas fa-user-graduate"></i>Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.name}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">Office #:${data.school}</li>
    </ul>
    </div>
    
    `};

    };  

module.exports = teamInfo => {
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
  
  ${generateHTML(teamInfo)}
   
   </div>
   </div>
   </div>
   
   
   </body>
   </html>
`
};
