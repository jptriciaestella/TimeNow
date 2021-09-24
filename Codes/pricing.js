var slider = document.getElementById('input-slider');
var monthly = document.getElementById('monthly');
var yearly = document.getElementById('yearly');
var monthlyContent = document.getElementById('monthly-content');
var yearlyContent = document.getElementById('yearly-content');

slider.addEventListener('click', function() {
    monthly.classList.toggle("check");
    yearly.classList.toggle("check");
    monthlyContent.classList.toggle("hidden");
    yearlyContent.classList.toggle("hidden");
}, false);