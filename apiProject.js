var apiKey = 'rssgh6d2dnJfNXcpX2tsNB088KWM9cCimK5hUF8Z';

document.addEventListener('DOMContentLoaded', makeButtons);

function makeButtons(){
    document.getElementById('apiTest').addEventListener('click', function(event){
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey, true);
        request.addEventListener('load', function(){
          if(request.status >= 200 && request.status < 400){
            var response = JSON.parse(request.responseText);
            document.getElementById('urlTestResult').textContent = response.url;
            document.getElementById('apiTestLink').textContent = "Click here";
            document.getElementById('apiTestLink').href = response.url;
          }
          else{
            console.log("Error in network request: " + request.statusText);
          }
        })
        request.send(null);
        event.preventDefault();
    })
    document.getElementById('newYearAPI').addEventListener('click', function(event){
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.nasa.gov/planetary/apod?date=2017-01-01&api_key=' + apiKey, true);
        request.addEventListener('load', function(){
          if(request.status >= 200 && request.status < 400){
            var response = JSON.parse(request.responseText);
            document.getElementById('urlNewYearAPI').textContent = response.url;
            document.getElementById('apiNewYear').textContent = "Click here";
            document.getElementById('apiNewYear').href = response.url;
          }
          else{
            console.log("Error in network request: " + request.statusText);
          }
        })
        request.send(null);
        event.preventDefault();
    })
    document.getElementById('APODsubmit').addEventListener('click', function(event){
        var request = new XMLHttpRequest();
        var APODyear = document.getElementById('YearAPOD').value;
        var APODmonth = document.getElementById('MonthAPOD').value;
        var APODday = document.getElementById('DayAPOD').value;
        request.open('GET', 'https://api.nasa.gov/planetary/apod?date=' + APODyear + '-' + APODmonth + '-' + APODday + '&api_key=' + apiKey, true);
        request.addEventListener('load', function(){
            if(request.status >= 200 && request.status < 400){
                var response = JSON.parse(request.responseText);
                document.getElementById('urlCustomDate').textContent = response.url;
                document.getElementById('apiCustom').textContent = "Click here";
                document.getElementById('apiCustom').href = response.url;
            }
            else{
                console.log("Error in network request: " + request.statusText);
            }
        })
        request.send(null);
        event.preventDefault();
    })
    document.getElementById('descAPODsubmit').addEventListener('click', function(event){
        var request = new XMLHttpRequest();
        var APODyear = document.getElementById('descYearAPOD').value;
        var APODmonth = document.getElementById('descMonthAPOD').value;
        var APODday = document.getElementById('descDayAPOD').value;
        request.open('GET', 'https://api.nasa.gov/planetary/apod?date=' + APODyear + '-' + APODmonth + '-' + APODday + '&api_key=' + apiKey, true);
        request.addEventListener('load', function(){
            if(request.status >= 200 && request.status < 400){
                var response = JSON.parse(request.responseText);
                document.getElementById('urlCustomDateDesc').textContent = response.url;
                document.getElementById('apiCustomDesc').textContent = "Click here";
                document.getElementById('apiCustomDesc').href = response.url;
                document.getElementById('APODtitle').textContent = response.title;
                document.getElementById('APODdescription').textContent = response.explanation;
                document.getElementById('APODdate').textContent = response.date;
                document.getElementById('APODcopy').textContent = response.copyright;
            }
            else{
                console.log("Error in network request: " + request.statusText);
            }
        })
        request.send(null);
        event.preventDefault();
    })
}
