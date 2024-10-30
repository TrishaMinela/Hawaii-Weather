
    document.getElementById('weatherForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

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
            alert('Error submitting report');
        }
    });
