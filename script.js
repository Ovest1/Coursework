document.getElementById('menu-button').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('open');
});
document.getElementById('close-menu').addEventListener('click',function(){
    document.getElementById('mobile-menu').classList.remove('open');
})
function catalog(){
    window.location.href = "catalog.html";
}
function about(){
    window.location.href = "about.html";
}
function home(){
    window.location.href = "index.html";
}
function reg(){
    window.location.href = "reg.html";
}