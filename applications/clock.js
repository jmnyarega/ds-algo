/**
 * How to represent analogue clock
 */

function clock(time) {
  const timeArray = time.split(":");
  const hour = timeArray[0] == 12 ? 0 : timeArray[0];
  const minute = timeArray[1] == 0 ? 60 : timeArray[1];
  const seconds = timeArray[2];
  console.log()
  return ({
    hour: ((minute / 60) * 30) + (hour * 30),
    minute: (360 / 60) * minute,
    seconds: (360 / 60) * seconds
  });
}
console.log(clock("0:01:23"));
