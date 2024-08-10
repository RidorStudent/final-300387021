function start() {
   
        var countDownDate = new Date(document.getElementById("birthday").value);
console.log(countDownDate);
        // Update the count down every 0.1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes, seconds, and deciseconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((distance % (1000 * 60)) / 1000);
            var dicsec = Math.floor((distance % 1000) / 100);

            // Output the result in an element with id="demo"
            
            document.getElementById("demo").innerHTML = days + " days " + hours + " hours " + min + " mins " + sec + " secs " + dicsec + " dicsecs";
           
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                alert("Date is Expired");
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 100);
    }

