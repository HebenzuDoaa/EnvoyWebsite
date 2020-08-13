var index = 1;

document.getElementById("prev").addEventListener("click", function () {
    if (index != 1) {
        index -= 1;
    } else {
        index = 28;
    }
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";
    updateGroup();
    updateSub();
    updateName();
    updateYear();
    document.getElementById("cards").selectedIndex = index - 1;
});
function dropdown(a) {
    index = a + 1;
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";
    updateGroup();
    updateSub();
    updateName();
    updateYear();
};
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       if (index != 1) {
        index -= 1;
    } else {
        index = 28;
    }
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";
    updateGroup();
    updateSub();
    updateName();
    updateYear();
    document.getElementById("cards").selectedIndex = index - 1;
    }
    else if (e.keyCode == '39') {
       // right arrow
       if (index != 28) {
        index += 1;
    } else {
        index = 1;
    }
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";

    updateGroup();
    updateSub();
    updateName();
    updateYear();
    document.getElementById("cards").selectedIndex = index - 1;
    }

};
document.getElementById("next").addEventListener("click", function () {
    if (index != 28) {
        index += 1;
    } else {
        index = 1;
    }
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";

    updateGroup();
    updateSub();
    updateName();
    updateYear();
    document.getElementById("cards").selectedIndex = index - 1;
});
function updateGroup() {
    console.log("index is" + index);
    console.log(index / 9);
    if (index >= 1 && index <= 9) {
        document.getElementById("group").src = "Groups/muse.png";
    }

    if (index >= 10 && index <= 18) {
        document.getElementById("group").src = "Groups/aqours.png";
    }

    if (index >= 19 && index <= 28) {
        document.getElementById("group").src = "Groups/nijigaku.png";
    }

}
function updateYear(){
    if(index==5||index==6||index==8||index==15||index==16||index==18||index==20||index==21||index==27||index==28){
        document.getElementById("years").src = "Years/1.png";
    }
    if(index==1||index==3||index==4||index==10||index==11||index==14||index==19||index==23||index==25){
        document.getElementById("years").src = "Years/2.png";
    }
    if(index==2||index==7||index==9||index==12||index==13||index==17||index==22||index==24||index==26){
        document.getElementById("years").src = "Years/3.png";
    }
}
function updateSub() {
    if (index == 1 || index == 3 || index == 8) {
        document.getElementById("subunit").src = "Subunits/printemps.png";
    }
    if (index == 2 || index == 6 || index == 9) {
        document.getElementById("subunit").src = "Subunits/bibi.png";
    }
    if (index == 4 || index == 5 || index == 7) {
        document.getElementById("subunit").src = "Subunits/lilywhite.png";
    }
    if (index == 10 || index == 14 || index == 18) {
        document.getElementById("subunit").src = "Subunits/cyaron.png";
    }
    if (index == 11 || index == 15 || index == 17) {
        document.getElementById("subunit").src = "Subunits/guiltykiss.png";
    }
    if (index == 12 || index == 13 || index == 16) {
        document.getElementById("subunit").src = "Subunits/azalea.png";
    }
    if (index == 19 || index == 21 || index == 25) {
        document.getElementById("subunit").src = "Subunits/azuna.png";
    }
    if (index == 20 || index == 24 || index == 26 || index == 27) {
        document.getElementById("subunit").src = "Subunits/quartz.png";
    }
    if (index == 22 || index == 23) {
        document.getElementById("subunit").src = "Subunits/diverdiva.png";
    }
    if (index == 28) {
        document.getElementById("subunit").src = "";
    }

}

function updateName() {
    var all = document.getElementsByClassName('head');

    switch (index) {
        case 1:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E2732D";
            }
            document.getElementById("name").innerHTML = "Honoka Kousaka";
            document.getElementById("icon").src = "Icons/honoka.png";
            break;
        case 2:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#36B3DD ";
            }
            document.getElementById("name").innerHTML = "Eli Ayase";
            document.getElementById("icon").src = "Icons/eli.png";
            break;
        case 3:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#8C9395 ";
            }
            document.getElementById("name").innerHTML = "Kotori Minami";
            document.getElementById("icon").src = "Icons/kotori.png";
            break;
        case 4:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#1660A5 ";
            }
            document.getElementById("name").innerHTML = "Umi Sonoda";
            document.getElementById("icon").src = "Icons/umi.png";
            break;
        case 5:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F1C51F ";
            }
            document.getElementById("name").innerHTML = "Rin Hoshizora";
            document.getElementById("icon").src = "Icons/rin.png";
            break;
        case 6:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#CC3554 ";
            }
            document.getElementById("name").innerHTML = "Maki Nishikino";
            document.getElementById("icon").src = "Icons/maki.png";
            break;
        case 7:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#744791 ";
            }
            document.getElementById("name").innerHTML = "Nozomi Toujou";
            document.getElementById("icon").src = "Icons/nozomi.png";
            break;
        case 8:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#54AB48 ";
            }
            document.getElementById("name").innerHTML = "Hanayo Koizumi";
            document.getElementById("icon").src = "Icons/hanayo.png";
            break;
        case 9:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#D54E8D ";
            }
            document.getElementById("name").innerHTML = "Nico Yazawa";
            document.getElementById("icon").src = "Icons/nico.png";
            break;
        case 10:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F0A20B ";
            }
            document.getElementById("name").innerHTML = "Chika Takami";
            document.getElementById("icon").src = "Icons/chika.png";
            break;
        case 11:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E9A9E8 ";
            }
            document.getElementById("name").innerHTML = "Riko Sakurauchi";
            document.getElementById("icon").src = "Icons/riko.png";
            break;
        case 12:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#13E8AE ";
            }
            document.getElementById("name").innerHTML = "Kanan Matsuura";
            document.getElementById("icon").src = "Icons/kanan.png";
            break;
        case 13:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F23B4C ";
            }
            document.getElementById("name").innerHTML = "Dia Kurosawa";
            document.getElementById("icon").src = "Icons/dia.png";
            break;
        case 14:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#49B9F9 ";
            }
            document.getElementById("name").innerHTML = "You Watanabe";
            document.getElementById("icon").src = "Icons/you.png";
            break;
        case 15:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#898989 ";
            }
            document.getElementById("name").innerHTML = "<del>Yoshiko</del> Yohane Tsushima";
            document.getElementById("icon").src = "Icons/yoshiko.png";
            break;
        case 16:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E6D617 ";
            }
            document.getElementById("name").innerHTML = "Hanamaru Kunikida";
            document.getElementById("icon").src = "Icons/hanamaru.png";
            break;
        case 17:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#AE58EB ";
            }
            document.getElementById("name").innerHTML = "Mari Ohara";
            document.getElementById("icon").src = "Icons/mari.png";
            break;
        case 18:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#FB75E4 ";
            }
            document.getElementById("name").innerHTML = "Ruby Kurosawa";
            document.getElementById("icon").src = "Icons/ruby.png";
            break;
        case 19:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#EE879D ";
            }
            document.getElementById("name").innerHTML = "Ayumu Uehara";
            document.getElementById("icon").src = "Icons/ayumu.png";
            break;
        case 20:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#FFE41C ";
            }
            document.getElementById("name").innerHTML = "Kasumi Nakasu";
            document.getElementById("icon").src = "Icons/kasumi.png";
            break;
        case 20:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#73C9F3 ";
            }
            document.getElementById("name").innerHTML = "Shizuku Osaka";
            document.getElementById("icon").src = "Icons/shizuku.png";
            break;
        case 21:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#73C9F3 ";
            }
            document.getElementById("name").innerHTML = "Shizuku Osaka";
            document.getElementById("icon").src = "Icons/shizuku.png";
            break;
        case 22:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#565EA9 ";
            }
            document.getElementById("name").innerHTML = "Karin Asaka";
            document.getElementById("icon").src = "Icons/karin.png";
            break;
        case 23:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F18F3D ";
            }
            document.getElementById("name").innerHTML = "Ai Miyashita";
            document.getElementById("icon").src = "Icons/ruby.png";
            break;
        case 24:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#B44E8F ";
            }
            document.getElementById("name").innerHTML = "Kanata Konoe";
            document.getElementById("icon").src = "Icons/kanata.png";
            break;
        case 25:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E94C53 ";
            }
            document.getElementById("name").innerHTML = "Setsuna Yuki";
            document.getElementById("icon").src = "Icons/setsuna.png";
            break;
        case 26:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#8EC225 ";
            }
            document.getElementById("name").innerHTML = "Emma Verde";
            document.getElementById("icon").src = "Icons/emma.png";
            break;
        case 27:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#9AA3AA ";
            }
            document.getElementById("name").innerHTML = "Rina Tennoji";
            document.getElementById("icon").src = "Icons/rina.png";
            break;
        case 28:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#24BD8B ";
            }
            document.getElementById("name").innerHTML = "Shioriko Mifune";
            document.getElementById("icon").src = "Icons/shioriko.png";
            break;

    }
}