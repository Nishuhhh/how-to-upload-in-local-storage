const myform = document.querySelector('#my-form') ;
const nameInput= document.querySelector('#name') ;
const emailInput = document.querySelector('#email') ;
myform.addEventListener('submit' ,onSubmit) ;

function onSubmit(e)
{
    e.preventDefault() ;

    localStorage.setItem('username' , nameInput.value) ;
    localStorage.setItem('useremail' , emailInput.value) ;

}