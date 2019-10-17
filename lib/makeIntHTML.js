  function makeIntHTML(data) {
    return `
    <html>
    <head>
      <title>Intern Test</title>
    </head>
    <body>
      <div>
        <h1>Intern Test</h1>
        <p>Name: ${data.name}</p>
        <p>ID: ${data.id}</p>
        <p>E-mail: ${data.email}</p>
        <p>School: ${data.school}</p>
      </div>
    </body>
    </html>
    `
  }

  module.exports = {
    makeIntHTML: makeIntHTML
  }