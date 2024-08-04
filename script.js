document.addEventListener('DOMContentLoaded', () => {

    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let listItemUl = document.querySelector('.list-items ul');
    
    // In Mobile View Open Nav Items
    let mobileViewOpen = () => {
        hamburgerMenu.classList.toggle('active');
        listItemUl.classList.toggle('active');
    }
    
    hamburgerMenu.addEventListener('click', () =>{
        mobileViewOpen()
    });

    // In Mobile View Close Nav Items
    let listItemLis = document.querySelectorAll('.list-items>ul>li>a');

    let mobileViewClose = () => {
        hamburgerMenu.classList.remove('active');
        listItemUl.classList.remove('active');
    }

    listItemLis.forEach(ele => {
        listItemUl.addEventListener('click', () => {
            mobileViewClose();
        })
    });



});