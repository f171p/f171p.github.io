const filterButtons = document.querySelectorAll('.filter-button');

const gridItems = document.querySelectorAll('.grid-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    
    gridItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});