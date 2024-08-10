document.addEventListener('DOMContentLoaded', function() {
    showSection('manage-users-roles'); // Default section on load
});

// Show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function confirmAction(action) {
    return confirm(`Are you sure you want to ${action}?`);
}

// Manage Users & Roles Functions
function addUserRole() {
    const form = document.getElementById('manage-users-form');
    const formData = new FormData(form);
    const displayDiv = document.getElementById('user-role-display');
    
    const userRoleDiv = document.createElement('div');
    userRoleDiv.classList.add('user-role-item');
    let userRoleData = `<div><strong>User/Role Added:</strong><br>`;
    formData.forEach((value, key) => {
        userRoleData += `${key.replace('-', ' ')}: ${value}<br>`;
    });
    userRoleData += `<button onclick="editUserRole(this)">Edit</button>
                     <button onclick="deleteUserRole(this)">Delete</button>
                     </div><hr>`;

    userRoleDiv.innerHTML = userRoleData;
    displayDiv.appendChild(userRoleDiv);
    form.reset();
}

function editUserRole(button) {
    const userRoleDiv = button.closest('.user-role-item');
    const form = document.getElementById('manage-users-form');
    const fields = userRoleDiv.querySelectorAll('div:not(.user-role-item)');

    fields.forEach(field => {
        const [label, value] = field.textContent.split(': ');
        const input = form.querySelector(`[name="${label.replace(' ', '-')}"]`);
        if (input) input.value = value.trim();
    });

    userRoleDiv.remove(); // Remove the old entry to allow re-addition
}

function deleteUserRole(button) {
    if (confirmAction('delete this User/Role')) {
        const userRoleDiv = button.closest('.user-role-item');
        userRoleDiv.remove();
    }
}

// Create Class Functions
function addClass() {
    const form = document.getElementById('create-class-form');
    const formData = new FormData(form);
    const displayDiv = document.getElementById('class-display');

    const classDiv = document.createElement('div');
    classDiv.classList.add('class-item');
    let classData = `<div><strong>Class Added:</strong><br>`;
    formData.forEach((value, key) => {
        classData += `${key.replace('-', ' ')}: ${value}<br>`;
    });
    classData += `<button onclick="editClass(this)">Edit</button>
                  <button onclick="deleteClass(this)">Delete</button>
                  </div><hr>`;

    classDiv.innerHTML = classData;
    displayDiv.appendChild(classDiv);
    form.reset();
}

function editClass(button) {
    const classDiv = button.closest('.class-item');
    const form = document.getElementById('create-class-form');
    const fields = classDiv.querySelectorAll('div:not(.class-item)');

    fields.forEach(field => {
        const [label, value] = field.textContent.split(': ');
        const input = form.querySelector(`[name="${label.replace(' ', '-')}"]`);
        if (input) input.value = value.trim();
    });

    classDiv.remove(); // Remove the old entry to allow re-addition
}

function deleteClass(button) {
    if (confirmAction('delete this Class')) {
        const classDiv = button.closest('.class-item');
        classDiv.remove();
    }
}

// Add Learner Functions
function addLearner() {
    const form = document.getElementById('add-learner-form');
    const formData = new FormData(form);
    const displayDiv = document.getElementById('learner-display');

    const learnerDiv = document.createElement('div');
    learnerDiv.classList.add('learner-item');
    let learnerData = `<div><strong>Learner Added:</strong><br>`;
    formData.forEach((value, key) => {
        learnerData += `${key.replace('-', ' ')}: ${value}<br>`;
    });
    learnerData += `<button onclick="editLearner(this)">Edit</button>
                    <button onclick="deleteLearner(this)">Delete</button>
                    </div><hr>`;

    learnerDiv.innerHTML = learnerData;
    displayDiv.appendChild(learnerDiv);
    form.reset();
}

function editLearner(button) {
    const learnerDiv = button.closest('.learner-item');
    const form = document.getElementById('add-learner-form');
    const fields = learnerDiv.querySelectorAll('div:not(.learner-item)');

    fields.forEach(field => {
        const [label, value] = field.textContent.split(': ');
        const input = form.querySelector(`[name="${label.replace(' ', '-')}"]`);
        if (input) input.value = value.trim();
    });

    learnerDiv.remove(); // Remove the old entry to allow re-addition
}

function deleteLearner(button) {
    if (confirmAction('delete this Learner')) {
        const learnerDiv = button.closest('.learner-item');
        learnerDiv.remove();
    }
}

// Billing Functions
function addBilling() {
    const form = document.getElementById('billing-form');
    const formData = new FormData(form);
    const displayDiv = document.getElementById('billing-display');

    const billingDiv = document.createElement('div');
    billingDiv.classList.add('billing-item');
    let billingData = `<div><strong>Billing Added:</strong><br>`;
    formData.forEach((value, key) => {
        if (key.includes('billing-item-description') || key.includes('billing-item-amount')) {
            return;
        }
        billingData += `${key.replace('-', ' ')}: ${value}<br>`;
    });
    billingData += `<button onclick="editBilling(this)">Edit</button>
                    <button onclick="deleteBilling(this)">Delete</button>
                    </div><hr>`;

    billingDiv.innerHTML = billingData;
    displayDiv.appendChild(billingDiv);
    form.reset();
}

function editBilling(button) {
    const billingDiv = button.closest('.billing-item');
    const form = document.getElementById('billing-form');
    const fields = billingDiv.querySelectorAll('div:not(.billing-item)');

    fields.forEach(field => {
        const [label, value] = field.textContent.split(': ');
        const input = form.querySelector(`[name="${label.replace(' ', '-')}"]`);
        if (input) input.value = value.trim();
    });

    billingDiv.remove(); // Remove the old entry to allow re-addition
}

function deleteBilling(button) {
    if (confirmAction('delete this Billing')) {
        const billingDiv = button.closest('.billing-item');
        billingDiv.remove();
    }
}

// Book Functions
function addBook() {
    const form = document.getElementById('book-form');
    const formData = new FormData(form);
    const displayDiv = document.getElementById('book-display');

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    let bookData = `<div><strong>Book Added:</strong><br>`;
    formData.forEach((value, key) => {
        bookData += `${key.replace('-', ' ')}: ${value}<br>`;
    });
    bookData += `<button onclick="editBook(this)">Edit</button>
                 <button onclick="deleteBook(this)">Delete</button>
                 </div><hr>`;

    bookDiv.innerHTML = bookData;
    displayDiv.appendChild(bookDiv);
    form.reset();
}

function editBook(button) {
    const bookDiv = button.closest('.book-item');
    const form = document.getElementById('book-form');
    const fields = bookDiv.querySelectorAll('div:not(.book-item)');

    fields.forEach(field => {
        const [label, value] = field.textContent.split(': ');
        const input = form.querySelector(`[name="${label.replace(' ', '-')}"]`);
        if (input) input.value = value.trim();
    });

    bookDiv.remove(); // Remove the old entry to allow re-addition
}

function deleteBook(button) {
    if (confirmAction('delete this Book')) {
        const bookDiv = button.closest('.book-item');
        bookDiv.remove();
    }
}
