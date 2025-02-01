function pow(x, y){
let K = x; 
if (y < 0){y = -y;
    for (let i = 1; i < y; i+=1){
        K *= x;
    }
return 1/K;
    } else if (y == 0){
    const str = "Результат дорівнює 1"
    return str;
} else {    
    for (let i = 1; i < y; i+=1){
        K *= x;
    }
return K;   
}
};
console.log(pow(3, -2));