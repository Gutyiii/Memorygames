var kep1 = {
    eleresiUt: "kepek/kep1.jpg",
    alt: "husky",
};
var kep2 = {
    eleresiUt: "kepek/kep2.jpg",
    alt: "nemetjuhasz",
};
var kep3 = {
    eleresiUt: "kepek/kep3.jpg",
    alt: "labrador",
};
var kep4 = {
    eleresiUt: "kepek/kep4.jpg",
    alt: "bordercollie",
};
var kep5 = {
    eleresiUt: "kepek/kep5.jpg",
    alt: "goldenretriver",
};
var kep6 = {
    eleresiUt: "kepek/kep6.jpg",
    alt: "akita",
};
var kep7 = {
    eleresiUt: "kepek/kep1.jpg",
    alt: "husky",
};
var kep8 = {
    eleresiUt: "kepek/kep2.jpg",
    alt: "nemetjuhasz",
};
var kep9 = {
    eleresiUt: "kepek/kep3.jpg",
    alt: "labrador",
};
var kep10 = {
    eleresiUt: "kepek/kep4.jpg",
    alt: "bordercollie",
};
var kep11 = {
    eleresiUt: "kepek/kep5.jpg",
    alt: "goldenretriver",
};
var kep12 = {
    eleresiUt: "kepek/kep6.jpg",
    alt: "akita",
};
var hatlap = {
    eleresiUt: "kepek/hatlap2.png",
    alt: "hatlap"
};

var kepek = [kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10, kep11, kep12];

var tomb = [];
var elso = true;
var elozo;
var alap;
var pontok = 0;
var lepesSzamlalo = 0;

$(function () {
    kezdAlap();
    kezd();
    $("button").click(kezd);
});

function kezdAlap() {
    $("section").eq(0).html(" ");
    for (var i = 0; i < 12; i++) {
        $("section").eq(0).append("<img id=" + i + ">");
    }

    for (var i = 0; i < kepek.length; i++) {
        $("section img").eq(i).attr("src", kepek[i].eleresiUt);
        $("section img").eq(i).attr("alt", kepek[i].alt);
    }
}

function kezd() {
    if (pontok === 6) {
        $("article h1").remove();
        $("article img").remove();
    }
    for (var i = 0; i < kepek.length; i++) {
        $("#jatekter img").eq(i).attr("src", hatlap.eleresiUt);
        $("#jatekter img").eq(i).click(ellenoriz);
    }
    kever();
}

function kever() {
    pontok = 0;
    elso = true;
    lepesSzamlalo = 0;
    kepek.sort(function () {
        return 0.5 - Math.random();
    });
}

function fordit(id) {
    $("section img").eq(id).attr("src", kepek[id].eleresiUt);
    $("section img").eq(id).unbind("click");
    if (elso) {
        elozo = id;
        elso = false;
    } else {
        elso = true;
        alap = id;
    }
}

function ellenoriz() {
    fordit($(this).attr("id"));
    console.log("lepes");
    lepesSzamlalo++;
    if (lepesSzamlalo % 2 === 0) {
        if ($("section img").eq(elozo).attr("src") === $("section img").eq(alap).attr("src")) {
            pontok++;
            if (pontok === 6) {
//                alert("NYERTÉL GRATULÁLOK");
//                $("section img").fadeOut(3000);
                $("article").append("<h1 style=\"text-align: center;\"> NYERTÉL </h1>");
                $("article").append("<img src=\"kepek/kutyuliii.png\" alt=\"Nyertes kutya\">");
            }
        } else {
            visszaFordit(alap, elozo);
        }
    }
}

function visszaFordit(id1, id2) {
    setTimeout(
            function idozites(id1, id2) {
                $("section img").eq(id1).attr("src", hatlap.eleresiUt);
                $("section img").eq(id2).attr("src", hatlap.eleresiUt);
                $("section img").eq(id1).click(ellenoriz);//vissza állítja a kattintás érzékelőjét
                $("section img").eq(id2).click(ellenoriz);
            }, 1000, id1, id2);
}