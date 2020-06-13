//***applied open source design: "Particles"***/

window.onload = function() {
  Particles.init
    ({
        selector: '.background',
        color: '#324D56',
        connectParticles: true,
        maxParticles: 200
    });
};


//***Parsing JSON Data and creating div elements with a loop combined: jQuery and JS***/

$(document).ready(function(){
    
    const movie = JSON.parse(movies);
    
    
    for (let i = 0; i < movie.length; i++){
    
        let mov = `<div class="swiper-slide" id="mov${i}">
                    <img src="${movie[i].poster}">
                        
                        <div class="movie_name">
                            <h3>${movie[i].title}</h3>
                            <p>${movie[i].description}</p>
                                
                                <div class="button_div">
                                    <input type="button" class="btn" value="Like &#128077;" ></input>
                                        
                                        <div class="show">
                                            <h1 id="display"></h1>
                                        </div>
                                </div>
                        </div>
                    </div>`;

        $('.swiper-wrapper').append(mov);
 
    };
        

       //**creating empty counter-function for each button: using data attribute to store values**//
       for (let i = 0; i < movies.length; i++){

        $(`#mov${i}`).data("button_div", 0);
    };
    


        //**creating click-function for counter-button**//
        for (let i = 0; i < movie.length; i++){

            $(`#mov${i}`).on("click", function(){
        
                $(this).data("button_div", $(this).data("button_div") + 1);
            
                $(this).find("#display").text(`${$(this).data("button_div")}`);
            });
        
        }

        //**displaying number of counts**//
    
        for (let i = 0; i < movie.length; i++){

            let counts = $(`#mov${i}`).data("button_div");

            $(`#mov${i}`).find("#display").text(counts);
        };

      
});

  /* trying to solve it with this approach but I'm missing some detail 
  
  for (let i = 0; i < movie.length; i++){

        $(`mov${i}`).data("button_div", 0);

        count = 0;
        $('.btn').click(function(){
        
        count += 1;

        let t = $(this).attr("Like &#128077;");
        $(this).parent().find("#display").text(t).data("button_div");
    });

    };*/

        
    


/* ATTEMPT FOR SORT FUNCTION 

ideas:

requirements:

sort select button with event if/else -> browser-window refresh function?
array(s)
taking counts (whole movie div?), push it to array
sort function as-/descending numerical order

div gets a number, number gets stored in array, compare number, then sort/rearrange whole divs(json objects?)

compare json movie array with new array*/