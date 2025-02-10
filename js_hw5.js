var pc = {
"стрижка": "90 грн",
"гоління": "100 грн",
"Миття голови": "60 грн",
price(){
    let sum = 0;
    for (const key in this) {
    if(!isNaN(parseInt(this[key]))) {
        sum += parseInt(this[key]);                        
        }
    }return sum;
},
minPrice(){
    let min = parseInt(this["стрижка"]);/* Марічко, я не зміг знайти, як в об'єкті отримати 
    значення саме першого ключа. Тому я припустив, шо яжпрограміст і знаю, яка властивість йде першою.*/
    for (const key in this) {
    if(!isNaN(parseInt(this[key]))) {
        let a = parseInt(this[key]);
         if (a < min) {
            min = a;                       
        }}
    } return min;
},
maxPrice(){
    let max = 0 ;
    for (const key in this) {
        if(!isNaN(parseInt(this[key]))) {
        let a = parseInt(this[key]);
        if (a > max) {
            max = a;            
        }}
    } return max;
}
}

console.log(pc.price());
console.log(pc.maxPrice());
console.log(pc.minPrice());

pc["Пшик парфумом"] = "25 гривень";
pc["Вжик бритвою"] = "130 гривень";
console.log(pc.price());
console.log(pc.maxPrice());
console.log(pc.minPrice());