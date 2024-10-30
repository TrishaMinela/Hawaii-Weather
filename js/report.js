document.getElementById('weatherForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3000/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Report submitted successfully!');
            this.reset(); // Reset form fields after submission
        } else {
            const errorMessage = await response.text(); // Get error message from response
            alert(`Error submitting report: ${errorMessage}`);
        }
    } catch (error) {
        alert('Network error: ' + error.message);
    }
});
