
const dropdowns =document.querySelectorAll('.dropdown');

//Loop through al dropdowns
dropdowns.forEach(dropdown => {
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu li');
    const selected=dropdown.querySelector('.selected');

    //Add a click event to select element
    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    //Loop through all option Element
    options.forEach(option=> {
        //Add a click event to the option element
        option.addEventListener('click', () =>{
            selected.innerText=option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('care-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});