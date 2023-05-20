console.log('dd')

fetch('database.json')
.then(response => response.json())
.then(data => {
  const users = data;
    const pageSize = 10;
    const totalPages = Math.ceil(users.length / pageSize);
    let currentPage = 1;

    function displayPage(pageNumber) {
      const pageContainer = document.getElementById('pageContent');
      const paginationContainer = document.getElementById('pagination');

      currentPage = pageNumber;

      // Clear the containers
      pageContainer.innerHTML = '';
      paginationContainer.innerHTML = '';

      // Get the current page data
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const currentPageData = users.slice(startIndex, endIndex);
      // let totalPerson =0;

      // Display the current page data
      currentPageData.forEach((user) => {
        // totalPerson += 1;
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
          <li class="contact-item cf">
            <div class="contact-details">
              <img class="avatar" src="${user.image}" alt="${user.name}" />
              <h3>${user.name}</h3>
              <span class="email">${user.name.toLowerCase().replace(' ', '.')}@example.com</span>
            </div>
            <div class="joined-details">
              <span class="date">Joined ${user.joined}</span>
            </div>
          </li>
        `;
        pageContainer.appendChild(userDiv);
      });

      document.getElementById('totalPerson').innerText = "Total: " + users.length;
      // Generate pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.innerText = i;
        link.addEventListener('click', () => displayPage(i));
        listItem.appendChild(link);
        paginationContainer.appendChild(listItem);
      }
    }

    // Display the first page initially
    displayPage(1);
  })
  .catch(error => {
    console.error('Error:', error);
  });

