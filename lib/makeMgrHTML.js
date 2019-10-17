  function makeMgrHTML(data) {
    return `
    <html>
    <head>
      <title>Manager Test</title>
    </head>
    <body>
      <div>
        <h1>Manager Test</h1>
        <p>Name: ${data.name}</p>
        <p>ID: ${data.id}</p>
        <p>E-mail: ${data.email}</p>
        <p>Office: ${data.officeNumber}</p>
      </div>
    </body>
    </html>
    `
  }

  module.exports = {
    makeMgrHTML: makeMgrHTML
  }

  // let data = ['foo','bar','baz'];
  // let html =
  // `
  // <html>
  // <head>
  //   <title>test</title>
  // </head>
  // <body>
  //   <div>header</div>
  //   ${getContent(data)}
  //   <div>footer</div>
  // </body>
  // <html>
  // `

  // function getContent(data) {
  //   return `<div>\n${getList(data)}\n    </div>`;
  // }
  // function getList(data) {
  //   return `      <ul>\n${getListItems(data)}\n      </ul>`
  // }
  // function getListItems(data) {
  //   return data.map(element => {
  //     return `          <li>${element}</li>`;
  //   }).join('\n');
  // }
  // console.log(html);