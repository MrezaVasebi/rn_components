type timeType = { h: number; m: number; s: number };

export function secondsToTime(secs: number): timeType {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj: timeType = {
    h: hours,
    m: minutes,
    s: seconds,
  };

  return obj;
}
