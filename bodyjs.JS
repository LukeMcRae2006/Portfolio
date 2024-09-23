let fImage = document.getElementById("front-image");
let fImages = ["photos/image1.PNG", "photos/image2.JPG", "photos/image3.JPG", "photos/image4.JPG", "photos/image5.JPEG", "photos/image6.JPEG"]
x = 0;
function add()
{
    if(x < fImages.length-1){
        x = x+1;
    }
    else
    {
        x = 0;
    }
    
    
    fImage.src = fImages[x];
}

setInterval(add,5000);







