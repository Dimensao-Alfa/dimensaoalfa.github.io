const menu={
    menuobj : document.querySelector(".container-menu-mobile"),
    menuclose: document.querySelector(".container-menu-close"),
    menuContainerNav: document.querySelector(".container-nav"),

    openMenu : function( e ){
        this.menuobj = document.querySelector(".container-menu-mobile");
        this.menuContainerNav = document.querySelector(".container-nav");
        this.menuclose = document.querySelector(".container-menu-close")
        console.log( this.menuobj );
        this.menuobj.style.contentVisibility = 'hidden';
        this.menuContainerNav.style.contentVisibility = "visible";
        this.menuclose.style.contentVisibility = 'visible';
        this.menuContainerNav.style.padding = "8px"

        console.log("open menu");


    },

    closeMenu: function( e ){

    }


}

document.addEventListener('click', menu.openMenu );
document.addEventListener('click', menu.closeMenu);