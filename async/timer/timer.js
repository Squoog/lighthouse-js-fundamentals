const args = process.argv;
let alarms = args.slice(2).sort();
let newArr = [];

for (let i = 0; i < alarms.length; i++) {
  if (!isNaN(alarms[i])) {
    if (alarms[i] > 0) {
      newArr.push(alarms[i]);
    }
  }
}
alarms = newArr;

for (let i = 0; i < alarms.length; i++) {
  alarms[i] *= 1000;
}

for (let i = 0; i < alarms.length; i++) {
  let delay = alarms[i];
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}