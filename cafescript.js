
function dropdown(){
    var drop = document.getElementById("dropdownContent")
    drop.classList.remove('show')
}

function anasayfa() {
    location.reload();
    dropdown()
}

function kahvelerdiv() {
    document.getElementById('coffees').scrollIntoView({ behavior: 'smooth' });
    dropdown()
}

function hakkındadiv() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    dropdown()
}

function iletisim() {
    document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' });
    dropdown()
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

