let tixChart = document.getElementById('ticketChart').getContext('2d');
let userSatis = document.getElementById('usChart').getContext('2d');
let serviceChart = document.getElementById("perserviceChart").getContext("2d");
let categoryChart = document.getElementById("percategoryChart").getContext("2d");
let slaChartHigh = document.getElementById("slaHighPrioChart").getContext("2d");
let slaChartMed = document.getElementById("slaMedPrioChart").getContext("2d");
let slaChartLow = document.getElementById("slaLowPrioChart").getContext("2d");

//ticket statistics per week chart
let mixedChart = new Chart(tixChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Resolved Tickets',
            data: [40, 50, 120, 150, 100, 280, 75],
            backgroundColor: '#b48834',
            order: 2
        }, {
            label: 'Unsolved Tickets',
            data: [50, 30, 40, 20, 100, 75, 180],
            backgroundColor: '#000',
            type: 'line',
            order: 1
        }],
        labels: ['August 20', 'August 21', 'August 22', 'August 23', 'August 24', 'August 25', 'August 26']
    },
    options:{
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Number of Tickets Per Week'
            }
        }
    }
 });

//ticket statistics per service
let dataPerService = {
    labels: ["August 20", "August 21", "August 22", "August 23", "August 24", "August 25", "August 26"],
    datasets: [{
      label: "Student Inquiries",
      backgroundColor: "#ffd492",
      data: [13, 7, 4, 9, 11, 6, 15]
    }, {
      label: "Student Grievances",
      backgroundColor: "#e4aa5c",
      data: [14, 3, 5, 8, 10, 9, 5]
    }, {
      label: "Enrollment Concerns",
      backgroundColor: "#B48834",
      data: [17, 2, 6, 7, 19, 9, 4]
    },{
    label: "Others",
      backgroundColor: "#340a10",
      data: [7, 2, 6, 9, 7, 24, 10]
    }]
  };

let groupedChart = new Chart(serviceChart, {
    type: 'bar',
    data: dataPerService,
    options: {
      barValueSpacing: 20,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
          }
        }]
      },
      plugins: {
        title: {
            display: true,
            text: 'Total Number of Tickets Per Service in a Week'
        }
    }
    }
  });
  
//ticket statistics per category chart
let dataPerCategory = new Chart(categoryChart, {
    type: 'bar',
    data: {
        labels:['Ticket Category'],
        datasets: [{
            label: 'Student Inquiries',
            data: [65],
            backgroundColor: '#ffd492'
        },{
            label: 'Student Grievances',
            data: [54],
            backgroundColor: '#e4aa5c'
        },
        {
            label: 'Enrollment Concerns',
            data: [64],
            backgroundColor: '#B48834'
        },
        {
            label: 'Others',
            data: [65],
            backgroundColor: '#340a10'
        }]
    },
    options:{
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Number of Tickets Per Service'
            }
        }
    }
 });

//ticket statistics SLA High Priority
let dataHigh = new Chart(slaChartHigh, {
    type: 'pie',
    data: {
        labels: ['Resolved Within SLA', 'Resolved Outside SLA'],
        datasets: [{
            data: [83, 20],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'High Priority Level Tickets'
            },
            tooltips: {
                enabled: false
            },
            datalabels:{
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalSum(total, datapoint){
                        return total + datapoint;
                    }
                    const totalvalue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalvalue * 100).toFixed(1);
                    const display = [`${percentageValue}%`]
                    
                    return display;
                }
            }
        } 
    }
});

//ticket statistics SLA Med Priority
let dataMed = new Chart(slaChartMed, {
    type: 'pie',
    data: {
        labels: ['Resolved Within SLA', 'Resolved Outside SLA'],
        datasets: [{
            data: [85, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Medium Priority Level Tickets'
            },
            tooltips: {
                enabled: false
            },
            datalabels:{
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalSum(total, datapoint){
                        return total + datapoint;
                    }
                    const totalvalue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalvalue * 100).toFixed(1);
                    const display = [`${percentageValue}%`]
                    
                    return display;
                }
            }
        }
    }
});

//ticket statistics SLA Low Priority
let dataLow = new Chart(slaChartLow, {
    type: 'pie',
    data: {
        labels: ['Resolved Within SLA', 'Resolved Outside SLA'],
        datasets: [{
            data: [167, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Low Priority Level Tickets'
            },
            tooltips: {
                enabled: false
            },
            datalabels:{
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalSum(total, datapoint){
                        return total + datapoint;
                    }
                    const totalvalue = datapoints.reduce(totalSum, 0);
                    const percentageValue = (value / totalvalue * 100).toFixed(1);
                    const display = [`${percentageValue}%`]
                    
                    return display;
                }
            }
        }
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

 