document.getElementById('searchInput').addEventListener('input', function() {
    const query = document.getElementById('searchInput').value;
  
    if (query.length > 0) {
      fetch(`/api/files?search=${encodeURIComponent(query)}`) 
        .then(response => response.json())
        .then(data => {
          const resultsList = document.getElementById('results');
          resultsList.innerHTML = ''; 
  
          data.forEach(file => {
            // Debug
            // console.log(file);  
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = file; 
            resultsList.appendChild(listItem);
          });
        })
        .catch(error => {
          console.error('Error fetching files:', error);
        });
    } else {
      document.getElementById('results').innerHTML = '';
    }
  });
  