let gImage = document.getElementById("game-picture");
let gImages = ["photos/game1.png", "photos/game2.png"];
let aImage = document.getElementById("arcade-picture");
let aImages = ["photos/image5.JPEG", "photos/image6.JPEG"];
let gD = document.getElementById("gDescription");
let gDs = ["Bad Hare Day", "A Stranger In Your Eyes"];
let gDL = ["https://skulldude.itch.io/bad-hare-day", "https://skulldude.itch.io/a-stranger-in-your-eyes"];
let gDText = document.getElementById("gd-text");
let gDTexts = ["Throw. Shoot. Slash. Saw through hords of zombies!", "Swing through a world and witness the fleeing memories. This game was created in participation with a game jam, on itch.io."];
x = 0;
y = 0;
function addGame()
{
    if(x < gImages.length-1)
    {
        x++;
    }
    else
    {
        x = 0;
    }
    gD.textContent = gDs[x];
    gD.setAttribute('href', gDL[x])
    gDText.textContent = gDTexts[x]
    gImage.src = gImages[x];
    
}

function addArcade()
{
    if(y < aImages.length-1)
        {
            y++;
        }
        else
        {
            y = 0;
        }
    
        aImage.src = aImages[y];
}