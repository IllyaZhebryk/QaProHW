 function checkProbabilityTheory(count){
    let p = 0; let n = 0;
    for(let i = 1; i<= count; i++){
       let r = Math.floor(Math.random() * 900 + 101);
      if (r%2==0) {
         p++;         
       }else n++;       
    }
    let v = (p/count*100).toFixed(2);
    let w = (n/count*100).toFixed(2);
    console.log("Кількість парних чисел: " + p);
    console.log("Кількість непарних чисел: " +  n);
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Відсоток парних чисел складає " + v);
    console.log("Відсоток непарних чисел складає " + w);
    console.log("Співвідношення парних та непарних чисел складає " + v + " на " + w +" відсотків");
    
 }
 
checkProbabilityTheory(7);
 