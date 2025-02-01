function pow(x, y){
let K = x;
for (let i = 1; i < y; i+=1) {
        K *= x;
    }
return K;   
};
console.log(pow(2, 10));