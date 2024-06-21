function updateDate() {
    const dateInput = document.getElementById('date-input');
    const selectedDate = document.getElementById('selected-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateInput.value);
    selectedDate.textContent = date.toLocaleDateString('id-ID', options);
}