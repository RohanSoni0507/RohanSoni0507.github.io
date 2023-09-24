// Load data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Use the data to set the positiveChangeMetric value
        const positiveChangeMetric = data.positiveChangeMetric; // Replace with the correct property name

        // Display the positive change metric on the dashboard
        document.querySelector('.bar-chart').style.width = `${positiveChangeMetric}px`;

        // Update the text content of the "Positive Change Metric" element
        document.getElementById('positiveChangeText').textContent = `Positive Change Metric: ${positiveChangeMetric}`;

        // Create a simple bar chart using Chart.js
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Positive Change Metric'],
                datasets: [{
                    label: 'Positive Change',
                    data: [positiveChangeMetric],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Error loading data.json:', error);

        // Display a default value on the dashboard if data cannot be loaded
        const defaultPositiveChangeMetric = 50; // Set a default value
        document.querySelector('.bar-chart').style.width = `${defaultPositiveChangeMetric}px`;

        // Update the text content of the "Positive Change Metric" element with the default value
        document.getElementById('positiveChangeText').textContent = `Positive Change Metric: ${defaultPositiveChangeMetric}`;
    });