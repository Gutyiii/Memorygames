var kep1={
    eleresiUt:"kepek/kep1.jpg",
    alt:"husky"
}
var kep2={
    eleresiUt:"kepek/kep2.jpg",
    alt:"nemetjuhasz"
}
var kep3={
    eleresiUt:"kepek/kep3.jpg",
    alt:"labrador"
}
var kep4={
    eleresiUt:"kepek/kep4.jpg",
    alt:"bordercollie"
}
var kep5={
    eleresiUt:"kepek/kep5.jpg",
    alt:"goldenretriver"
}
var kep6={
    eleresiUt:"kepek/kep6.jpg",
    alt:"akita"
}

var hatlap={
    eleresiUt:"kepek/hatlap2.0.jpg",
    alt:"hatlap"
}

kepek = [kep1,kep2,kep3,kep4,kep5,kep6];

$(function () {

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
    var i=0;
    for (var i = 0; i < kepek.length; i++) {
        $("#jatekter img").eq(i).attr("src", kepek[i].eleresiUt);
        $("#jatekter img").eq(i).attr("alt", kepek[i].alt);
        i++;
    }
        
});

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
