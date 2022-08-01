let string = '';
let screen = document.querySelector('input')
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            screen.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            screen.value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            screen.value = string;
        }
        else if(e.target.innerHTML == '㎡'){
            string = string*string;
            screen.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            screen.value = string;
        }
    })
});