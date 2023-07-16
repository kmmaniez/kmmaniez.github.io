const day       = document.querySelector('#days');
const hour      = document.querySelector('#hours');
const minute    = document.querySelector('#minutes');
const second    = document.querySelector('#seconds');

const target    = new Date('Jul 25, 2023 12:00:00').getTime();

const countDate = setInterval(() => {
    const now           = new Date().getTime();
    const finished      = target - now;

    const days          = Math.floor(finished / (1000 * 60 * 60 * 24));
    const hours         = Math.floor(finished % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes       = Math.floor(finished % (1000 * 60 * 60) / (1000 * 60));
    const seconds       = Math.floor(finished % (1000 * 60) / (1000));

    day.innerHTML       = days + ' Days';
    hour.innerHTML      = hours + ' Hours';
    minute.innerHTML    = minutes + ' Minutes';
    second.innerHTML    = seconds + ' Seconds';

    if (finished < 0) {
        clearInterval(countDate);
    }

}, 1000)
