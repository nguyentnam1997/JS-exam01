const buttons = document.querySelectorAll('button');
      const dataList = document.getElementById('dataList');
  
      function loadData(resource) {
        // Remove "active" class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
  
        // Add "active" class to the clicked button
        const clickedButton = document.getElementById(`${resource}Button`);
        clickedButton.classList.add('active');
  
        // Use Axios to make the API request
        axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
          .then(response => {
            // Display the data in the ul
            dataList.innerHTML = '';
            response.data.forEach(item => {
              const listItem = document.createElement('li');
              listItem.textContent = item.title;
              dataList.appendChild(listItem);
            });
          })
          .catch(error => console.error('Error fetching data:', error));
      }
  
      // Load "posts" data by default
      loadData('posts');