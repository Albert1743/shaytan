let form = document.forms.namedItem('add');

form.onsubmit = (e) => {
    e.preventDefault();
    let inputs = form.querySelectorAll('input');
    let select = form.querySelectorAll('select');
    let obj = {}
    let error = false

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            error = true;
            input.style.border = '1px solid red'
        } else {
            input.style.border = '1px solid black' 
            object[input.placeholder] = input.value 
        }
    });

    select.forEach(select => {
        if (select.value.trim() === '') {
            error = true;
            select.style.border = '1px solid red'
        } else {
            select.style.border = '1px solid black'
            obj[select.name] = select.value
        }
    });

    if (error) {
        alert('Please fill in all fields.');
        return;
    }

    console.log(obj);    
};
