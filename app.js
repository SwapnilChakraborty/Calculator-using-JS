(function(){

    let screen=document.querySelector('.screen');
    let buttons=document.querySelector('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    
    buttons.forEach(function(button) {
        button.addEventlistener('click',function(e){
            let value=e.target.dataset.num;
            screen.value +=value;
        })
    });

    equal.addEventlistner('click',function(e){
        if(screen.value === ''){
            screen.value ="";
        }else{
            let answer = eval(screen.value);
            screen.value= answer;
        }
    })


})();