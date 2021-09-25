// eslint-disable-next-line no-undef
const { DateTime } = luxon;

const getTimeNow = () => DateTime.now();
const getDateFormated = (gtn) => gtn.toFormat('MMMM dd, yyyy');
const getHoursRaw = (gtn) => [gtn.toObject().hour, gtn.toObject().minute, gtn.toObject().second];
const getHoursFormatted = (hr) => hr.map((el) => (el < 10 ? `0${el}` : el)).join(':');

const timeEl = document.querySelector('#luxon-time');

setInterval(() => {
  const tn = getTimeNow();
  const df = getDateFormated(tn);
  const hr = getHoursRaw(tn);
  const hf = getHoursFormatted(hr);
  timeEl.textContent = `${df}, ${hf}`;
}, 1000);
