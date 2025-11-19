window.addEventListener("scroll",()=>{
    const scroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight-window.innerHeight;
    const pourcentage = (scroll /scrollHeight) * 100;

document.documentElement.style.setProperty("--scroll", pourcentage * 3.6);
});