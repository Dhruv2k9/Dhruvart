var drawings = [ { loc: "/drawings/alone in home_1.jpg",  tags:["character"] },
{ loc: "/drawings/batman.jpg",  tags:["character"] },
{ loc: "/drawings/boy on dino_1.jpg",  tags:["character"] },
{ loc: "/drawings/cap.jpg" , tags:["character"] },
{ loc: "/drawings/cart-drawing.jpeg",  tags:["character"] },
{ loc: "/drawings/Chamelon_1.jpg",  tags:["character"] },
{ loc: "/drawings/chrismas.jpg",  tags:["character"] },
{ loc: "/drawings/deadpool.jpeg",  tags:["character"] },
{ loc: "/drawings/doodle page_1.jpg",  tags:["character"] },
{ loc: "/drawings/dragontrainer.jpeg",  tags:["character"] },
{ loc: "/drawings/ganesh.png" ,  tags:["character"]},
{ loc: "/drawings/hawkeye.jpg",  tags:["character"] },
{ loc: "/drawings/kom.jpeg",  tags:["character"] },
{ loc: "/drawings/lion  King_1.jpg",  tags:["character"] },
{ loc: "/drawings/lizard.jpeg",  tags:["character"] },
{ loc: "/drawings/monster.jpeg",  tags:["character"] },
{ loc: "/drawings/owl_1.jpg",  tags:["character"] },
{ loc: "/drawings/pencil-old-man.jpg",  tags:["character"] },
{ loc: "/drawings/picaso style face_1.jpg",  tags:["character"] },
{ loc: "/drawings/potrait_1.jpg",  tags:["character"] },
{ loc: "/drawings/pressure-drawing.jpeg",  tags:["character"] },
{ loc: "/drawings/realhorse-dark.jpeg",  tags:["character"] },
{ loc: "/drawings/rino_1.jpg",  tags:["character"] },
{ loc: "/drawings/robo_1.jpg",  tags:["character"] },
{ loc: "/drawings/roosterman.jpeg",  tags:["character"] },
{ loc: "/drawings/spidey.jpg",  tags:["character"] },
{ loc: "/drawings/vexx type doodle_1.jpg",  tags:["character"] },
{ loc: "/drawings/vishnu_1.jpg",  tags:["character"] },
{ loc: "/drawings/widow.jpg",  tags:["character"] },



{ loc: "/drawings/alone in home_1.jpg" , tags: ["illustration"] },
{ loc: "/drawings/bear-drawing.jpeg" , tags: ["illustration"] },
{ loc: "/drawings/harry Potter_1.jpg" , tags: ["illustration"] },
{ loc: "/drawings/knot.jpeg" , tags: ["illustration"] },
{ loc: "/drawings/kush-over-fire.jpg" , tags: ["illustration"] },
{ loc: "/drawings/pirate ship_rotated.jpg" , tags: ["illustration"] },
{ loc: "/drawings/pumkin.jpg" , tags: ["illustration"] },
{ loc: "/drawings/rabits vs me_1.jpg" , tags: ["illustration"] },
{ loc: "/drawings/rise and shine_1.jpg" , tags: ["illustration"] },
{ loc: "/drawings/shang chi_1.jpg" , tags: ["illustration"] },
{ loc: "/drawings/strawberrydrawing.jpeg" , tags: ["illustration"] },
{ loc: "/drawings/Turtle-panel1.jpeg" , tags: ["illustration"] },
{ loc: "/drawings/turtlepickingdk.jpeg" , tags: ["illustration"] },
{ loc: "/drawings/wokeupturtle.jpeg" , tags: ["illustration"] },



{ loc: "/drawings/cap.jpg" , tags: ["coloured"] },
{ loc: "/drawings/chrismas.jpg" , tags: ["coloured"] },
{ loc: "/drawings/ganesh.png" , tags: ["coloured"] },
{ loc: "/drawings/hawkeye.jpg" , tags: ["coloured"] },
{ loc: "/drawings/old man faces_1.jpg" , tags: ["coloured"] },
{ loc: "/drawings/painting-hay-scene.jpg" , tags: ["coloured"] },
{ loc: "/drawings/painting-monkey-sunset.jpg" , tags: ["coloured"] },
{ loc: "/drawings/rise and shine_1.jpg" , tags: ["coloured"] },
{ loc: "/drawings/spidey.jpg" , tags: ["coloured"] },
{ loc: "/drawings/widow.jpg" , tags: ["coloured"] },


{ loc: "/drawings/painting-hay-scene.jpg" , tags: ["paintings"] },
{ loc: "/drawings/painting-monkey-sunset.jpg" , tags: ["paintings"] }
]

function loadPhotos(category){

    drawings.forEach( item =>{
        // console.log(item.loc);
        if(category === 'all' || item.tags.includes(category)) {
        paint(item);
        }
    })
}

function paint(item){
    var gallery = document.getElementById('gallery-wrapper');
     var card =  document.createElement('div');
     var cardItem = document.createElement('img');
     cardItem.src = item.loc ; 
     cardItem.classList.add('drawings', 'click-items');

//     card.appendChild(cardItem);
     gallery.appendChild(cardItem);
}

// loadPhotos();