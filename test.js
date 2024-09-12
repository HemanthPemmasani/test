document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://jsonplaceholder.typicode.com/todos";
    const todoTableBody = document.querySelector("#todoTable tbody");
  
    // Fetch data from the API
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        // Loop through the data and create table rows
        data.forEach(todo => {
          const row = document.createElement("tr");
          
          // Create table data for ID, Title, and Status
          row.innerHTML = `
            <td data-lable="ID">${todo.userId}</td>
            <td data-label="ID">${todo.id}</td>
            <td data-label="Title">${todo.title}</td>
            <td data-label="Status">${todo.completed ? 'Completed' : 'Pending'}</td>
          `;
          
          // Append the row to the table body
          todoTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        const errorMessage = document.createElement("tr");
        errorMessage.innerHTML = `<td colspan="3">Error fetching data</td>`;
        todoTableBody.appendChild(errorMessage);
      });
  });
  