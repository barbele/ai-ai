function showContent(contentId) {
  var contents = document.querySelectorAll('.main-content, .login-content, .public-database-content');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });
  document.getElementById(contentId).classList.remove('hidden');
}

function showMaterials() {
  var contents = document.querySelectorAll('.main-content, .login-content, .public-database-content');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });
  document.getElementById('public-database-content').classList.remove('hidden');
  document.querySelectorAll('table').forEach(function(table) {
    if (!table.classList.contains('materials-table')) {
      table.classList.add('hidden');
    }
  });
}

function showInventory() {
  var contents = document.querySelectorAll('.main-content, .login-content, .public-database-content');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });
  document.getElementById('public-database-content').classList.remove('hidden');
  document.querySelectorAll('table').forEach(function(table) {
    if (!table.classList.contains('inventory-table')) {
      table.classList.add('hidden');
    }
  });
}

function showAll() {
  var contents = document.querySelectorAll('.main-content, .login-content, .public-database-content');
  contents.forEach(function(content) {
    content.classList.remove('hidden');
  });
  document.querySelectorAll('table').forEach(function(table) {
    table.classList.remove('hidden');
  });
}
