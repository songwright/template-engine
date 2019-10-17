  function makeEngHTML(data) {
    return `
    <html>
    <head>
      <title>Engineer Test</title>
    </head>
    <body>
      <div>
        <h1>Engineer Test</h1>
        <p>Name: ${data.name}</p>
        <p>ID: ${data.id}</p>
        <p>E-mail: ${data.email}</p>
        <p>GitHub account: ${data.github}</p>
      </div>
    </body>
    </html>
    `
  }

  module.exports = {
    makeEngHTML: makeEngHTML
  }