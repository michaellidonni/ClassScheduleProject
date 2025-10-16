document.getElementById("myDropdown").addEventListener("change", (event) => {
    const value = event.target.value; // Get selected value
    console.log(value);
    loadSchedule(value);
});

function loadSchedule(filename) {
    fetch(filename)
        .then(response => response.json())
        .then(data => {
            const classSchedule = document.getElementById("classSchedule");
            classSchedule.innerHTML = " ";
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
                classSchedule.innerHTML += cardHTML;
            });
        })


}
