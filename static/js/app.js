/* ======================================================
                    MOVIEVERSE AI V2
====================================================== */

document.addEventListener("DOMContentLoaded",()=>{

const form=document.getElementById("movieForm");
const input=document.getElementById("movieInput");
const suggestions=document.getElementById("suggestions");

let movieTitles=[];
const grid=document.getElementById("movie-grid");
const glow=document.querySelector(".cursor-glow");

/* ================= Mouse Glow ================= */

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

}

});

/* ================= Floating Cards ================= */

document.querySelectorAll(".movie-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=-(y-rect.height/2)/18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ================= Search ================= */

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const movie=input.value.trim();

if(movie==="") return;

/* Loading */

grid.innerHTML = `

<div class="loading-card">

    <div class="loader"></div>

    <h2>🤖 AI is Thinking...</h2>

    <p>Finding the best movies for you...</p>

</div>

`;

try{

const res=await fetch("/recommend",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

movie:movie

})

});

const data=await res.json();

grid.innerHTML="";
grid.style.opacity = "0";

setTimeout(() => {

    grid.style.opacity = "1";

}, 100);

if(data.length===0){

grid.innerHTML=`

<div class="empty-state">

<h2>

Movie Not Found

</h2>

<p>

Try another movie.

</p>

</div>

`;

return;

}

data.forEach(movie=>{
    const favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

const isFavorite =
favorites.includes(movie.title);

grid.innerHTML+=`

<div class="movie-card">

<div class="card-top">


<div class="movie-icon">

🎬

</div>

<div class="match-score">

${movie.confidence}% Match

</div>

<div class="match-bar">

    <div class="match-fill"

        style="width:${movie.confidence}%">

    </div>

</div>

</div>

<h3>${movie.title}</h3>



<div class="genre">

🎭 ${movie.genres}

</div>

<p class="overview">

${movie.overview}

</p>

<div class="card-bottom">

<button class="ai-btn">

🤖 AI Recommended

</button>

</div>

</div>

`;

});

/* Scroll */

const section = document.getElementById("recommend");

window.scrollTo({

top: section.offsetTop - 100,

behavior: "smooth"

});

}

catch{

grid.innerHTML=`

<div class="empty-state">

<h2>

Something went wrong

</h2>

<p>

Please try again.

</p>

</div>

`;

}

});

}

/* ================= Scroll Reveal ================= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

document.querySelectorAll(

".feature-card,.process-card,.tech-card,.movie-card"

).forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(60px)";
el.style.transition=".8s ease";

observer.observe(el);

});

/* ================= Counter ================= */

document.querySelectorAll(".counter").forEach(counter=>{

const target=parseInt(counter.dataset.target);

if(isNaN(target)) return;

let current=0;

const speed=target/120;

const update=()=>{

current+=speed;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

});

});
/* ================= AUTOCOMPLETE ================= */

fetch("/movies")

.then(res => res.json())

.then(data => {

movieTitles = data;

});

input.addEventListener("input",()=>{

const value=input.value.toLowerCase().trim();

suggestions.innerHTML="";

if(value===""){

suggestions.style.display="none";

return;

}

const filtered=movieTitles

.filter(movie=>movie.toLowerCase().includes(value))

.slice(0,8);

filtered.forEach(movie=>{

const div=document.createElement("div");

div.className="suggestion-item";

div.innerText=movie;

div.onclick=()=>{

input.value=movie;

suggestions.style.display="none";

};

suggestions.appendChild(div);

});

suggestions.style.display=

filtered.length ? "block" : "none";

});

document.addEventListener("click",(e)=>{

if(!e.target.closest(".search-box")){

suggestions.style.display="none";

}

});


/* ================= THEME ================= */

const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});