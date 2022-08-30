//user satisfaction chart
let barChart = new Chart(userSatis, {
    type: 'bar',
    data: {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied'],
        datasets: [{
            data: [12, 100, 75, 50, 2],
            backgroundColor: [
                '#0FA958',
                '#DBFF00',
                '#FAFF00',
                '#FFB800',
                '#EA4335'
            ],
            borderColor: [
                '#0FA958',
                '#DBFF00',
                '#FAFF00',
                '#FFB800',
                '#EA4335'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

 