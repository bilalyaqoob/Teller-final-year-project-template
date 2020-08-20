// bar chrt for last 48 hours
$(document).ready(function () {
	var ctx = $("#jq-last-48-hours-my");
	var data = {
		labels : ["9:00 PM - 10:00 PM", "10:00 PM - 11:00 PM", "11:00 PM - 12:00 AM", "12:00 AM - 1:00 AM", "1:00 AM - 2:00 AM", "2:00 AM - 3:00 AM", "3:00 AM - 4:00 AM", "4:00 AM - 5:00 AM", "5:00 AM - 6:00 AM", "6:00 AM - 7:00 AM", "7:00 AM - 8:00 AM", "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM", "8:00 PM - 9:00 PM", "9:00 PM - 10:00 PM", "10:00 PM - 11:00 PM", "11:00 PM - 12:00 AM", "12:00 AM - 1:00 AM", "1:00 AM - 2:00 AM", "2:00 AM - 3:00 AM", "3:00 AM - 4:00 AM", "4:00 AM - 5:00 AM", "5:00 AM - 6:00 AM", "6:00 AM - 7:00 AM", "7:00 AM - 8:00 AM", "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM", "8:00 PM - 9:00 PM"],
		datasets : [
			{
				label : "estimated views",
				data : [55, 50, 25, 70, 40, 45, 104, 50, 25, 70, 40, 45, 10, 50, 25, 90, 55, 45, 17, 50, 55, 70, 40, 45, 60, 50, 27, 70, 40, 45, 105, 50, 88, 70, 47, 45, 60, 50, 65, 70, 40, 45, 30, 50, 25, 77, 47, 45],
				backgroundColor : "#5e8ec8"
			}
		]
	};
	var options = {
		legend : {
			display : false,
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}],
			xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                },
                categoryPercentage: 1.0,
            	barPercentage: 1.0
            }]
		}
	};
	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});
});// bar chrt for last 48 hours end

// bar chart for last 60 minutes
$(document).ready(function () {
	var ctx = $("#jq-last-60-minutes-my");
	var data = {
		labels : ["8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM", "8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM", "8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM", "8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM", "8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM", "8:00 PM - 8:01 PM", "8:01 PM - 8:02 PM", "8:02 PM - 8:03 PM", "8:03 PM - 8:04 PM", "8:04 PM - 8:05 PM", "8:05 PM - 8:06 PM", "8:06 PM - 8:07 PM", "8:07 PM - 8:08 PM", "8:08 PM - 8:09 PM", "8:09 PM - 8:10 PM"],
		datasets : [
			{
				label : "estimated views",
				data : [10, 50, 25, 80, 40, 45, 17, 50, 25, 76, 33, 45, 10, 50, 25, 70, 40, 45, 34, 50, 25, 70, 40, 45, 55, 50, 25, 73, 40, 23, 10, 40, 25, 62, 50, 45, 33, 50, 25, 70, 40, 45, 10, 50, 25, 66, 40, 45, 40, 50, 25, 70, 40, 45, 102, 50, 25, 70, 40, 45],
				backgroundColor : "#68ab59"
			}
		]
	};
	var options = {
		legend : {
			display : false,
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}],
			xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                },
                categoryPercentage: 1.0,
            	barPercentage: 1.0
            }]
		}
	};
	var chart1 = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});
});