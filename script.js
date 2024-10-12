document.getElementById('home').addEventListener('click', function() {
  document.getElementById('main-content').innerHTML = `<h2>Welcome!</h2><p>Select an option from the menu to get started.</p>`;
});

document.getElementById('students').addEventListener('click', function() {
  document.getElementById('main-content').innerHTML = `
      <h2>Students</h2>
      <p>Manage student records here.</p>
      <button onclick="addStudent()">Add Student</button>
  `;
});

document.getElementById('courses').addEventListener('click', function() {
  document.getElementById('main-content').innerHTML = `
      <h2>Courses</h2>
      <p>Manage courses here.</p>
      <button onclick="addCourse()">Add Course</button>
  `;
});

function addStudent() {
  alert("Function to add a student.");
}

function addCourse() {
  alert("Function to add a course.");
}

document.getElementById('logout').addEventListener('click', function() {
  alert("Logged out successfully.");
});
