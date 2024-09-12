document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://jsonplaceholder.typicode.com/todos";
    const todoTableBody = document.querySelector("#todoTable tbody");
  
    // Fetch data from the API
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
<<<<<<< HEAD
=======
        
>>>>>>> afaff0b5ecb5bf7d8d02e96402934622eecea896
        data.forEach(todo => {
          const row = document.createElement("tr");
          
          // Create table data for UserId, ID, Title, and Status
          row.innerHTML = `
            <td data-lable="ID">${todo.userId}</td>
            <td data-label="ID">${todo.id}</td>
            <td data-label="Title">${todo.title}</td>
            <td data-label="Status">${todo.completed ? 'Completed' : 'Pending'}</td>
          `;
<<<<<<< HEAD
=======
          
        
>>>>>>> afaff0b5ecb5bf7d8d02e96402934622eecea896
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
  
