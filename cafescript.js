function anasayfa() {
    location.reload();
    toggleDropdown()
    dropdownbtn()
}

function kahvelerdiv() {
    document.getElementById('coffees').scrollIntoView({ behavior: 'smooth' });
    toggleDropdown()
    dropdownbtn()
}

function hakkındadiv() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    toggleDropdown()
    dropdownbtn()
}

function iletisim() {
    document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' });
    toggleDropdown()
    dropdownbtn()
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

function dropdownbtn() {
    var dropdown = document.getElementById("dropbtn");
    dropdown.classList.toggle("animation");
}
