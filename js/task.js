document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.rectangle');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const task = this.nextElementSibling;
        if (this.checked) {
          task.classList.add('completed');
        } else {
          task.classList.remove('completed');
        }
      });
    });
  });
  