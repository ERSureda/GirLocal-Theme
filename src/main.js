function openSidebar() {
    document.getElementById("sidebar").style.width = "270px";
    document.getElementById("opacity").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("opacity").style.display = "none";
}

$('input').on('change', function() {
    $('body').toggleClass('blue');
});
