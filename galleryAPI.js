var slideCounter = 0;
var carousel_indicators = document.querySelector('.carousel-indicators');
var carousel_inner = document.querySelector('.carousel-inner');

consume_data();

async function get_data() {

    //open the request 
    let response = await fetch('https://picsum.photos/v2/list');

    let data = await response.json();

    return data;

}

function consume_data() {

    get_data().then(function(imgs) {

        let outputimg = '';
        let slides = '';
        let url = '';

        imgs.forEach(function(img) {

            url = img.download_url;
            
            slides += `<li data-bs-target="#carousel" data-bs-slide-to="${slideCounter+=""}"></li>`
            

            if(slideCounter == 0){

                outputimg += `<div class="carousel-item active">
                <img class="d-block" src="${url}" alt=" " width = ${screen.width} height=${screen.height-100}>
                </div>`
            }

            else{

                outputimg += `<div class="carousel-item">
                <img class="d-block" src="${url}" alt=" " width = ${screen.width} height=${screen.height-100}>
                </div>`
            }

            slideCounter+=1;
           
 });
                
            carousel_indicators.innerHTML = slides;
            carousel_inner.innerHTML = outputimg;
             
      })
        .catch(function(err) {
            console.log(err);
         
        });

}