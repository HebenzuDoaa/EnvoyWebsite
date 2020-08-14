var index = document.getElementById("cards").selectedIndex + 1;
update();

function secretName() {
    switch (index) {
        case 1:
            document.getElementById("name").innerHTML = "Honk";
            break;
        case 2:
            document.getElementById("name").innerHTML = "Elichika";
            break;
        case 9:
            document.getElementById("name").innerHTML = "NICO NICO NII!";
            break;
        case 14:
            document.getElementById("name").innerHTML = "『ヨーソロー！』";
            break;
        case 15:
            document.getElementById("name").innerHTML = "Yohane";
            break;
        case 16:
            document.getElementById("name").innerHTML = "Zuramaru";
            break;
        case 18:
            document.getElementById("name").innerHTML = "がんばルビィ!";
            break;
        case 20:
            document.getElementById("name").innerHTML = "Kasukasu";
            break;
    }
}

document.getElementById("prev").addEventListener("click", function () {
    var all;



    if (index != 1) {
        index -= 1;
    } else {
        index = 28;
    }
    update();

});
function dropdown(a) {
    index = a + 1;
    update();
};
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        index -= 9;
        index = (index % 28);
        if (index < 1) {
            index += 28;
        }
        update();
    }
    else if (e.keyCode == '40') {
        // down arrow
        index += 9;
        index = index % 28;
        update();
    }
    else if (e.keyCode == '37') {
        // left arrow
        if (index != 1) {
            index -= 1;
        } else {
            index = 28;
        }
        update();
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (index != 28) {
            index += 1;
        } else {
            index = 1;
        }
        update();
    }

};
document.getElementById("next").addEventListener("click", function () {
    if (index != 28) {
        index += 1;
    } else {
        index = 1;
    }
    update();
});

function update() {
    document.getElementById("initial").src = "Cards/" + 4 * index + ".png";
    document.getElementById("idolized").src = "Cards/" + 4 * index + "_t.png";

    updateGroup();
    updateSub();
    updateName();
    updateYear();
    document.getElementById("cards").selectedIndex = index - 1;
}

function updateGroup() {
    console.log("index is" + index);
    console.log(index / 9);
    var all;

    if (index >= 1 && index <= 9) {
        document.getElementById("glink").href = "https://love-live.fandom.com/wiki/Muse";
        document.getElementById("group").src = "Groups/muse.png";
       
    }

    if (index >= 10 && index <= 18) {
        document.getElementById("glink").href = "https://love-live.fandom.com/wiki/Aqours";
        document.getElementById("group").src = "Groups/aqours.png";
        
    }

    if (index >= 19 && index <= 28) {
        document.getElementById("group").src = "Groups/nijigaku.png";
        document.getElementById("glink").href = "https://love-live.fandom.com/wiki/https://love-live.fandom.com/wiki/Nijigasaki_High_School_Idol_Club";
        

    }

}

function updateYear() {
    if (index == 5 || index == 6 || index == 8 || index == 15 || index == 16 || index == 18 || index == 20 || index == 21 || index == 27 || index == 28) {
        document.getElementById("years").src = "Years/1.png";
    }
    if (index == 1 || index == 3 || index == 4 || index == 10 || index == 11 || index == 14 || index == 19 || index == 23 || index == 25) {
        document.getElementById("years").src = "Years/2.png";
    }
    if (index == 2 || index == 7 || index == 9 || index == 12 || index == 13 || index == 17 || index == 22 || index == 24 || index == 26) {
        document.getElementById("years").src = "Years/3.png";
    }
}
function updateSub() {
    if (index == 1 || index == 3 || index == 8) {
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/Printemps";
        document.getElementById("subunit").src = "Subunits/printemps.png";
    }
    if (index == 2 || index == 6 || index == 9) {
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/BiBi";
        document.getElementById("subunit").src = "Subunits/bibi.png";
    }
    if (index == 4 || index == 5 || index == 7) {
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/Lily_white";
        document.getElementById("subunit").src = "Subunits/lilywhite.png";
    }
    if (index == 10 || index == 14 || index == 18) {

        document.getElementById("subunit").src = "Subunits/cyaron.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/CYaRon!";
    }
    if (index == 11 || index == 15 || index == 17) {
        document.getElementById("subunit").src = "Subunits/guiltykiss.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/Guilty_Kiss";
    }
    if (index == 12 || index == 13 || index == 16) {
        document.getElementById("subunit").src = "Subunits/azalea.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/AZALEA";
    }
    if (index == 19 || index == 21 || index == 25) {
        document.getElementById("subunit").src = "Subunits/azuna.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/A・ZU・NA";
    }
    if (index == 20 || index == 24 || index == 26 || index == 27) {
        document.getElementById("subunit").src = "Subunits/quartz.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/QU4RTZ";
    }
    if (index == 22 || index == 23) {
        document.getElementById("subunit").src = "Subunits/diverdiva.png";
        document.getElementById("slink").href = "https://love-live.fandom.com/wiki/DiverDiva";
    }
    if (index == 28) {
        document.getElementById("subunit").src = "";
        document.getElementById("slink").href = "";
    }

}

function updateName() {
    var all = document.getElementsByClassName('head');

    switch (index) {
        case 1:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E2732D";
            }
            document.getElementById("name").innerHTML = "Honoka Kosaka";
            document.getElementById("icon").src = "Icons/honoka.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Honoka_Kosaka";
            document.getElementById("initial").title = "FAITO DAYO!";
            document.getElementById("idolized").title = "KYOU MO PAN GA UMAI!";
            document.getElementById("name").title = "";

            break;
        case 2:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#36B3DD ";
            }
            document.getElementById("name").innerHTML = "Eli Ayase";
            document.getElementById("icon").src = "Icons/eli.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Eli_Ayase";
            document.getElementById("initial").title = "KASHIKOI KAWAII?";
            document.getElementById("idolized").title = "ELICHIKA!";
            document.getElementById("name").title = "Elichika";
            document.getElementById("name").className = "eli; head";
            break;
        case 3:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#8C9395 ";
            }
            document.getElementById("name").innerHTML = "Kotori Minami";
            document.getElementById("icon").src = "Icons/kotori.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Kotori_Minami";
            document.getElementById("initial").title = "KOTORI NO OYATSU NI SHICHAU YO!";
            document.getElementById("idolized").title = "CHUN CHUN~";
            document.getElementById("name").title = "";
            break;
        case 4:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#1660A5 ";
            }
            document.getElementById("name").innerHTML = "Umi Sonoda";
            document.getElementById("icon").src = "Icons/umi.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Umi_Sonoda";
            document.getElementById("initial").title = "LOVE ARROW...";
            document.getElementById("idolized").title = "SHOOT!";
            document.getElementById("name").title = "";
            break;
        case 5:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F1C51F ";
            }
            document.getElementById("name").innerHTML = "Rin Hoshizora";
            document.getElementById("icon").src = "Icons/rin.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Rin_Hoshizora";
            document.getElementById("initial").title = "RIN-CHAN TO IEBA?";
            document.getElementById("idolized").title = "YELLOW DAYO!";
            document.getElementById("name").title = "";
            break;
        case 6:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#CC3554 ";
            }
            document.getElementById("name").innerHTML = "Maki Nishikino";
            document.getElementById("icon").src = "Icons/maki.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Maki_Nishikino";
            document.getElementById("initial").title = "MAKI-CHAN KAWAII?";
            document.getElementById("idolized").title = "KA KI KU KE KO!";
            document.getElementById("name").title = "";
            break;
        case 7:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#744791 ";
            }
            document.getElementById("name").innerHTML = "Nozomi Tojo";
            document.getElementById("icon").src = "Icons/nozomi.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Nozomi_Tojo";
            document.getElementById("initial").title = "NOZOMI POWER TAPPURI CHUUNYUU! HAI, PUUSHUU!";
            document.getElementById("idolized").title = "ITADAKIMASHITA!";
            document.getElementById("name").title = "";
            break;
        case 8:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#54AB48 ";
            }
            document.getElementById("name").innerHTML = "Hanayo Koizumi";
            document.getElementById("icon").src = "Icons/hanayo.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Hanayo_Koizumi";
            document.getElementById("initial").title = "DAREKA TASUKETE!";
            document.getElementById("idolized").title = "CHOTTO MATTETE!";
            document.getElementById("name").title = "";
            break;
        case 9:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#D54E8D ";
            }
            document.getElementById("name").innerHTML = "Nico Yazawa";
            document.getElementById("icon").src = "Icons/nico.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Nico_Yazawa";
            document.getElementById("initial").title = "NICO NICO NII! DAI GINGA UCHUU?";
            document.getElementById("idolized").title = "NUMBER ONE!";
            document.getElementById("name").title = "";
            document.getElementById("name").className = "nico; head";
            break;
        case 10:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F0A20B ";
            }
            document.getElementById("name").innerHTML = "Chika Takami";
            document.getElementById("icon").src = "Icons/chika.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Chika_Takami";
            document.getElementById("initial").title = "KAN KAN!";
            document.getElementById("idolized").title = "MIKAN!";
            document.getElementById("name").title = "";
            break;
        case 11:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E9A9E8 ";
            }
            document.getElementById("name").innerHTML = "Riko Sakurauchi";
            document.getElementById("icon").src = "Icons/riko.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Riko_Sakurauchi";
            document.getElementById("initial").title = "BIICHI SUKECCHI?";
            document.getElementById("idolized").title = "SAKURAUCHI!";
            document.getElementById("name").title = "";
            break;
        case 12:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#13E8AE ";
            }
            document.getElementById("name").innerHTML = "Kanan Matsuura";
            document.getElementById("icon").src = "Icons/kanan.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Kanan_Matsuura";
            document.getElementById("initial").title = "GOKIGEN IKAGA KANAN?";
            document.getElementById("idolized").title = "DAIBU II KANJI!";
            document.getElementById("name").title = "";
            break;
        case 13:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F23B4C ";
            }
            document.getElementById("name").innerHTML = "Dia Kurosawa";
            document.getElementById("icon").src = "Icons/dia.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Dia_Kurosawa";
            document.getElementById("initial").title = "DIA-HO~!";
            document.getElementById("idolized").title = "BUU BUU DESU WA!";
            document.getElementById("name").title = "";
            break;
        case 14:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#49B9F9 ";
            }
            document.getElementById("name").innerHTML = "You Watanabe";
            document.getElementById("icon").src = "Icons/you.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/You_Watanabe";
            document.getElementById("initial").title = "ZENSOKU ZENSHIN...";
            document.getElementById("idolized").title = "YOUSORO!";
            document.getElementById("name").title = "";
            document.getElementById("name").className = "you; head";
            break;
        case 15:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#898989 ";
            }
            document.getElementById("name").innerHTML = "Yoshiko Tsushima";
            document.getElementById("icon").src = "Icons/yoshiko.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Yoshiko_Tsushima";
            document.getElementById("initial").title = "OHAYOHANE!";
            document.getElementById("idolized").title = "OHAYOSHIKO!";
            document.getElementById("name").title = "Yohane";
            document.getElementById("name").className = "yoshiko; head";

            break;
        case 16:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E6D617 ";
            }
            document.getElementById("name").innerHTML = "Hanamaru Kunikida";
            document.getElementById("icon").src = "Icons/hanamaru.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Hanamaru_Kunikida";
            document.getElementById("initial").title = "OHANA~";
            document.getElementById("idolized").title = "MARU!";
            document.getElementById("name").title = "Zuramaru";
            document.getElementById("name").className = "maru; head";
            break;
        case 17:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#AE58EB ";
            }
            document.getElementById("name").innerHTML = "Mari Ohara";
            document.getElementById("icon").src = "Icons/mari.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Mari_Ohara";
            document.getElementById("initial").title = "SHINY~!";
            document.getElementById("idolized").title = "SHINY~!";
            document.getElementById("name").title = "";
            break;
        case 18:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#FB75E4 ";
            }
            document.getElementById("name").innerHTML = "Ruby Kurosawa";
            document.getElementById("icon").src = "Icons/ruby.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Ruby_Kurosawa";
            document.getElementById("initial").title = "MINNA-SAN GO ISSHO NI...";
            document.getElementById("idolized").title = "GANBARUBY!";
            document.getElementById("name").title = "";
            break;
        case 19:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#EE879D ";
            }
            document.getElementById("name").innerHTML = "Ayumu Uehara";
            document.getElementById("icon").src = "Icons/ayumu.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Ayumu_Uehara";
            document.getElementById("initial").title = "CHIKYUU NO MINNA, TADAIMA!";
            document.getElementById("idolized").title = "OKAERI!";
            document.getElementById("name").title = "";
            break;
        case 20:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#FFE41C ";
            }
            document.getElementById("name").innerHTML = "Kasumi Nakasu";
            document.getElementById("icon").src = "Icons/kasumi.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Kasumi_Nakasu";
            document.getElementById("initial").title = "MINNA NO PRINCESS KASUMIN DESU!";
            document.getElementById("idolized").title = "KASUKASU!";
            document.getElementById("name").title = "KASUKASU!";
            document.getElementById("name").className = "kasumi; head";
            break;

        case 21:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#73C9F3 ";
            }
            document.getElementById("name").innerHTML = "Shizuku Osaka";
            document.getElementById("icon").src = "Icons/shizuku.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Shizuku_Osaka";
            document.getElementById("initial").title = "JINSEI KUDARIZAKA, NOBORIZAKA, DEMO YAPPARI?";
            document.getElementById("idolized").title = "OSAKA";
            document.getElementById("name").title = "";
            break;
        case 22:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#565EA9 ";
            }
            document.getElementById("name").innerHTML = "Karin Asaka";
            document.getElementById("icon").src = "Icons/karin.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Karin_Asaka";
            document.getElementById("initial").title = "WATASHI SHIKA MIETEINAI NO WA...?";
            document.getElementById("idolized").title = "KARIN-SENPAI!";
            document.getElementById("name").title = "";
            break;
        case 23:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#F18F3D ";
            }
            document.getElementById("name").innerHTML = "Ai Miyashita";
            document.getElementById("icon").src = "Icons/ai.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Ai_Miyashita";
            document.getElementById("initial").title = "AI-TOMO NO MINNA! AISHITERU YO!";
            document.getElementById("idolized").title = "ORE MO!";
            document.getElementById("name").title = "";
            break;
        case 24:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#B44E8F ";
            }
            document.getElementById("name").innerHTML = "Kanata Konoe";
            document.getElementById("icon").src = "Icons/kanata.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Kanata_Konoe";
            document.getElementById("initial").title = "KANATA-CHAN, OKITE!";
            document.getElementById("idolized").title = "KOKO WA DOKO?";
            document.getElementById("name").title = "";
            break;
        case 25:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#E94C53 ";
            }
            document.getElementById("name").innerHTML = "Setsuna Yuki";
            document.getElementById("icon").src = "Icons/setsuna.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Setsuna_Yuki";
            document.getElementById("initial").title = "SETSUNA SCARLET STORM!";
            document.getElementById("idolized").title = "WOO!";
            document.getElementById("name").title = "";
            break;
        case 26:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#8EC225 ";
            }
            document.getElementById("name").innerHTML = "Emma Verde";
            document.getElementById("icon").src = "Icons/emma.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Emma_Verde";
            document.getElementById("initial").title = "EMERGENCY! OTSUKARE NO KATA WA IMASEN KA?";
            document.getElementById("idolized").title = "HAI!";
            document.getElementById("name").title = "";
            break;
        case 27:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#9AA3AA ";
            }
            document.getElementById("name").innerHTML = "Rina Tennoji";
            document.getElementById("icon").src = "Icons/rina.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Rina_Tennoji";
            document.getElementById("initial").title = "HAZUKASHIKUTE NANI ITTE II KA WAKARANAI...";
            document.getElementById("idolized").title = "TENSHI TENSAI TENNOJI!";
            document.getElementById("name").title = "";
            break;
        case 28:
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = "#24BD8B ";
            }
            document.getElementById("name").innerHTML = "Shioriko Mifune";
            document.getElementById("icon").src = "Icons/shioriko.png";
            document.getElementById("link").href = "https://love-live.fandom.com/wiki/Shioriko_Mifune";
            document.getElementById("initial").title = "";
            document.getElementById("idolized").title = "";
            document.getElementById("name").title = "";
            break;

    }
}