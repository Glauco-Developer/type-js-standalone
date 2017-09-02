let isEnough = function (nro: number) : boolean {
  return nro > 12;
}
let distance = 4
console.log(`${distance} is bigger then 12?\n ${isEnough(distance) ? 'Yes' : 'No'} `)
