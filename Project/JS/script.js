const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z ]([a-z A-Z]+) ([a-z A-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');        
    }
    else{
        console.log('Your name is not valid');
        $(".errorName").show();     
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');       
    }
    else{
        console.log('Your email is not valid');
        $(".errorEmail").show();
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');       
    }
    else{
        console.log('Your phone is not valid'); 
        $(".errorPhone").show();    
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{   
    console.log('Form Submitted'); 
    alert('form is submitted')     
});
