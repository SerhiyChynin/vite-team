let li = document.querySelectorAll('.li');
for (let i = 0; i < li.length; i++){
        li[i].onclick =() => {
            li[i].classList.toggle('red');
    }
    
    
}