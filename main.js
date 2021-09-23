var reasons = [
    "Dad",
    "Mom",
    "Sister",
    "Brother"
  ];
  
  var images = [
    "https://cdn1.vectorstock.com/i/1000x1000/76/80/cartoon-dad-vector-10157680.jpg",
    "https://freepikpsd.com/media/2019/10/mom-clipart-png-3.png",
    "https://thumbs.dreamstime.com/b/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg",
    "https://i.pinimg.com/originals/17/3d/14/173d14f61886d832daf99d9b2d0ab8ae.jpg"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  