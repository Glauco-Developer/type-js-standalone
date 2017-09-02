var isEnough = function (nro) {
    return nro > 12;
};
var distance = 4;
console.log(distance + " is bigger then 12?\n " + (isEnough(distance) ? 'Yes' : 'No') + " ");
