let tixChart = document.getElementById('ticketChart').getContext('2d');
let tixCateg = document.getElementById('categChart').getContext('2d');
let userSatis = document.getElementById('usChart').getContext('2d');

//ticket statistics for 7 days chart
let mixedChart = new Chart(tixChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Closed Tickets',
            data: [40, 50, 120, 150, 100, 280, 75],
            backgroundColor: '#b48834',
            order: 2
        }, {
            label: 'New Tickets',
            data: [50, 30, 40, 20, 100, 75, 180],
            backgroundColor: '#000',
            type: 'line',
            order: 1
        }],
        labels: ['August 20', 'August 21', 'August 22', 'August 23', 'August 24', 'August 25', 'August 26']
    },
    options:{
        responsive: true
    }
 });

//tickets by category chart
const doughnutChart = new Chart(categChart, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


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

 