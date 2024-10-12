// ~/Myproject/nginx/Public/js/scripts.js
async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    const list = document.getElementById('data-list');
    list.innerHTML = '';

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Email: ${item.email}, Age: ${item.age}`;
        list.appendChild(li);
    });
}

async function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    await fetch('/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, age }),
    });

    fetchData(); // Refresh the data after adding
}

// Fetch initial data
fetchData();
