//Create HTML page to be then overwriting index.html 
const generateHTML = function (teamStr) {
//   console.log("Inside generate HTML");
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>
        <div class="header">
            <div class="jumbotron jumbotron-fluid" style="background-color: #00fbff">
                <h1 class="display-4 text-white text-center font-weight-bold">My Radical Team</h1>
            </div>
        </div>

        <div class="container-body container-fluid">
            <div class="row">

                ${teamStr}

            </div>
        </div>


        <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>
    </body>

    </html>
    `;
};

//Generate card for each employee
const generateCard = function (arr) {
  let roleInfo;

  if (arr.title === "Manager") {
    roleInfo = `Office Number: ${arr.officeNumber}`;
  } else if (arr.title === "Engineer") {
    roleInfo = `Github Username: ${arr.github}`;
  } else if (arr.title === "Intern") {
    roleInfo = `School: ${arr.school}`;
  }

  return `
    <div class="card" style="margin: 50px" >
        <div class="card-header">
            <h2>${arr.name}</h2>  
            <h2><i class="far fa-user"></i> ${arr.title}</h2>
            <hr>
        </div>
  
        <div class="card-body">
            <ul>
                <li>ID: ${arr.id}</li>
                <li>Email: ${arr.email}</li>
                <li>${roleInfo} </li>
            </ul>
        </div>
    </div>
    `;
};

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;
