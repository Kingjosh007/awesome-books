const DateTime = luxon.DateTime;

const getTimeNow = () => DateTime.now();
const getDateFormated = (gtn) => gtn.toFormat('MMMM dd, yyyy');
const getHoursFormated = (gtn) => [gtn.toObject().hour, gtn.toObject().minute, gtn.toObject().second]
                                  .map(el => el < 10 ? '0'+el: el)
                                  .join(':');

let timeEl = document.querySelector('#luxon-time');

setInterval(() => {
    const tn = getTimeNow(),
          df = getDateFormated(tn),
          hf = getHoursFormated(tn);
    timeEl.textContent = df + ', ' + hf;
}, 1000)

