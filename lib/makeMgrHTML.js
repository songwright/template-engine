  function makeMgrHTML(data) {
    return `
    <div style="width: 18rem;">
      <div class="card mb-3 shadow">
        <div class="card-header text-white bg-primary">
          <h3 class="card-title">${data.name}</h3>
          <h4 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h4>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">E-mail: <a href="mailto: ${data.email}">${data.email}</a></li>
            <li class="list-group-item">Office number: ${data.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    `
  }

  module.exports = {
    makeMgrHTML: makeMgrHTML
  }
