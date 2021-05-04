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
var lepesSzamlalo=0;


$(function () {

    $("button").click(kezd);
    for (var i = 0; i < 12; i++) {
        $("section").eq(0).append("<img id=" + i + ">");
    }
//    $("div").html("Szia Petra");
//    $("div").append("<img>");
//    $("div img").attr("src", "kepek/valami.jpg");
//    $("div img").attr("alt", "valami");
//    $("div img)".eq(0).attr("src", kepek[0].eleresiUt);
//    $("div img)".eq(0).attr("alt", kepek[0].alt);
//    $("div").append("<img>");
//    $("div img").eq(1).attr("src", "kepek/valami masik.jpg");
//    $("div img").eq(1).attr("alt", "sziaaasda13124a");
//    $("div img").eq(1).attr("src", kepek[1].eleresiUt);
//    $("div img").eq(1).attr("alt", kepek[2].alt);
//    $("div img").click(kattintasra);

    //var i=0;
    //var j = 0;
    var kepElemTomb = $("section img");
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).attr("src", kepek[i].eleresiUt);
        kepElemTomb.eq(i).attr("alt", kepek[i].alt);
    }
    
    for (var i = 0; i < kepek.length; i++) {
        $("#jatekter img").eq(i).attr("src", hatlap.eleresiUt);
        $("#jatekter img").eq(i).click(ellenoriz);
//        var katt = 0;
//        if ($("#jatekter img").eq(i).click(fordit)) {
//            katt++;
//            if (katt === 2) {
//                ellenoriz();
//                katt = 0;
//            }
//        }
    }
    kever();

});

function fordit() {
    var index = Number(this.id);
    tomb += index;
//    alert(index);
//    $(this).eq(0).attr("src", kepek[index].eleresiUt);
    if (index >= 6) {
        $(this).eq(0).attr("src", kepek[index - 6].eleresiUt);
    } else {
        $(this).eq(0).attr("src", kepek[index].eleresiUt);
    }
}

function visszaFordit() {

//    for (var i = 0; i < tomb.length; i++) {
//        $(this).eq(i).attr("src", kepek[tomb[i]].hatlap);
//    }

     setTimeout(
            function idozetes(id1,id2) {
                $("section img").eq(id1).attr("src", kep13.eleresiUt);
                $("section img").eq(id2).attr("src", kep13.eleresiUt);
                $("section img").eq(id1).click(ellenoriz);//vissza állítja a kattintás érzékelőjét
                $("section img").eq(id2).click(ellenoriz);
            },500,id1,id2);
}

function kezd() {
    $("section").eq(0).html(" ");
}

function ellenoriz() {
    fordit($(this).attr("id"));
    console.log("lepes");
    lepesSzamlalo++;
    if ($("sective im").eq(elozo).attr("src") === $("secion img").eq(alap).attr("src")) {
        pontok++;
    } else {
        visszaFordit();
    }

    for (var i = 0; i < tomb.length; i++){
        $(this).eq(i).attr("src", kepek[tomb[i]].hatlap);
    }
}

function kezd() {

}

function ellenoriz() {
    if (tomb[0] === tomb[1]) {
        pontok++;
        $("footer").append(pontok);
    } else {
        visszaFordit();
    }
    tomb = [];

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
//    elso = !elso;//ha az elso true volt akkor az első legyen false
    $("section img").eq(id).unbind("click");//leiratkozik a kattintós eseményt az adott id elemekről
    if (elso) {
        elozo = id;
        elso = false;
    } else {
        elso = true;
        alap = id;
    }

}

//var kep1={
//    eleresiUt:"kepek/valami.jpg",
//    alt:"valami"
//};
//var kep2={
//    eleresiUt:"kepek/valami2.jpg",
//    alt:"sziaaasda13124a"
//};

//var kepek = [kep1,kep2];


//function kattintasra() {
//    $(this).attr("src", "kepek/valami.jpg");
//    $(this).attr("alt", "valami");
//}
