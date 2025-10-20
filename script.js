// Add an event listener to the dropdown to load a schedule when the selection changes
document.getElementById("myDropdown").addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    loadSchedule(value);
});

// Fetch the schedule JSON and render cards for each class
async function loadSchedule(filename) {
    try {
        const res = await fetch(filename);
        const data = await res.json();
        const classSchedule = document.getElementById("classSchedule");
        classSchedule.innerHTML = "";

        // Create and append a card for each subject in the schedule
        data.forEach(subject => {
            const cardHTML = `
      <div class="col-12 col-md-6 col-lg-4">
      <div class="card shadow-sm h-100">
        <div class="card-body">
        <h5 class="card-title">${subject.className}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${subject.teacher}</h6>
        <p><strong>Room Number: </strong>${subject.roomNumber}</p>
        <p><strong>Period: </strong> ${subject.period}</p>
        <p><strong>Subject Area: </strong> ${subject.subjectArea}</p>
        </div>
      </div>
      </div>
    `;
            classSchedule.insertAdjacentHTML('beforeend', cardHTML); // append the card
        });

    } catch (err) {
        const status = document.getElementById("status");
        status.innerHTML = `<div class="alert alert-danger">Error loading schedule. Please try again.</div>`;
    }
}
