let button = document.getElementById('btn');


button.addEventListener('click', function(){
    let word = document.getElementById('str');
    let w = word.value;
    let count = w.length;
    let output = document.getElementById('output'); 
    output.innerHTML = `${count}`;
    word.value="";
    
    

});