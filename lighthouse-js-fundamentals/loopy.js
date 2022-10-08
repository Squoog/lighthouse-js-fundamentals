function loopy(j){
    if (j % 3 === 0){
      return true;
    }
  } 
  function lighthouse(j){
    if (j % 4 === 0){
      return true;
    }
  }
  
  for(let i = 100; i <= 200; i++){
    let egg = '';
    
    if (loopy(i) & lighthouse(i)){
        console.log('LoopyLighthouse')
    }
    else if (loopy(i)){
        console.log('Loopy')
    }
    else if (lighthouse(i)){
        console.log('Lighthouse')
    }
    else{
        console.log(i)
    }

  }