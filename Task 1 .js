function UpdateTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current = new Date();
    const day = days[current.getUTCDay()];
    const time = current.getTime();

    const dayofweek = document.getElementById('currentday');
    const timenow = document.getElementById('currenttime');

    if (dayofweek && timenow) {
        dayofweek.textContent = day;
        timenow.textContent = time.toString();
    }    
}
document.addEventListener('DOMContentLoaded', function (){
    UpdateTime();
    setInterval(UpdateTime, 1);
});