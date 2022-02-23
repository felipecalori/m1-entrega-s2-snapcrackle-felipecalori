function snapCrackle(maxValue) {
    let string = '';
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 != 0 && i % 5 === 0){
            string += 'SnapCrackle';
        }else if(i % 2 != 0){
            string += 'Snap';
        }else if(i % 5 === 0){
            string += 'Crackle';
        }else{
            string += i;
        }
        if(i < maxValue){
            string += ', ';
        }
    }return string;
}


function ePrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
        return false
      }return true;
  }


function snapCracklePrime(maxValue) {
    let string = '';
    let cont = 0;
    for(let i = 1; i <= maxValue; i++){
        cont = ePrime(i);
        if(i % 2 != 0 && i % 5 === 0){
            if(cont === false){
                string += 'SnapCrackle';   
            }else{
                string += 'SnapCracklePrime';
            }
        } 
        else if(i % 2 != 0){
            if(cont === false){
                string += 'Snap'; 
            }else{
                string += 'SnapPrime';
            }
        }else if(i % 5 === 0){
            if(cont === false){
                string += 'Crackle';
            }else{
                string += 'CracklePrime';  
            }
        }else{
            if(cont === false){
                string += i;
            }else{
                string += 'Prime';
            }
        }
        if(i < maxValue){
            string += ', ';
        }
    }return string;
}

