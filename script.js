






const s1Banner = document.querySelector(".s1-banner");


var prevScrollpos = document.querySelector(".main-container").scrollTop;
document.querySelector(".main-container").onscroll = function () {
 
  var currentScrollPos = document.querySelector(".main-container").scrollTop;

  if (prevScrollpos > currentScrollPos) {
   
    document.querySelector("nav").style.top = "0vh";
  } else {
  
    document.querySelector("nav").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
};


for (var i = 0; i < 7; i++) {
  s1Banner.innerHTML += `<div>
  <img class='s1-banner-img' src="assests/images/s1Banner${i + 1}.png" alt="">
</div>`;
}


gsap.from(".video-container video", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-container video",
    scroller: ".main-container",
    start: "top 0%",
    end: "bottom 70%",
    scrub: 1,
   
  },
});


const s1BannerImg = document.querySelectorAll(".s1-banner-img");

if (window.matchMedia("(max-width: 768px)").matches) {
  
  gsap.to(s1BannerImg, {
  
    opacity: 1,
    bottom: 0,
    stagger: 0.2,
    delay: 0.3,
  });
} else {

  gsap.to(s1BannerImg, {
    opacity: 1,
    bottom: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".s1-banner",
      scroller: ".main-container",
      scrub: 3,
      // //markers: true,
      start: "top 70%",
      end: "bottom 50%",
    },
  });
}


if (window.matchMedia("(max-width: 768px)").matches) {

  gsap.from(".s1-text h1", {
    opacity: 0,
    y: 20,
    delay: 0.5,
  });
} else {

  gsap.from(".s1-text h1", {
    opacity: 0,
    y: 20,
    scrollTrigger: {
    
      trigger: ".s1-text h1",
      scroller: ".main-container",
      scrub: 1,
      start: "top 80%",
      end: "bottom 60%",
    },
  });
}



if (window.matchMedia("(max-width: 768px)").matches) {

  gsap.from(".s1-text p", {
    opacity: 0,
    y: 20,
    delay: 0.7,
  });
} else {
 
  gsap.from(".s1-text p", {
    opacity: 0,
    y: 20,
    scrollTrigger: {
 
      trigger: ".s1-text p",
      scroller: ".main-container",
      scrub: 1,
      start: "top 95%",
      end: "bottom 85%",
    },
  });
}

gsap.from(".s1-text .btn2", {
  opacity: 0,
  y: 20,
  scrollTrigger: {

    trigger: ".s1-text .btn2",
    scroller: ".main-container",
    scrub: 1,
    start: "top 100%",
    end: "bottom 95%",
  },
});

gsap.from(".s2-left div img", {
  opacity: 0,
  rotate: 20,
  x: -200,
  scrollTrigger: {
    trigger: ".s2-left div img",
    scroller: ".main-container",
    scrub: 1,
 
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".s2-right h1", {
  opacity: 0,
  x: 200,

  scrollTrigger: {
    trigger: ".s2-right h1",
    scroller: ".main-container",
    scrub: 1,
  
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".s2-right p", {
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".s2-right p",
    scroller: ".main-container",
    scrub: 1,
    //markers: true,
    start: "top 90%",
    end: "bottom 80%",
  },
});

if (window.matchMedia("(max-width:768px)").matches) {
  gsap.from(".s2-right .btn2", {
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".s2-right .btn2",
      scroller: ".main-container",
      scrub: 1,
      // markers: true,
      start: "top 95%",
      end: "bottom 85%",
    },
  });
} else {
  gsap.from(".s2-right .btn2", {
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".s2-right .btn2",
      scroller: ".main-container",
      scrub: 1,
      //markers: true,
      start: "top 90%",
      end: "bottom 80%",
    },
  });
}
function btn(){

  document.querySelector(".s1-text>button")
  .addEventListener("mouseover",function(dets){
var dim = document.querySelector(".s1-text>button>#grey").getBoundingClientRect()
      document.querySelector(".s1-text>button>#grey").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
  })
  document.querySelector(".s1-text>button")
  .addEventListener("mouseleave",function(dets){
var dim = document.querySelector(".s1-text>button>#grey").getBoundingClientRect()
      document.querySelector(".s1-text>button>#grey").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
  })

  document.querySelector(".s2-right>button")
  .addEventListener("mouseover",function(dets){
var dim = document.querySelector(".s2-right>button>#grey").getBoundingClientRect()
      document.querySelector(".s2-right>button>#grey").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
  })
  document.querySelector(".s2-right>button")
  .addEventListener("mouseleave",function(dets){
var dim = document.querySelector(".s2-right>button>#grey").getBoundingClientRect()
      document.querySelector(".s2-right>button>#grey").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
  })




}
btn()


const s3Top = document.querySelector(".section3 .s3-top");
const s3Bottom = document.querySelector(".section3 .s3-bottom");
for (let i = 1; i < 5; i++) {
  s3Top.innerHTML += `<div class="card">
  <div class="card-title">
    <div>
      <img src="assests/images/Avtar.png" alt="" />
      <p>@artist_101</p>
    </div>
    <div class="filler"></div>
    <button>Rare</button>
  </div>
  <div class="nft">
  <img src="assests/images/NFT${i}.png" alt="">  
  </div>
  <div class="card-bottom">
    <p class="nft-name">SkyDog 409</p>
    <p>#303030</p>
  </div>
</div>`;
}
for (let i = 5; i < 9; i++) {
  s3Bottom.innerHTML += `<div class="card">
  <div class="card-title">
   <div> 
      <img src="assests/images/Avtar.png" alt="" />
        <p>@artist_101</p>
    </div>
    <button>Rare</button>
  </div>
  <div class="nft">
  <img src="assests/images/NFT${i}.png" alt="">  
  </div>
  <div class="card-bottom">
    <p class="nft-name">SkyDog 409</p>
    <p>#303030</p>
  </div>
</div>`;
}

const s3CardsTop = document.querySelectorAll(".section3 .s3-top .card");
const s3CardsBottom = document.querySelectorAll(".section3 .s3-bottom .card");

gsap.from(s3CardsTop, {
  y: 50,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".s3-top",
    scroller: ".main-container",
    scrub: 2,
    
    start: "top 90%",
    end: "bottom 60%",
  },
});

gsap.from(s3CardsBottom, {
  y: 50,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".s3-bottom",
    scroller: ".main-container",
    scrub: 2,
   
    start: "top 90%",
    end: "bottom 60%",
  },
});

const s4TextInnerElements = document.querySelectorAll(".s4-text>*:not(.btn2");

gsap.from(s4TextInnerElements, {
  x: -200,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".s4-text",
    scroller: ".main-container",
    scrub: 1.5,
   
    end: "bottom 30%",
  },
});
gsap.from(".s4-text button", {
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".s4-text button",
    scroller: ".main-container",
    scrub: 2,
    
    start: "top 95%",
    end: "bottom 60%",
  },
});

gsap.from(".s4-banner img", {
  scaleY: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section4",
    scroller: ".main-container",
    scrub: 2,
    
    start: "top 90%",
    end: "bottom 100%",
  },
});





const s6InnerHtml = document.querySelectorAll(".section6 > *:not(div)");
const img6 = document.querySelector(".section6 img");

document.querySelector(".section6").addEventListener("mousemove", (e) => {
  let posX = e.clientX - img6.getBoundingClientRect().left;
  let posY = e.clientY - img6.getBoundingClientRect().top;

  posX = posX < 0 ? Math.max(posX, -100) : Math.min(posX, 100);
  posY = posY < 0 ? Math.max(posY, -100) : Math.min(posY, 100);

  img6.style.transform = `translate(${posX}px, ${posY}px)`;
});

gsap.from(s6InnerHtml, {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section6",
    scroller: ".main-container",
    scrub: 2,
  
    start: "top 60%",
    end: "bottom 70%",
  },
});

gsap.from(".section6 div img", {
  y: 80,
  opacity: 0,
  
  scrollTrigger: {
    trigger: ".section6 div img",
    scroller: ".main-container",
    scrub: 2,
   
    start: "top 90%",
    end: "bottom 100%",
  },
});


const s7InnerHtml = document.querySelectorAll(".section7 > *:not(footer)");
gsap.from(s7InnerHtml, {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section7",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 95%",
    end: "bottom 90%",
  },
});
