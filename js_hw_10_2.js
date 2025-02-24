let list = "Waterloo, KingsCross, Time, Pub, Aquedook, Автомото, Полтава, Дніпро, Львів, Канів";
const letters = /\b[^AaАа]{6,}\b/g;
console.log(list.match(letters));