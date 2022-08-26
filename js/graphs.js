let tixChart = document.getElementById('ticketChart').getContext('2d');

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