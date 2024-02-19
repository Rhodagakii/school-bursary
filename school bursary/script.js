document.getElementById('bursaryForm').addEventListener('submit application', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const reason = document.getElementById('reason').value;

    alert(`Application submitted!\n\nName: ${fullName}\nEmail: ${email}\nReason: ${reason}`);
});
