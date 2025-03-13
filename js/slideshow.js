/*
* Content carouserl/slide.
* 
*/

const slide = {
    pagesize:  4,
    index: 0,
    timeWait: 2800, // miliseconds
    slideobj: document.querySelectorAll(".slide-item"),

    nextPage: function(){
        
        this.index = this.index + 1;
        /*this.nextPage();*/
        //console.log( this.index );
        if ( this.index > 3 ){
            this.index = 0;
        }

        for (i = 0; i < this.pagesize; i++ ){
            if ( i != this.index ){
                this.slideobj[ i ].style.contentVisibility = "hidden";
                this.slideobj[ i ].style.display = "none";
            } else {
                this.slideobj[ i].style.contentVisibility = "visible";
                this.slideobj[ i ].style.display = "flex";
                this.slideobj[ i ].style.flexDirection = "column";
            }
        }
        
    },

    

    show: function(){
        //console.log( this.slideobj );
        this.slideobj[0].style.contentVisibility = "visible";

    },
 
};

slide.show();

function slideLoop(){
    //if (!intervalID)
    //    intervalID = setInterval( slide.nextPage, 800)
    slide.nextPage();
    setTimeout( slideLoop, slide.timeWait );
}

slideLoop();


