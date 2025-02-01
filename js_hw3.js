function pow(x, y){
let K = x;
if (y < 0){
    console.log("Показник ступеню не може бути менше 0. Введено: ");
    return y;
    } else if (y == 0){
    console.log("Результат дорівнює 1, бо показник зведення:");
    return y;
} else {    
    for (let i = 1; i < y; i+=1){
        K *= x;
    }
return K;   
}
};
console.log(pow(3, 0));