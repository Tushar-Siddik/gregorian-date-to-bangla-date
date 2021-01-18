/* Minification failed. Returning unminified contents.
(13,19-20): run-time error JS1195: Expected expression: )
(13,22-23): run-time error JS1195: Expected expression: >
(15,1-2): run-time error JS1002: Syntax error: }
(19,43-44): run-time error JS1195: Expected expression: )
(19,45-46): run-time error JS1004: Expected ';': {
(38,2-3): run-time error JS1195: Expected expression: )
(42,22-23): run-time error JS1004: Expected ';': {
 */
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());
;
//Once the webfont is loaded, update styles to reduce CLS
//-------------------------------------------------------
const font = new FontFaceObserver('SiyamRupali');
font.load().then(() => {
    document.body.classList.add('siyamrupali-loaded');
});

//Defer Load Inline Scripts
//-------------------------
window.addEventListener('load', function () {
    var scripts = document.getElementsByTagName("script");

    for (var i = 0; i < scripts.length; i++) {
        var type = scripts[i].getAttribute("type");
        if (type && type.toLowerCase() === 'text/defer') {
            scripts[i].parentNode.replaceChild((function (delayscript) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.innerHTML = delayscript.innerHTML;

                if (delayscript.src && delayscript.src.length > 0) {
                    script.src = delayscript.src;
                }

                return script;
            })(scripts[i]), scripts[i]);
        }
    }
});

// Nav Menu - Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
//----------------------------------------------------------------------------------------------------------------
function toggleNav() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Set local time zone offset to cookie
//------------------------------------
$(document).ready(function (e) {
    if (!cookieExists("banglaplus_timeZoneOffset")) {
        var now = new Date();
        var timeZoneOffset = -now.getTimezoneOffset();  // in minutes
        now.setTime(now.getTime() + 10 * 24 * 60 * 60 * 1000); // keep it for 10 days
        document.cookie = "banglaplus_timeZoneOffset=" + timeZoneOffset.toString()
            + ";expires=" + now.toGMTString() + ";path=/;" + document.cookie;

        //Cookie is just set. Refresh the page to reflect the local time, otherwise the first time the page is loaded, it won't display the local date time
        window.location.reload();
    }
});

function cookieExists(name) { //Checks if a cookie exists
    var nameToFind = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].trim().indexOf(nameToFind) === 0) return true;
    }
    return false;
}

// Sliding Text Context - Has associated CSS
//------------------------------------------
var sliderHeight = 200;
var controlHeight = 40;
var moreCaption = "Read More";
var lessCaption = "View Less";
$(document).ready(function (e) {
    $('.sl-content').each(function () {

        var content = $(this);
        var contentHeight = content.prop("scrollHeight");

        content.data('actual-height', contentHeight + controlHeight);

        if (content.data('more-caption')) {
            moreCaption = content.data('more-caption');
        }

        if (content.data('less-caption')) {
            lessCaption = content.data('less-caption');
        }

        var defaultHeight = sliderHeight;
        if (content.data('height')) {
            defaultHeight = content.data("height");
        }
        else {
            content.data('height', sliderHeight);
        }

        if (contentHeight > defaultHeight) {
            content.css("max-height", defaultHeight + "px");

            var control = document.createElement('div');
            control.setAttribute('class', 'sl-control');
            control.innerHTML = '<a href="#" title="Expand to read more." onclick="return openSlider(this)">' + moreCaption + ' <i class="icon-down-dir" /></a>';
            $(content).append(control);
            $(control).show();
        }
    });
});

function openSlider(ctrl) {
    var control = $(ctrl).parent();
    var content = control.parent();

    var actual_height = content.data("actual-height") + "px";
    content.animate({ "max-height": actual_height }, { duration: "slow" });
    content.css("padding-bottom", "40px");

    control.html('<a href="#" title="Collapse to read less." onclick="return closeSlider(this)"><i class="icon-up-dir" /> ' + lessCaption + '</a>');
    return false;
}

function closeSlider(ctrl) {
    var control = $(ctrl).parent();
    var content = control.parent();

    var data_height = content.data('height') + 'px';
    content.animate({ "max-height": data_height }, { duration: "slow" });

    control.html('<a href="#" title="Expand to read more." onclick="return openSlider(this)">' + moreCaption + ' <i class="icon-down-dir" /></a>');
    return false;
}


//Copies input text from Input or TextArea
//----------------------------------------
function CopyToClipboard(elementId) {
    try {
        // Create a new textarea element and give it id='t'
        let textarea = document.createElement('textarea');
        textarea.id = 'tempT';
        // Optional step to make less noise on the page, if any!
        textarea.style.height = 0;
        // Now append it to your page somewhere, I chose <body>
        document.body.appendChild(textarea);
        // Give our textarea a value of whatever inside the div
        textarea.value = document.getElementById(elementId).innerText;
        if (textarea.value === "") {
            textarea.value = document.getElementById(elementId).value; //element is input
        }
        if (textarea.value === "") {
            return false;
        }
        // Now copy whatever inside the textarea to clipboard
        let selector = document.querySelector('#tempT');
        selector.select();
        document.execCommand('copy');
        // Remove the textarea
        document.body.removeChild(textarea)
        //document.querySelector('#' + elementId).select();
        //document.execCommand("Copy");
        return true;
    }
    catch (e) {
        return false;
    }
}


// Lazy load partial content
//--------------------------
$(document).ready(function (e) {
    $(".partialContent").each(function (index, item) {
        var url = $(item).data("url");
        if (url && url.length > 0) {
            $(item).load(url);
        }
    });
});


// Switch content in different placeholders based on window size
//--------------------------------------------------------------

$(document).ready(function (e) {
    $('.switch-content').each(function () {
        var newParent = $(this);
        newParent.data('contentSwitched', false);
        switchContent(newParent);
    });

});

$(window).resize(function () {
    $('.switch-content').each(function () {
        var newParent = $(this);
        switchContent(newParent);
    });
});

function switchContent(newParent) {
    var screen = newParent.data("screen");
    var oldParentId = newParent.data("parent-id");
    var screenWidth = $(window).width();
    var confSwitch = false;

    if (screen === "lg" && screenWidth >= 1200) {
        confSwitch = true; //Switch only on lg screen
    }
    else if (screen === "md" && screenWidth >= 992 && screenWidth < 1200) {
        confSwitch = true; //Switch only on md screen
    }
    else if (screen === "sm" && screenWidth >= 768 && screenWidth < 992) {
        confSwitch = true; //Switch only on sm screen
    }
    else if (screen === "xs" && screenWidth < 768) {
        confSwitch = true; //Switch only on xs screen
    }
    else if (screen === "smx" && screenWidth < 992) {
        confSwitch = true; //Switch on sm and xs
    }
    else if (screen === "mdx" && screenWidth < 1200) {
        confSwitch = true; //Switch on md, sm and xs
    }
    else if (screen === "mdl" && screenWidth >= 992) {
        confSwitch = true; //Switch on md and lg
    }

    var contentSwitched = newParent.data('contentSwitched');
    if ((confSwitch && !contentSwitched) || (!confSwitch && contentSwitched)) {
        var oldParent = $("#" + oldParentId);
        var oPContent = oldParent.contents();
        var nPContent = newParent.contents();

        newParent.append(oPContent);
        oldParent.append(nPContent);
        newParent.data('contentSwitched', !contentSwitched);
    }
}

// Scroll to Top of screen
//------------------------
$(document).ready(function (e) {
    //Scroll to Top feature
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Modal Dialogue
//---------------
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var closeBtn = modal.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function (e) {
        modal.style.display = "none";
        return false;
    };

    return false;
}

;
/**************************************
/ Avro Phonetic Autocorrect dictionary
/ Copyright (c) OmicronLab. All rights reserved.
/ Web: http://www.omicronlab.com/
/
/ Warning: DON'T EDIT THIS FILE MANUALLY
**************************************/
var AvroAutoCorrectDictionary = {
"10th":"10m",
"1st":"1m",
"2nd":"2y",
"3rd":"3y",
"4th":"4rrth",
"5th":"5m",
"6th":"6ShTh",
"7th":"7m",
"8th":"8m",
"9th":"9m",
"abdar":"ab`dar",
"abdare":"ab`dare",
"abdere":"ab`dere",
"abong":"ebong",
"academy":"ekaDemi",
"agla":"ag`la",
"aglanO":"ag`lanO",
"aglaO":"ag`laO",
"agle":"ag`le",
"agliye":"ag`liye",
"agundam":"agun`dam",
"agundame":"agun`dame",
"agundor":"agun`dor",
"agundore":"agun`dore",
"aingoto":"ain`goto",
"aingotovabe":"ain`gotovabe",
"ainjIbI":"ain`jIbI",
"ainjIbIgoN":"ain`jIbIgoN",
"ainjIbIra":"ain`jIbIra",
"ainkanun":"ain`kanun",
"ainmafik":"ain`mafik",
"ainmaphik":"ain`maphik",
"ainmontrI":"ain`montrI",
"ainmontroNaloy":"ain`montroNaloy",
"ainmote":"ain`mote",
"ainmoto":"ain`moto",
"ainsochib":"ain`sochib",
"ainsommoto":"ain`sommoto",
"ainsommotovabe":"ain`sommotovabe",
"ainsongoto":"ain`songoto",
"ainsongotovabe":"ain`songotovabe",
"akangkha":"akaNgkkha",
"akangkhar":"akaNgkkhar",
"akangkhay":"akaNgkkhay",
"akangkhI":"akaNgkhI",
"akangkhiNI":"akaNgkkhiNI",
"akangkhito":"akangkkhito",
"akashmonDol":"akash`monDol",
"akaSmonDol":"akaS`monDol",
"akkelguRum":"akkel`guRum",
"akram":"ak`ram",
"akramer":"ak`ramer",
"aktel":"ekoTel",
"alapsalap":"alap`salap",
"alapsalape":"alap`salape",
"alarm":"aZlarrm",
"albot":"al`bot``",
"albot``":"al`bot``",
"alga":"al`ga",
"algOchh":"al`gOchh",
"algOchhe":"al`gOchhe",
"alkatra":"al`kat`ra",
"almari":"al`mari",
"almarigulO":"al`marigulO",
"almariTa":"al`mariTa",
"almarite":"al`marite",
"almariTi":"al`mariTi",
"alOkmoy":"alOk`moy",
"alOksojja":"alOk`sojja",
"alOksojjay":"alOk`sojjay",
"alOksongket":"alOk`songket",
"alOkstombho":"alOk`stombho",
"alOkstomvo":"alOk`stomvo",
"alpin":"al`pin",
"alpona":"al`pona",
"america":"amerika",
"amla":"am`la",
"amlatontrIyo":"am`latontrIyo",
"amlatontro":"am`latontro",
"amlok":"am`lok",
"amlokI":"am`lokI",
"amra":"am`ra",
"amrai":"am`rai",
"amrao":"am`rao",
"amrul":"am`rul",
"anchan":"an`chan",
"ankOra":"an`kOra",
"anmona":"an`mona",
"anmone":"an`mone",
"antam":"an`tam",
"ante":"an`te",
"antivirus":"aZnTi-vairas",
"anwar":"anOyar",
"apadmostok":"apad`mostok",
"apna":"ap`na",
"apnaapni":"ap`naap`ni",
"apnader":"ap`nader",
"apnaderke":"ap`naderke",
"apnake":"ap`nake",
"apnar":"ap`nar",
"apni":"ap`ni",
"aponkar":"apon`kar",
"apply":"aZplai",
"arampriyo":"aram`priyo",
"arekTa":"arek`Ta",
"arekTi":"arek`Ti",
"arekTu":"arek`Tu",
"army":"arrmi",
"asbenna":"asben`na",
"asenni":"asen`ni",
"ashraful":"ash`raful",
"aslam":"as`lam",
"asle":"as`le",
"aslen":"as`len",
"asli":"as`li",
"asma":"as`ma",
"asman":"as`man",
"asmane":"as`mane",
"asmaner":"as`maner",
"asmanI":"as`manI",
"asmanTa":"as`man`Ta",
"asmanTar":"as`man`Tar",
"astam":"as`tam",
"asten":"as`ten",
"asti":"as`ti",
"aTTa":"aT`Ta",
"aTTi":"aT`Ti",
"audio":"oDiO",
"augusta":"agosT",
"auto":"oTO",
"automatically":"oTOmeTikyali",
"avro":"ovro",
"babohar":"bybohar",
"back":"byak",
"bakko":"bakyo",
"bakri":"bak`ri",
"baksongzom":"bak`songzom",
"baksongzomI":"bak`songzomI",
"baksorrboswo":"bak`sorrboswo",
"ballot":"byaloT",
"bampash":"bam`pash",
"bampashe":"bam`pashe",
"bampasher":"bam`pasher",
"banasree":"bonSrI",
"banjonborrN":"bynjonborrN",
"bank":"byangk",
"basundhara":"bosundhora",
"bathroom":"bathoroom",
"begum":"begom",
"bhalobastam":"bhalobas`tam",
"bhalobaste":"bhalobas`te",
"bhalobasten":"bhalobas`ten",
"bhalobasti":"bhalobas`ti",
"bhalobasto":"bhalobas`to",
"bicycle":"baisaikel",
"bikkhato":"bikhyato",
"bismilla":"bis`milla",
"bismillah":"bis`millah",
"bismillahir":"bis`millahir",
"board":"bOrrD",
"bodmaish":"bod`maish",
"bodmaishi":"bod`maishi",
"bodmash":"bod`mash",
"bodmashi":"bod`mashi",
"bodmayeshi":"bod`mayeshi",
"bodmejaj":"bod`mejaj",
"bodmejajI":"bod`mejajI",
"bodonkhani":"bodon`khani",
"bodrag":"bod`rag",
"bodragI":"bod`ragI",
"bodrul":"bod`rul",
"bogra":"boguRa",
"bolbe":"bolobe",
"bolben":"bol`ben",
"bolbi":"bol`bi",
"bolbo":"bol`bo",
"bolbona":"bol`bona",
"bolenni":"bolen`ni",
"bollam":"bol`lam",
"bolle":"bol`le",
"bollei":"bol`lei",
"bollen":"bol`len",
"bolli":"bol`li",
"bollo":"bol`lo",
"bonna":"bonya",
"bornona":"borrNona",
"bosenni":"bosen`ni",
"brb":"kichhukkhoN opekkha korun",
"briddhi":"brriddhi",
"british":"briTiS",
"browser":"braujar",
"bsc":"bi.`es.`si",
"btv":"biTivi",
"bulb":"balb",
"bulbul":"bul`bul",
"bulbuli":"bul`buli",
"bullet":"buleT",
"button":"baTon",
"byarrtho":"by`rrtho",
"byay":"by`Y",
"byrrth":"by`rrth",
"byrrthta":"by`rrthta",
"byrrthtay":"by`rrthtay",
"byy":"by`Y",
"cable":"kebol",
"calculator":"kyal`kuleTor",
"calkata":"kol`kata",
"canon":"kyanon",
"cartoon":"karrTun",
"cd":"siDi",
"certificate":"sarrTifikeT",
"chad":"cha^d",
"chadni":"cha^dnI",
"chair":"cheyar",
"chairman":"cheyarmyan",
"chakladar":"chak`ladar",
"chakranI":"chak`ranI",
"chakri":"chak`ri",
"chakribakri":"chak`ribak`ri",
"chakri-bakri":"chak`ri-bak`ri",
"chakrihIn":"chak`rihIn",
"chalkumRa":"chal`kumRa",
"chalkumRar":"chal`kumRar",
"chand":"cha^d",
"chapisna":"chapis`na",
"chapisne":"chapis`ne",
"chaplam":"chap`lam",
"chaple":"chap`le",
"chaplei":"chap`lei",
"chaplen":"chap`len",
"chaplo":"chap`lo",
"chaptam":"chap`tam",
"chapte":"chap`te",
"chapten":"chap`ten",
"chapti":"chap`ti",
"character":"kyarekTar",
"charger":"charrjar",
"checkpost":"chekpOsT",
"check-post":"chekpOsT",
"chhara":"chhaRa",
"chhokkagoj":"chhok`kagoj",
"chhokkagoje":"chhok`kagoje",
"chhokkagojer":"chhok`kagojer",
"chhokkaTa":"chhok`kaTa",
"chhokkaTO":"chhok kaTO",
"chhokkaTun":"chhok kaTun",
"chikmik":"chik`mik",
"chikmike":"chik`mike",
"chimni":"chim`ni",
"chintam":"chin`tam",
"chinte":"chin`te",
"chinten":"chin`ten",
"chinti":"chin`ti",
"chinto":"chin`to",
"chitkar":"chit``kar",
"chittagong":"cTrgram",
"chokmok":"chok`mok",
"chokmoke":"chok`moke",
"chokmoki":"chok`moki",
"cholbe":"chol`be",
"cholben":"chol`ben",
"cholbi":"chol`bi",
"cholbo":"chol`bo",
"cholenni":"cholen`ni",
"chollam":"chol`lam",
"cholle":"chol`le",
"chollei":"chol`lei",
"chollen":"chol`len",
"cholli":"chol`li",
"chollo":"chol`lo",
"cholonsoi":"cholon`soi",
"chomotkar":"chomot``kar",
"chomrI":"chom`rI",
"chondonkaShTho":"chondon`kaShTho",
"chondonkaTh":"chondon`kaTh",
"chondonkaThe":"chondon`kaThe",
"chondonkaTher":"chondon`kaTher",
"chondontilok":"chondon`tilok",
"chulka":"chul`ka",
"chulkai":"chul`kai",
"chulkanI":"chul`kanI",
"chulkanIr":"chul`kanIr",
"chulkanIte":"chul`kanIte",
"chulkao":"chul`kao",
"chunkam":"chun`kam",
"chunkame":"chun`kame",
"chunkamer":"chun`kamer",
"chupsanO":"chup`sanO",
"chupse":"chup`se",
"citycell":"siTisel",
"class":"klas",
"click":"klik",
"close-up":"klOs-ap",
"club":"klab",
"cm":"semi.`",
"colbe":"col`be",
"colben":"col`ben",
"colbi":"col`bi",
"colbo":"col`bo",
"college":"kolej",
"comilla":"kumilla",
"commerce":"komarrs",
"commercial":"komarrshial",
"computer":"kompiuTar",
"computere":"kompiuTare",
"computing":"kompiuTing",
"configuration":"konfigareshon",
"consortium":"konsorrTiam",
"convert":"konvarrT",
"converter":"konvarrTar",
"correct":"karekT",
"council":"kaunsil",
"coxsbajar":"koxbajar",
"crest":"kresT",
"cricket":"krikeT",
"cursor":"karrsor",
"custom":"kasTm",
"Dakhorkora":"Dak`horkora",
"Dakmasul":"Dak`masul",
"DaksaiTe":"Dak`saiTe",
"Dalkutta":"Dal`kutta",
"Dalkuttar":"Dal`kuttar",
"Dalpala":"Dal`pala",
"Dalpalar":"Dal`palar",
"Dalpalay":"Dal`palay",
"daRabe":"da^Rabe",
"daRanO":"da^RanO",
"daRaO":"da^RaO",
"daRay":"da^Ray",
"daRiye":"da^Riye",
"debbhokti":"deb`bhokti",
"debbhokto":"deb`bhokto",
"debug":"Dibag",
"december":"Disembor",
"default":"DifolT",
"dekhbenna":"dekhben`na",
"dekhenni":"dekhen`ni",
"deshkalpatro":"deshkal`patro",
"design":"Dijain",
"desktop":"DeksTp",
"developar":"Developar",
"developer":"Developar",
"dhaka":"Dhaka",
"dhongorobI":"dhon`gorobI",
"dhongorrbe":"dhon`gorrbe",
"dhongorrbI":"dhon`gorrbI",
"dhongorrbito":"dhon`gorrbito",
"dhongorrbo":"dhon`gorrbo",
"dhongOUrob":"dhon`gOUrob",
"dhonjon":"dhon`jon",
"dhonkub":"dhon`kub",
"dhonkuber":"dhon`kuber",
"dhonman":"dhon`man",
"dhUmmoy":"dhUm`moy",
"dhumnirrgomon":"dhum`nirrgomon",
"dhumnirrgomonnalI":"dhum`nirrgomon`nalI",
"dhUmpan":"dhUm`pan",
"dhUmpane":"dhUm`pane",
"dhUmpayI":"dhUm`payI",
"dictionary":"Dik`shonarI",
"dingoto":"din`goto",
"dinkal":"din`kal",
"dinman":"din`man",
"dinmane":"din`mane",
"dinmojur":"din`mojur",
"dinmojurer":"din`mojurer",
"dinmojurera":"din`mojurera",
"dinmojurra":"din`mojurra",
"diplay":"Disople",
"directx":"DirekT-x",
"disk":"Disk",
"djuice":"Dijyus",
"doctor":"Daktar",
"document":"DokumenT",
"documents":"DokumenTs",
"Dogmog":"Dog`mog",
"dOkandar":"dOkan`dar",
"dOkandari":"dOkan`dari",
"dOkla":"dOk`la",
"dollar":"Dolar",
"doshombar":"doshom`bar",
"doSombar":"doSom`bar",
"download":"DaunlOD",
"drive":"Draiv",
"dukkhito":"du:khito",
"dukkho":"du:kho",
"dulki":"dul`ki",
"dur":"dUr",
"dure":"dUre",
"dutch":"Dach",
"dvd":"DiviDi",
"easy":"iji",
"edit":"eDiT",
"edition":"eDishon",
"editor":"eDiTor",
"eid":"Id",
"ekhetre":"ekkhetre",
"ekhonkar":"ekhon`kar",
"ekhonkarTa":"ekhon`karTa",
"ekkale":"ek`kale",
"ekkalIn":"ek`kalIn",
"ekkendrIyo":"ek`kendrIyo",
"ekkhan":"ek`khan",
"ekkhana":"ek`khana",
"ekkhani":"ek`khani",
"ekkotha":"ek`kotha",
"ekkothar":"ek`kothar",
"ekkothate":"ek`kothate",
"ekkothatei":"ek`kothatei",
"ekkothay":"ek`kothay",
"ekla":"ek`la",
"eklai":"ek`lai",
"eklao":"ek`lao",
"ekmatra":"ek`matra",
"ekmatro":"ek`matro",
"ekmatrrik":"ek`matrrik",
"ekmon":"ek`mon",
"ekmona":"ek`mona",
"ekmone":"ek`mone",
"ekmot":"ek`mot",
"ekmotalombI":"ek`motalombI",
"ekmote":"ek`mote",
"ekmukh":"ek`mukh",
"ekmukhe":"ek`mukhe",
"ekmukhI":"ek`mukhI",
"ekmukhIkoroN":"ek`mukhIkoroN",
"ekmukhO":"ek`mukhO",
"ekrob":"ek`rob",
"ekrOkha":"ek`rOkha",
"ekrokom":"ek`rokom",
"ekrokom`i":"ek`rokom`i",
"ekrokombhabe":"ek`rokom`bhabe",
"ekrokome":"ek`rokome",
"ekrokomi":"ek`rokom`i",
"ekrokomvabe":"ek`rokom`vabe",
"ekrotti":"ek`rotti",
"ekrUp":"ek`rUp",
"ekrUpe":"ek`rUpe",
"eksathe":"ek`sathe",
"eksonge":"ek`songe",
"eksthan":"ek`sthan",
"eksthane":"ek`sthane",
"ekTa":"ek`Ta",
"ekTaka":"ek`Taka",
"ektal":"ek`tal",
"ektala":"ek`tala",
"ektalate":"ek`talate",
"ektalay":"ek`talay",
"ekTana":"ek`Tana",
"ekTane":"ek`Tane",
"ekTanei":"ek`Tanei",
"ekTao":"ek`Tao",
"ektara":"ek`tara",
"ektarate":"ek`tarate",
"ektaray":"ek`taray",
"ekTi":"ek`Ti",
"ektil":"ek`til",
"ekTio":"ek`Tio",
"ektola":"ek`tola",
"ektolate":"ek`tolate",
"ektolay":"ek`tolay",
"ektomo":"ek`tomo",
"ektontrI":"ek`tontrI",
"ektontro":"ek`tontro",
"ektoro":"ek`toro",
"ektorofa":"ek`torofa",
"ektorofavabe":"ek`torofavabe",
"ektoropha":"ek`toropha",
"ektorophavabe":"ek`torophavabe",
"ekTu":"ek`Tu",
"ekTuk":"ek`Tuk",
"ekTuku":"ek`Tuku",
"ekTuo":"ek`Tuo",
"email":"imeil",
"e-mail":"i-meil",
"emni":"em`ni",
"emnibhabe":"em`nibhabe",
"emnikore":"em`nikore",
"emnitoro":"em`nitoro",
"emnivabe":"em`nivabe",
"emonki":"emon`ki",
"emonTa":"emon`Ta",
"emonTi":"emon`Ti",
"emontoro":"emon`toro",
"empire":"empayar",
"engine":"injin",
"engineer":"injinIyar",
"english":"inglish",
"enter":"enTar",
"etc":"ityadi",
"etyadi":"ityadi",
"explorer":"explOrar",
"fa^ktal":"fa^k`tal",
"fa^ktale":"fa^k`tale",
"fantasy":"fyanTasi",
"fatna":"fat`na",
"fatnar":"fat`nar",
"fatnay":"fat`nay",
"february":"februarI",
"felbe":"fel`be",
"felben":"fel`ben",
"felbi":"fel`bi",
"felbo":"fel`bo",
"fellam":"fel`lam",
"felle":"fel`le",
"fellen":"fel`len",
"felleo":"fel`leo",
"felli":"fel`li",
"fello":"fel`lo",
"file":"fail",
"final":"fainal",
"find":"fainD",
"finki":"fin`ki",
"firefox":"fayarfox",
"firenni":"firen`ni",
"fitna":"fit`na",
"fixed":"fixD",
"floppy":"flopi",
"folder":"fOlDar",
"football":"fuTbol",
"forum":"fOram",
"foundation":"faunDeshon",
"freeware":"freeOyZar",
"friend":"frenD",
"frontpage":"fronTpej",
"fulbabu":"ful`babu",
"fulbabuder":"ful`babuder",
"fulbabur":"ful`babur",
"fulbabura":"ful`babura",
"fulbagan":"ful`bagan",
"fulbagane":"ful`bagane",
"fulbaganer":"ful`baganer",
"fulkopi":"ful`kopi",
"fulkopir":"ful`kopir",
"fuslanO":"fus`lanO",
"fusle":"fus`le",
"fusliye":"fus`liye",
"galgolpo":"gal`golpo",
"galmondo":"gal`mondo",
"gamla":"gam`la",
"gamlagulO":"gam`lagulO",
"gamlate":"gam`late",
"gamlay":"gam`lay",
"ganI":"gganI",
"gatarrthe":"ggatarrthe",
"generation":"jenareSon",
"ghagra":"ghag`ra",
"ghapla":"ghap`la",
"ghora":"ghORa",
"ghori":"ghoRi",
"ghumanni":"ghuman`ni",
"ghurenni":"ghuren`ni",
"gilTi":"gil`Ti",
"glass":"glas",
"gObre":"gOb`re",
"gogoncharI":"gogon`charI",
"gogonchor":"gogon`chor",
"gogonchumbI":"gogon`chumbI",
"gogonsporrshI":"gogon`sporrshI",
"gOlgal":"gOl`gal",
"gOlmal":"gOl`mal",
"gOlmele":"gOl`mele",
"gOlmoric":"gOl`morich",
"gOlmorich":"gOl`morich",
"gOlpata":"gOl`pata",
"gOlpatar":"gOl`patar",
"gOlpatay":"gOl`patay",
"good":"gooD",
"google":"googOl",
"grasnalI":"gras`nalI",
"group":"grup",
"guard":"garrD",
"gubre":"gub`re",
"ha^Tenni":"ha^Ten`ni",
"hamla":"ham`la",
"hamlar":"ham`lar",
"hamlay":"ham`lay",
"harddisk":"harrDoDisk",
"hekmot":"hek`mot",
"hokkotha":"hok`kotha",
"hokkothar":"hok`kothar",
"hokkothay":"hok`kothay",
"hp":"eicpi",
"hridoy":"hrridoy",
"hydrojen":"haiDrOjen",
"ibm":"aibiem",
"imambaRi":"imam`baRi",
"imandar":"iman`dar",
"imandarI":"iman`darI",
"include":"inokluD",
"indhondata":"indhon`data",
"indhondatrI":"indhon`datrI",
"india":"inDia",
"information":"inforrmeSon",
"input":"inpuT",
"install":"insTol",
"institute":"insiTiuT",
"interface":"inTarfes",
"international":"inTarnyashonal",
"internet":"inTarneT",
"islam":"is`lam",
"island":"aisolynD",
"itihaslekhok":"itihas`lekhok",
"jabe":"zabe",
"jamrul":"jam`rul",
"janenna":"janen`na",
"jantam":"jan`tam",
"jante":"jan`te",
"janten":"jan`ten",
"janti":"jan`ti",
"janto":"jan`to",
"january":"januarI",
"je":"ze",
"jedin":"zedin",
"jehetu":"zehetu",
"jekhan":"zekhan",
"jekhane":"zekhane",
"jemon":"zemon",
"jholkachchhe":"jhol`kachchhe",
"jholkachchhilo":"jhol`kachchhilo",
"jholkani":"jhol`kani",
"jholkanO":"jhol`kanO",
"jholmol":"jhol`mol",
"jholmole":"jhol`mole",
"jibon":"jIbon",
"jodi":"zodi",
"jokhon":"zokhon",
"jonno":"jonyo",
"jOsna":"jZOt``sna",
"jOsnamoy":"jZOt``snamoy",
"jOsnarat":"jZOt``snarat",
"jOsnarate":"jZOt``snarate",
"jOsnaratri":"jZOt``snaratri",
"jOsnate":"jZOt``snate",
"jOsnay":"jZOt``snay",
"jukti":"zukti",
"july":"julai",
"jZOt``snarater":"jZOt``snarater",
"kaktal":"kak`tal",
"kaktalIyo":"kak`talIyo",
"kaktalIyobhabe":"kak`talIyobhabe",
"kaktalIyovabe":"kak`talIyovabe",
"kalbela":"kal`bela",
"kalbilombe":"kal`bilombe",
"kalbilombo":"kal`bilombo",
"kalbOISakhI":"kal`bOISakhI",
"kalbOISakhIr":"kal`bOISakhIr",
"kalbOISakhIte":"kal`bOISakhIte",
"kalbOIshakhI":"kal`bOIshakhI",
"kalbOIshakhIr":"kal`bOIshakhIr",
"kalbOIshakhIte":"kal`bOIshakhIte",
"kalbOSekhI":"kal`bOSekhI",
"kalbOshekhI":"kal`bOshekhI",
"kalke":"kal`ke",
"kalker":"kal`ker",
"kalkrome":"kal`krome",
"kalprobahe":"kal`probahe",
"kalprobaho":"kal`probaho",
"kalprobhab":"kal`probhab",
"kalprobhabe":"kal`probhabe",
"kalprovab":"kal`provab",
"kalprovabe":"kal`provabe",
"kalpuruSh":"kal`puruSh",
"kalpuruShe":"kal`puruShe",
"kalpuruSher":"kal`puruSher",
"kalrat":"kal`rat",
"kalrate":"kal`rate",
"kalrater":"kal`rater",
"kalratri":"kal`ratri",
"kalratrire":"kal`ratrire",
"kambai":"kam`bai",
"kamla":"kam`la",
"kamlader":"kam`lader",
"kamladerke":"kam`laderke",
"kamlara":"kam`lara",
"kampIRito":"kam`pIRito",
"kamra":"kam`ra",
"kamragulO":"kam`ragulO",
"kamrate":"kam`rate",
"kamray":"kam`ray",
"kangkhito":"kaNgkkhito",
"kankaTa":"kan`kaTa",
"kankhaRa":"kan`khaRa",
"kankO":"kan`kO",
"karoNTa":"karoN`Ta",
"karoNTi":"karoN`Ti",
"katrani":"kat`rani",
"katranir":"kat`ranir",
"katranO":"kat`ranO",
"katranOr":"kat`ranOr",
"key":"kee",
"keyboard":"kIbOrrD",
"keypad":"kI-pyaD",
"khanni":"khan`ni",
"khelenni":"khelen`ni",
"khetre":"kkhetre",
"khetrei":"kkhetrei",
"khetro":"kkhetro",
"khetrobisheSh":"kkhetrobisheSh",
"khetrofol":"kxetrofol",
"khoma":"kkhoma",
"khoti":"kkhoti",
"khotibriddhi":"kkhotibrriddhi",
"khotibrriddhi":"kkhotibrriddhi",
"khotikor":"kkhotikor",
"khulbe":"khul`be",
"khulben":"khul`ben",
"khulbO":"khul`bO",
"khullam":"khul`lam",
"khulle":"khul`le",
"khullen":"khul`len",
"khulli":"khul`li",
"kilbil":"kil`bil",
"kilbile":"kil`bile",
"kingdom":"kingDom",
"kintam":"kin`tam",
"kinte":"kin`te",
"kinten":"kin`ten",
"kinti":"kin`ti",
"kipTa":"kip`Ta",
"kipTami":"kip`Tami",
"kipTamO":"kip`TamO",
"kisu":"kichhu",
"kisui":"kichhui",
"km":"kimi.`",
"kobji":"kob`ji",
"kolkarkhana":"kol`karkhana",
"kolkarkhanar":"kol`karkhanar",
"kolkarkhanay":"kol`karkhanay",
"kolkata":"kol`kata",
"kolkatai":"kol`katai",
"kolkatar":"kol`katar",
"kolkatate":"kol`katate",
"kolkatay":"kol`katay",
"kolkobja":"kol`kobja",
"kolkol":"kol`kol",
"kolkollOl":"kol`kollOl",
"kolkonTh":"kol`konTh",
"kollaN":"kolyaN",
"kollaNpur":"kolyaNpur",
"kolma":"kol`ma",
"kolombaj":"kolom`baj",
"kolombajI":"kolom`bajI",
"kOmolmoti":"kOmol`moti",
"kompokkhe":"kom`pokkhe",
"konjuspona":"konjus`pona",
"konkon":"kon`kon",
"konkonani":"kon`konani",
"konkone":"kon`kone",
"konokmoy":"konok`moy",
"konokmukuT":"konok`mukuT",
"konokmukuTe":"konok`mukuTe",
"kOnTa":"kOn`Ta",
"kOnTi":"kOn`Ti",
"korenni":"koren`ni",
"korrtitto":"korrtrritwo",
"korrtobbo":"korrtobyo",
"kosrot":"kos`rot",
"kosrote":"kos`rote",
"kosroter":"kos`roter",
"kosrotI":"kos`rotI",
"koththo":"kothyo",
"kotokkhani":"kotok`khani",
"kotokTa":"kotok`Ta",
"koyekTa":"koyek`Ta",
"koyekTi":"koyek`Ti",
"kukkhato":"kukhyato",
"kulgorima":"kul`gorima",
"kulgorrbe":"kul`gorrbe",
"kulgorrbo":"kul`gorrbo",
"kulgOUrob":"kul`gOUrob",
"kulgOUrobe":"kul`gOUrobe",
"kulguru":"kul`guru",
"kulkaminI":"kul`kaminI",
"kulkolonker":"kul`kolonker",
"kulkolonkI":"kul`kolonkI",
"kulkolonkinI":"kul`kolonkinI",
"kulkolonko":"kul`kolonko",
"kulkonya":"kul`konya",
"kulkuch":"kul`kuch",
"kulkucha":"kul`kucha",
"kulkuchO":"kul`kuchO",
"kulkul":"kul`kul",
"kulTa":"kul`Ta",
"lab":"lyab",
"language":"lyanguyej",
"layer":"leyar",
"layout":"le`auT",
"life":"laif",
"linux":"linax",
"llb":"el.`el.`bi",
"loklok":"lok`lok",
"lokloke":"lok`loke",
"london":"lonDon",
"m.b.b.s":"em.`bi.`bi.`es",
"macro":"myakrO",
"mamla":"mam`la",
"mamlar":"mam`lar",
"mamlay":"mam`lay",
"manager":"myanejar",
"mangOUrob":"man`gOUrob",
"mansommoto":"man`sommoto",
"mante":"man`te",
"manten":"man`ten",
"manti":"man`ti",
"manto":"man`to",
"march":"marrch",
"market":"marrkeT",
"massenger":"mesenjar",
"mbbs":"em.`bi.`bi.`es",
"md.":"emDi.`",
"media":"miDia",
"medical":"meDikel",
"medicine":"meDisin",
"microsoft":"maikrOsofT",
"ml":"mili.`",
"mm":"mimi.`",
"mobile":"mObail",
"mohot":"mohot``",
"mongolbar":"mongol`bar",
"mongolbare":"mongol`bare",
"mongolgIt":"mongol`gIt",
"mongolgrohe":"mongol`grohe",
"mongolgroher":"mongol`groher",
"mongolgroho":"mongol`groho",
"mongolkamI":"mongol`kamI",
"mongolkamona":"mongol`kamona",
"mongolkarI":"mongol`karI",
"mongolkariNI":"mongol`kariNI",
"mongolkor":"mongol`kor",
"mongolmoy":"mongol`moy",
"monitor":"moniTor",
"mostafa":"mOstofa",
"motor":"mOTor",
"motorolla":"moTOrOla",
"mou":"mOU",
"mouse":"maus",
"mousumi":"mOUsumi",
"munmun":"mun`mun",
"music":"miujik",
"mymensingh":"moymonosing`h",
"nakkan":"nak`kan",
"nakkaTa":"nak`kaTa",
"nakkhot":"nak`khot",
"namenni":"namen`ni",
"national":"nyashonal",
"nazmun":"najmun",
"new":"niu",
"newspapper":"niuj pepar",
"newyork":"niuiyorrk",
"nidankal":"nidan`kal",
"nidankale":"nidan`kale",
"nimokharam":"nimok`haram",
"nimokharami":"nimok`harami",
"nobombar":"nobom`bar",
"nojrana":"noj`rana",
"nokri":"nok`ri",
"nolkUp":"nol`kUp",
"nolkUpe":"nol`kUpe",
"nolkUper":"nol`kUper",
"nolkUpgulO":"nol`kUpgulO",
"nolkUpTa":"nol`kUp`Ta",
"nOnta":"nOn`ta",
"norokkunDe":"norok`kunDe",
"norokkunDer":"norok`kunDer",
"norokkunDo":"norok`kunDo",
"norton":"norTn",
"notepad":"nOTpyaD",
"november":"novembor",
"noyongOchor":"noyon`gOchor",
"noyonjol":"noyon`jol",
"noyonjole":"noyon`jole",
"noyonjoler":"noyon`joler",
"noyonkON":"noyon`kON",
"noyonkONe":"noyon`kONe",
"noyonkONer":"noyon`kONer",
"noyonmoNi":"noyon`moNi",
"noyonronjon":"noyon`ronjon",
"noyonsnigdhokor":"noyon`snigdhokor",
"noyontara":"noyon`tara",
"noyontaray":"noyon`taray",
"ntfs":"en Ti ef es",
"number":"nambar",
"obyrrtho":"oby`rrtho",
"october":"okTObor",
"odolbodol":"odol`bodol",
"office":"ofis",
"ogganjonito":"oggan`jonito",
"oggankrrito":"oggan`krrito",
"oggantimir":"oggan`timir",
"ogotta":"ogotya",
"Ojondar":"Ojon`dar",
"okalbarrdhokyo":"okal`barrdhokyo",
"okalborrShoN":"okal`borrShoN",
"okalbrriddho":"okal`brriddho",
"okalbrriShTi":"okal`brriShTi",
"Okalotnama":"Okalot`nama",
"Okalotnamate":"Okalot`namate",
"Okalotnamay":"Okalot`namay",
"okaTmUrrkho":"okaT`mUrrkho",
"okaTTo":"okaTyo",
"okollaN":"okolyaN",
"okorrtobbo":"okorrtobyo",
"okoththo":"okothyo",
"Olkopi":"Ol`kopi",
"olokmegh":"olok`megh",
"OlTanO":"Ol`TanO",
"omicronlab":"Omikronlyab",
"omlanmukh":"omlan`mukh",
"omlanmukhe":"omlan`mukhe",
"Omra":"Om`ra",
"Omrah":"Om`rah,,",
"oncholprobhab":"onchol`probhab",
"oncholprovab":"onchol`provab",
"onekTa":"onek`Ta",
"onekTai":"onek`Tai",
"onkontuli":"onkon`tuli",
"onkontulika":"onkon`tulika",
"onolborrShI":"onol`borrShI",
"onolborrShoN":"onol`borrShoN",
"ononna":"ononya",
"ononno":"ononyo",
"onudbayI":"onudwayI",
"onudbeg":"onudweg",
"onudbigno":"onudwigno",
"onujjol":"onujjwol",
"operating":"opareTing",
"opomangrostho":"opoman`grostho",
"opomanjonok":"opoman`jonok",
"opomanjonokvabe":"opoman`jonokvabe",
"opomankor":"opoman`kor",
"option":"op`shon",
"optionti":"op`shon`Ti",
"original":"orijinal",
"orrthat":"orrthat``",
"osabdhan":"osab`dhan",
"osabdhane":"osab`dhane",
"osabdhanI":"osab`dhanI",
"osabdhanota":"osab`dhanota",
"oShTombar":"oShTom`bar",
"osmaan":"Os`man",
"osonkho":"osongkhyo",
"ostacholgamI":"ostachol`gamI",
"ostacholgoto":"ostachol`goto",
"otopor":"ot:por",
"ovyasmoto":"ovyas`moto",
"oxford":"oxfOrrD",
"oxygen":"oxijen",
"oyoncholon":"oyon`cholon",
"oyoncholone":"oyon`cholone",
"oyonkal":"oyon`kal",
"oyonkale":"oyon`kale",
"pack":"pyak",
"page":"peij",
"pagla":"pag`la",
"paglami":"pag`lami",
"paglamO":"pag`lamO",
"paglI":"pag`lI",
"palki":"pal`ki",
"palki-behara":"pal`ki-behara",
"palokmata":"palok`mata",
"palokmatar":"palok`matar",
"palTa":"pal`Ta",
"palTanO":"pal`TanO",
"palTay":"pal`Tay",
"palTe":"pal`Te",
"palTi":"pal`Ti",
"palTiye":"pal`Tiye",
"panroto":"pan`roto",
"pant":"pyanT",
"pappUNyo":"pap`pUNyo",
"partition":"parrTiSon",
"paShaNmoy":"paShaN`moy",
"pha^ktal":"pha^k`tal",
"pha^ktale":"pha^k`tale",
"phatna":"phat`na",
"phatnar":"phat`nar",
"phatnay":"phat`nay",
"phelbe":"phel`be",
"phelben":"phel`ben",
"phelbi":"phel`bi",
"phelbo":"phel`bo",
"phellam":"phel`lam",
"phelle":"phel`le",
"phellen":"phel`len",
"phelleo":"phel`leo",
"phelli":"phel`li",
"phello":"phel`lo",
"phinki":"phin`ki",
"phirenni":"phiren`ni",
"phitna":"phit`na",
"phone":"fOn",
"phonetic":"phoneTik",
"photo":"phTO",
"photocopy":"fTOkpi",
"phulbabu":"phul`babu",
"phulbabuder":"phul`babuder",
"phulbabura":"phul`babura",
"phulbagan":"phul`bagan",
"phulbagane":"phul`bagane",
"phulbaganer":"phul`baganer",
"phulkopi":"phul`kopi",
"phulkopir":"phul`kopir",
"phuslanO":"phus`lanO",
"phusle":"phus`le",
"phusliye":"phus`liye",
"picnic":"piknik",
"plate":"pleT",
"player":"plear",
"pOkhraj":"pOkh`raj",
"police":"puliS",
"ponchombar":"ponchom`bar",
"poRenni":"poRen`ni",
"porjonto":"porrzonto",
"poroborti":"poroborrtI",
"port":"pOrrT",
"poSchimbonge":"poSchim`bonge",
"poSchimbongei":"poSchim`bongei",
"poSchimbonger":"poSchim`bonger",
"poSchimbongo":"poSchim`bongo",
"poshchimbangla":"poshchim`bangla",
"poshchimbanglar":"poshchim`banglar",
"poshchimbanglate":"poshchim`banglate",
"poshchimbanglay":"poshchim`banglay",
"poshchimbonge":"poshchim`bonge",
"poshchimbongei":"poshchim`bongei",
"poshchimbonger":"poshchim`bonger",
"poshchimbongo":"poshchim`bongo",
"poshcimbangla":"poshcim`bangla",
"poshcimbanglar":"poshcim`banglar",
"poshcimbanglay":"poshcim`banglay",
"prime":"praim",
"print":"prinT",
"printer":"prinTar",
"processor":"prosesor",
"programme":"prOgram",
"programming":"prOgraming",
"prokashman":"prokash`man",
"prokaSman":"prokaS`man",
"prothombar":"prothom`bar",
"prothombare":"prothom`bare",
"prothombarei":"prothom`barei",
"prothombareo":"prothom`bareo",
"prothombarer":"prothom`barer",
"prottasha":"protyasha",
"prottutponnomoti":"protyut``ponnomoti",
"proyojon":"proyOjon",
"proyOjonmafik":"proyOjon`mafik",
"proyOjonmaphik":"proyOjon`maphik",
"proyOjonmoto":"proyOjon`moto",
"radio":"reDiO",
"rahman":"rah`man",
"rahmanir":"rah`manir",
"rakhenni":"rakhen`ni",
"recycle":"risaikel",
"referee":"refaree",
"rehman":"reh`man",
"relgaRi":"rel`gaRi",
"relgaRir":"rel`gaRir",
"relgaRiTa":"rel`gaRiTa",
"rellain":"rel`lain",
"relpoth":"rel`poth",
"relpothe":"rel`pothe",
"relpother":"rel`pother",
"ringtone":"ringTOn",
"rObbar":"rOb`bar",
"rodon":"rOdon",
"rOgmukti":"rOg`mukti",
"rOgmuktir":"rOg`muktir",
"rOgmukto":"rOg`mukto",
"rohman":"roh`man",
"rong":"roNg",
"ronger":"roNger",
"rriNgrahI":"rriN`grahI",
"rriNgrohIta":"rriN`grohIta",
"rriNgrohoN":"rriN`grohoN",
"rriNgrostho":"rriN`grostho",
"rriNmOchon":"rriN`mOchon",
"rriNmukti":"rriN`mukti",
"rriNmukto":"rriN`mukto",
"RSS":"ar.`es.`es",
"rss":"ar.`es.`es",
"rumpa":"rUmpa",
"sabdhan":"sab`dhan",
"sabdhane":"sab`dhane",
"sabdhanI":"sab`dhanI",
"sabdhanota":"sab`dhanota",
"samla":"sam`la",
"samlan":"sam`lan",
"samlanO":"sam`lanO",
"samlao":"sam`lao",
"samna":"sam`na",
"samnasamni":"sam`nasam`ni",
"samna-samni":"sam`na-sam`ni",
"samne":"sam`ne",
"samni":"sam`ni",
"satej":"sotej",
"science":"sains",
"screen":"skreen",
"search":"sarrch",
"sekhetre":"sekkhetre",
"sekhetrei":"sekkhetrei",
"sekhetreo":"sekkhetreo",
"select":"silekT",
"semi-final":"semi-fainal",
"september":"sepTembor",
"serial":"sirial",
"service":"sarrvis",
"set":"seT",
"shampoo":"shyampu",
"shapla":"shap`la",
"shaplar":"shap`lar",
"shaplara":"shap`lara",
"share":"sheyar",
"shift":"shifT",
"shirt":"sharrT",
"shobdaho":"shob`daho",
"shobdahok":"shob`dahok",
"shobdahon":"shob`dahon",
"shobdeho":"shob`deho",
"ShOloana":"ShOlo`ana",
"ShOloanai":"ShOlo`anai",
"shOnni":"shOn`ni",
"shopping":"shoping",
"shortcut":"SorrTkaT",
"shunno":"shunyo",
"shunnota":"shunyota",
"shuntam":"shun`tam",
"shunte":"shun`te",
"shunten":"shun`ten",
"shunti":"shun`ti",
"siemens":"simens",
"signature":"sig`nechar",
"sIlmOhor":"sIl`mOhor",
"simanto":"sImant",
"sir":"syar",
"site":"saiT",
"smart":"smarrT",
"sms":"es`em`es",
"Sobdaho":"Sob`daho",
"Sobdahok":"Sob`dahok",
"Sobdahon":"Sob`dahon",
"Sobdeho":"Sob`deho",
"sobji":"sob`ji",
"sobkhetre":"sobkxetre",
"sobkhetro":"sobkxetro",
"software":"sofT`OyZar",
"somadhanTi":"somadhan`Ti",
"sOmbar":"sOm`bar",
"sommanjonok":"somman`jonok",
"sommankor":"somman`kor",
"sonar":"sOnar",
"sondha":"sondhya",
"sondhamaloti":"sondhyamaloti",
"SOnni":"SOn`ni",
"soptombar":"soptom`bar",
"sot":"sot``",
"sotti":"sotyi",
"sotto":"sotyo",
"srizon":"srrijon",
"stamp":"sTyamp",
"standard":"sTZanDarrD",
"start":"sTarrT",
"status":"sTyaTas",
"sthankalpatro":"sthan`kal`patro",
"style":"sTail",
"subarna":"suborrNa",
"support":"sapOrrT",
"switch":"suich",
"system":"sisTem",
"table":"Tebil",
"Takri":"Tak`ri",
"Talbahana":"Tal`bahana",
"talgachh":"tal`gachh",
"talgachhe":"tal`gachhe",
"talgachhgulO":"tal`gachhgulO",
"talgachhTa":"tal`gachhTa",
"talgachhTai":"tal`gachhTai",
"talgachhTay":"tal`gachhTay",
"talkana":"tal`kana",
"talkanar":"tal`kanar",
"talkanaTa":"tal`kanaTa",
"talmafik":"tal`mafik",
"talmaphik":"tal`maphik",
"TalmaTal":"Tal`maTal",
"talmoto":"tal`moto",
"talpata":"tal`pata",
"talpatar":"tal`patar",
"talpatay":"tal`patay",
"talpotre":"tal`potre",
"talpotrer":"tal`potrer",
"talpotro":"tal`potro",
"technology":"TeknOlji",
"telephone":"TeliphOn",
"teletalk":"TeliTk",
"televission":"TeliviSon",
"temni":"tem`ni",
"temnibhabe":"tem`nibhabe",
"temnikore":"tem`nikore",
"temnivabe":"tem`nivabe",
"tennis":"Tenis",
"text":"TexT",
"textile":"TexTail",
"thakenni":"thaken`ni",
"thaklam":"thak`lam",
"thakle":"thak`le",
"thaklei":"thak`lei",
"thakleO":"thak`leO",
"thaklo":"thak`lo",
"Thakrun":"Thak`run",
"thaktam":"thak`tam",
"thakte":"thak`te",
"thakten":"thak`ten",
"thakti":"thak`ti",
"Thandi":"Than`di",
"Thandidi":"Than`didi",
"Thikmoto":"Thik`moto",
"Thikmotoi":"Thik`motoi",
"ThikThik":"Thik`Thik",
"ThonThon":"Thon`Thon",
"ThonThone":"Thon`Thone",
"TikTik":"Tik`Tik",
"TikTiki":"Tik`Tiki",
"time":"Taim",
"tingun":"tin`gun",
"tinjon":"tin`jon",
"tinjona":"tin`jona",
"tinjone":"tin`jone",
"tinjoner":"tin`joner",
"tinjonerTa":"tin`jonerTa",
"tinkal":"tin`kal",
"tinrokom":"tin`rokom",
"tinTa":"tin`Ta",
"tinTaka":"tin`Taka",
"tinTane":"tin`Tane",
"tinTanei":"tin`Tanei",
"tinTi":"tin`Ti",
"Tips":"Tip`s",
"Tipsohi":"Tip`sohi",
"Tipsohir":"Tip`sohir",
"Tipsoi":"Tip`soi",
"TipTip":"Tip`Tip",
"tohfa":"tOhfa",
"tohfa-e-aiyub":"tOhfa-i-aiyub",
"toirI":"tOIrI",
"tokhonkar":"tokhon`kar",
"tokhonkarTa":"tokhon`karTa",
"toklif":"tok`lif",
"tokliph":"tok`liph",
"tokma":"tok`ma",
"TokTok":"Tok`Tok",
"toktok":"tok`tok",
"toktoke":"tok`toke",
"Tolmol":"Tol`mol",
"Tolmole":"Tol`mole",
"tolpeT":"tol`peT",
"tolpeTe":"tol`peTe",
"tolpeTer":"tol`peTer",
"tolpeTTa":"tol`peT`Ta",
"tolpeTTar":"tol`peT`Tar",
"tolpeTTate":"tol`peT`Tate",
"TolTol":"Tol`Tol",
"TolTole":"Tol`Tole",
"tOmra":"tOm`ra",
"tOmrai":"tOm`rai",
"tOmrao":"tOm`rao",
"tOmratO":"tOm`ratO",
"TonTon":"Ton`Ton",
"TonTonani":"Ton`Tonani",
"TonTone":"Ton`Tone",
"tool":"Tool",
"tools":"Tuls",
"torolbuddhi":"torol`buddhi",
"torolmoti":"torol`moti",
"torolprokrriti":"torol`prokrriti",
"TosTos":"Tos`Tos",
"TosTosa":"Tos`Tosa",
"TosTose":"Tos`Tose",
"traffic":"Trafik",
"tube":"Tiub",
"Tukra":"Tuk`ra",
"TukragulO":"Tuk`ragulO",
"TukraTa":"Tuk`raTa",
"TukraTakra":"Tuk`raTak`ra",
"Tukra-Takra":"Tuk`ra-Tak`ra",
"TukraTi":"Tuk`raTi",
"Tukri":"Tuk`ri",
"Tukrite":"Tuk`rite",
"TukTak":"Tuk`Tak",
"TukTuke":"Tuk`Tuke",
"tumpa":"Tumpa",
"TunTun":"Tun`Tun",
"TunTuni":"Tun`Tuni",
"TusTus":"Tus`Tus",
"TusTusa":"Tus`Tusa",
"TusTuse":"Tus`Tuse",
"type":"Taip",
"typing":"Taiping",
"udbayI":"udwayI",
"udbek":"udwek",
"udbigno":"udwigno",
"uddOg":"udyOg",
"ujjol":"ujjwol",
"ulTa":"ul`Ta",
"ulTanO":"ul`TanO",
"ulTapalTa":"ul`Tapal`Ta",
"ulTapiTh":"ul`TapiTh",
"ulTapiThe":"ul`TapiThe",
"ulTaroth":"ul`Taroth",
"ulTarothe":"ul`Tarothe",
"ulTe":"ul`Te",
"ulTO":"ul`TO",
"ulTOpoth":"ul`TOpoth",
"ulTOpothe":"ul`TOpothe",
"ulTOroth":"ul`TOroth",
"ulTOrothe":"ul`TOrothe",
"unibijoy":"iunibijoy",
"unicode":"iunikOD",
"university":"iunivarrsiTi",
"update":"apDeT",
"uponyaskar":"uponyas`kar",
"uponyaslekhok":"uponyas`lekhok",
"uponyasrochoyita":"uponyas`rochoyita",
"uRonchonDI":"uRon`chonDI",
"user":"iujar",
"uShno":"uShNo",
"uThenni":"uThen`ni",
"utkoT":"ut``koT",
"utrai":"ut`rai",
"utralam":"ut`ralam",
"utralen":"ut`ralen",
"utrali":"ut`rali",
"utralO":"ut`ralO",
"utranO":"ut`ranO",
"utse":"ut``se",
"utser":"ut``ser",
"utso":"ut``so",
"valobastam":"valobas`tam",
"valobaste":"valobas`te",
"valobasten":"valobas`ten",
"valobasti":"valobas`ti",
"valobasto":"valobas`to",
"vasha":"vaSha",
"vashar":"vaShar",
"vashate":"vaShate",
"vashay":"vaShay",
"vedio":"viDiO",
"version":"varrson",
"view":"viu",
"virtual":"varrchuyal",
"voumik":"vOUmik",
"webpage":"Oyebpej",
"winamp":"uinaZmp",
"window":"uinDO",
"windows":"uinDOj",
"word":"OarrD",
"wordpad":"OarrDpyaD",
"world":"warrlD",
"wow":"waw",
"xp":"xpi",
"zaman":"jaman",
"zanni":"zan`ni",
"zemni":"zem`ni",
"zemnibhabe":"zem`nibhabe",
"zemnikore":"zem`nikore",
"zemnivabe":"zem`nivabe",
"zia":"jia",
"zitu":"jitu",
"zOgandar":"zOgan`dar",
"zOgandarI":"zOgan`darI",
"zokhonkar":"zokhon`kar",
"zokhonkarTa":"zokhon`karTa",
"zokhontokhon":"zokhon`tokhon",
"zokhontokhon`i":"zokhon`tokhon`i",
"zompUrI":"zom`pUrI"
};
;
/******************************************
Copyright (C) 2007  S M Mahbub Murshed
Copyright (C) 2009-2017 Md Ashfaqur Rahman Pallab

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

Authors: S M Mahbub Murshed, Arup Kamal, Md Ashfaqur Rahman Pallab
Copyright: Authors
Email: udvranto@yahoo.com, arup.kamal@gmail.com, admin@pallab.com

Version: 1.2.4

Note: The original source code created by S M Mahbub Murshed and
Arup Kamal was modified by Md Ashfaqur Rahman Pallab to fix bugs and
enhance features.
*******************************************/
// Keyboard layout to follow
var EnglishKeyboard = false;
var ENGLISH = 1;
var AVROPHONETIC = 2;
var UNIJOY = 3;
var PROBHAT = 4;
var SWIPHONETIC = 5;
var BIJOY = 6;
var BORNOSOFTACCENT = 7;

/*
	1 - English,
	2 - Bijoy,
	3 - Unijoy
	4 - Probhat
	5 - Somewhere-in Phonetic,
	6 - Avro Phonetic,
*/

/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Bijoy
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
*******************************************/
var bijoy_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"ৃ",
	"A":"র্",
	"d":"ি",
	"D":"ী",
	"s":"ু",
	"S":"ূ",
	"f":"া",
	"F":"অ",
	"g":"্",
	"G":"।",
	"h":"ব",
	"H":"ভ",
	"j":"ক",
	"J":"খ",
	"k":"ত",
	"K":"থ",
	"l":"দ",
	"L":"ধ",
	"z":"্র",
	"Z":"্য",
	"x":"ও",
	"X":"ৗ",
	"c":"ে",
	"C":"ৈ",
	"v":"র",
	"V":"ল",
	"b":"ন",
	"B":"ণ",
	"n":"স",
	"N":"ষ",
	"m":"ম",
	"M":"শ",

	"q":"ঙ",
	"Q":"ং",
	"w":"য",
	"W":"য়",
	"e":"ড",
	"E":"ঢ",
	"r":"প",
	"R":"ফ",
	"t":"ট",
	"T":"ঠ",
	"y":"চ",
	"Y":"ছ",
	"u":"জ",
	"U":"ঝ",
	"i":"হ",
	"I":"ঞ",
	"o":"গ",
	"O":"ঘ",
	"p":"ড়",
	"P":"ঢ়",
	"&":"ঁ",
	"$":"৳",
	"`":"\u200C",
	"~":"\u200D",

	"\\":"ৎ",
	"|":"ঃ"
}; // end bijoy_keyboard_map
/******************************************/





/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Phonetic
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var somewherein_phonetic_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"া",
	"A":"আ",
	"d":"ড",
	"D":"দ",
	"s":"স",
	"S":"ষ",
	"f":"ফ",
	"F":"ঋ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"ঃ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"খ",
	"z":"য",
	"Z":"ত",
	"x":"ক্স",
	"X":"ঢ",
	"c":"চ",
	"C":"ছ",
	"v":"ভ",
	"V":"ঠ",
	"b":"ব",
	"B":"ই",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"গ",

	"q":"য়",
	"Q":"ছ",
	"w":"ৃ",
	"W":"ঋ",
	"e":"ে",
	"E":"এ",
	"r":"র",
	"R":"ড়",
	"t":"ট",
	"T":"ত",
	"y":"য়",
	"Y":"্য",
	"u":"ু",
	"U":"উ",
	"i":"ি",
	"I":"ই",
	"o":"ো",
	"O":"ও",
	"p":"প",
	"P":"চ",
	"&":"্",
	"$":"৳",
	"+":"্",
	".":"।",
	"`":"\u200C",
	"~":"\u200D",

	"\\":"॥",
	"|":"।"
}; // end somewherein_phonetic_keyboard_map 
/******************************************/





/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Avro Phonetic
	layout.

	\param C The ASCII character to find its Map

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var avro_phonetic_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"o":"অ",
	"a":"আ",
	"A":"আ",
	"i":"ই",
	"I":"ঈ",
	"u":"উ",
	"U":"ঊ",
	"e":"এ",
	"E":"এ",
	"O":"ও",


	"d":"দ",
	"D":"ড",
	"s":"স",
	"S":"শ",
	"f":"ফ",
	"g":"গ",
	"G":"গ",
	"h":"হ",
	"H":"হ",
	"j":"জ",
	"J":"য",
	"k":"ক",
	"K":"ক",
	"l":"ল",
	"L":"ল",
	"z":"য",
	"Z":"্য",
	"c":"চ",
	"C":"চ",
	"v":"ভ",
	"V":"ভ",
	"b":"ব",
	"B":"ব",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"ম",
	"w":"্ব",
	"W":"্ব",
	"r":"র",
	"R":"ড়",
	"t":"ত",
	"T":"ট",
	"x":"ক্স",
	"X":"ক্স",
	"y":"্য",
	"Y":"য়",
	"p":"প",
	"P":"প",
	"$":"৳",
	"+":"্",
	".":"।",
	":":"ঃ",
	"^":"ঁ",
	"`":"্",
	"-":"-"
}; // end avro_phonetic_keyboard_map
/******************************************/






/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Unijoy
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 07, 2006
******************************************/
var unijoy_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"ৃ",
	"A":"র্",
	"d":"ি",
	"D":"ী",
	"s":"ু",
	"S":"ূ",
	"f":"া",
	"F":"অ",
	"g":"্",
	"G":"।",
	"h":"ব",
	"H":"ভ",
	"j":"ক",
	"J":"খ",
	"k":"ত",
	"K":"থ",
	"l":"দ",
	"L":"ধ",
	"z":"্র",
	"Z":"্য",
	"x":"ো", 
	"X":"ৌ", 
	"c":"ে",
	"C":"ৈ",
	"v":"র",
	"V":"ল",
	"b":"ন",
	"B":"ণ",
	"n":"স",
	"N":"ষ",
	"m":"ম",
	"M":"শ",

	"q":"ঙ",
	"Q":"ং",
	"w":"য",
	"W":"য়",
	"e":"ড",
	"E":"ঢ",
	"r":"প",
	"R":"ফ",
	"t":"ট",
	"T":"ঠ",
	"y":"চ",
	"Y":"ছ",
	"u":"জ",
	"U":"ঝ",
	"i":"হ",
	"I":"ঞ",
	"o":"গ",
	"O":"ঘ",
	"p":"ড়",
	"P":"ঢ়",
	"&":"ঁ",
	"$":"৳",
	"`":"\u200C",
	"~":"\u200D",
	"^":"÷",
	"*":"×",

	"\\":"ৎ",
	"|":"ঃ"
}; // end unijoy_keyboard_map
/******************************************/







/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Probhat
	layout.

	Coded by : S M Mahbub Murshed
	Date: April 23, 2006
******************************************/
var probhat_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"া",
	"A":"অ",
	"s":"স",
	"S":"ষ",
	"d":"ড",
	"D":"ঢ",
	"f":"ত",
	"F":"থ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"ঃ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"ং",
	"z":"য়",
	"Z":"য",
	"x":"শ", 
	"X":"ঢ়", 
	"c":"চ",
	"C":"ছ",
	"v":"আ",
	"V":"ঋ",
	"b":"ব",
	"B":"ভ",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"ঙ",

	"q":"দ",
	"Q":"ধ",
	"w":"ূ",
	"W":"ঊ",
	"e":"ী",
	"E":"ঈ",
	"r":"র",
	"R":"ড়",
	"t":"ট",
	"T":"ঠ",
	"y":"এ",
	"Y":"ঐ",
	"u":"ু",
	"U":"উ",
	"i":"ি",
	"I":"ই",
	"o":"ও",
	"O":"ঔ",
	"p":"প",
	"P":"ফ",
	"[":"ে",
	"{":"ৈ",
	"]":"ো",
	"}":"ৌ",
	"*":"ৎ",

	"&":"ঞ",
	"$":"৳",
	"~":"\u200C",
	"`":"\u200D",
	"<":"ৃ",
	">":"ঁ",
	".":"।",
	"/":"্",

	"|":"॥"
}; // end probhat_keyboard_map
/******************************************/




/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to Bornosoft Accent
	layout.

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
var bornosoft_keyboard_map = {
	"0":"০",
	"1":"১",
	"2":"২",
	"3":"৩",
	"4":"৪",
	"5":"৫",
	"6":"৬",
	"7":"৭",
	"8":"৮",
	"9":"৯",

	"a":"আ",
	"A":"অ",
	"d":"দ",
	"D":"ধ",
	"s":"স",
	"S":"শ",
	"f":"া",
	"F":"অ",
	"g":"গ",
	"G":"ঘ",
	"h":"হ",
	"H":"হ",
	"j":"জ",
	"J":"ঝ",
	"k":"ক",
	"K":"খ",
	"l":"ল",
	"L":"ল",

	"z":"য",
	"Z":"জ",
	"x":"ষ", 
	"X":"ষ", 
	"c":"চ",
	"C":"ছ",
	"v":"র",
	"V":"ল",
	"b":"ব",
	"B":"ভ",
	"n":"ন",
	"N":"ণ",
	"m":"ম",
	"M":"ম",

	"q":"ঙ",
	"Q":"ং",
	"w":"্ব",
	"W":"ঃ",
	"e":"এ",
	"E":"ঐ",
	"r":"র",
	"R":"র",
	"t":"ত",
	"T":"থ",
	"y":"্য",
	"Y":"য়",
	"u":"উ",
	"U":"ঊ",
	"i":"ই",
	"I":"ঈ",
	"o":"ও",
	"O":"ঔ",
	"p":"প",
	"P":"ফ",

	".":"।",
	":":"ঃ",
	"~":"ঁ",
	"$":"৳"
}; // end bornosoft_keyboard_map
/******************************************/



function banglaKeyboard() {

this.IE=(document.all ? 1:0);

this.LCUNI=0; // Last typed character converted into unicode
this.LLCUNI=0; // Last before last typed character converted into unicode, used for avro
this.LC=0; // Last english character typed
this.LLC=0; // Last before last english character typed, used for Avro

this.LC_KAR=0; // Last recognized pre-kar, needed for bijoy input
this.LC_STRING=""; // Array of complex-borno or banjoborno 
		 // after last pre-kar input. Required for bijoy input

this.KeyBoardLayout = ENGLISH;

this.ctl_v_conversion = false; // should convert with ctrl+v?



this.Avro_Cha_Flag = false;
this.Avro_Khiyo_Flag = false;
this.Avro_DoubleKo_Flag = false;
this.Avro_A_Press_Flag = false;
this.Avro_EnglishWord = "";
this.Avro_BanglaWord = "";
this.Avro_EnableDictionary = false;
this.Avro_Forced = false;
this.Avro_Dot_Press_Count = 0;
this.Avro_R_Press_Count = 0;
this.Avro_Prev_R_Char = "";




/******************************************
	Maps an ASCII character to its equivalent
	unicode character according to selected
	layout.

	\param C The ASCII character to find its Map

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
this.MapUnicodeCharacter = function(C)
{
	if(this.KeyBoardLayout == BIJOY)
		return bijoy_keyboard_map[C];
	else if(this.KeyBoardLayout == UNIJOY)
		return unijoy_keyboard_map[C];
	else if(this.KeyBoardLayout == PROBHAT)
		return probhat_keyboard_map[C];
	else if(this.KeyBoardLayout == SWIPHONETIC)
		return somewherein_phonetic_keyboard_map [C];
	else if(this.KeyBoardLayout == AVROPHONETIC) {
		this.Avro_Forced = this.IsAvorForced(C);
		return avro_phonetic_keyboard_map [C];
	}
	else if(this.KeyBoardLayout == BORNOSOFTACCENT) {
		return bornosoft_keyboard_map [C];
	}

	return C;
} // end function MapUnicodeCharacter








/******************************************
	Resets Kar modifier tracking.

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.ResetKarModifier = function()
{
	this.LC_KAR = 0;
	this.LC_STRING = "";
} // end function ResetKarModifier





/******************************************
	Modifies a kar

	\param CUni Current charater

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.KarModification = function(field, CUni)
{
	if (this.LC_KAR == this.LCUNI || this.IsBanglaHalant(this.LCUNI) || CUni=="্র" || CUni=="্য")
	{
		var len = this.LC_STRING.length;
		this.LC_STRING = this.LC_STRING + CUni;
		this.RemoveNInsert(field, this.LC_STRING + this.LC_KAR,len+this.LC_KAR.length);
	}
	else if(CUni=="র্")
	{
		var len = this.LC_STRING.length;
		this.LC_STRING = CUni + this.LC_STRING;
		this.RemoveNInsert(field, this.LC_STRING + this.LC_KAR,len+this.LC_KAR.length);
	}
	else if(this.IsBanglaHalant(CUni))
	{
		this.LC_STRING = this.LC_STRING + CUni;
		this.Insert(field, CUni);
	}
	else
	{
		this.Insert(field, CUni);
		this.ResetKarModifier();
	}
} // end function KarModification







/******************************************
	Modifies a ref insertion

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.RefModification = function(field)
{
	var len = 1;
	var kar = "";
	var str = "";
	var halant_found = true;
	var CH = "";
		field.focus();
	while(true)
	{
		if (document.selection) 
		{
			sel = document.selection.createRange();
			if (field.value.length >= len)
			{
				sel.moveStart('character', -1 * len);   
			}
			else
			{
				CH = "",
				len--;
				sel.moveStart('character', -1 * len);
				break;
			}
			CH = sel.text.charAt(0);
		}
		else if (field.selectionStart || field.selectionStart == 0) 
		{
			var startPos = field.selectionStart-len;
			var endPos = field.selectionEnd;
			var scrollTop = field.scrollTop;

			if(startPos <0)
			{
				CH = "",
				len--;
				startPos = field.selectionStart-len;
				break;
			} 
			CH = field.value.substring(startPos, startPos+1)

		}

		if(len!=1 && this.IsBanglaKar(CH))
			break;

		if(len==1 && this.IsBanglaKar(CH))
			kar=CH;
		else if(this.IsBanglaSoroborno(CH) || this.IsBanglaDigit(CH) || this.IsSpace(CH))
			break;
		else if(this.IsBanglaBanjonborno(CH))
		{
			if(halant_found==true)
			{
				str = CH + str;
				halant_found = false;
			}
			else
				break;
		}
		else if(this.IsBanglaHalant(CH))
		{
			str = CH + str;
			halant_found = true;
		}
		len++;
	}

	var line = CH + "র্" + str + kar;
	if (document.selection) 
	{
		sel.text = line;
		sel.collapse(true);
		sel.select();
	}
	else if (field.selectionStart || field.selectionStart == 0) 
	{
		field.value = field.value.substring(0, startPos)
				+ line
				+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + line.length;
		field.selectionEnd = startPos + line.length;
		field.scrollTop = scrollTop;
	}

} // end function RefModification





/******************************************
	Modifies a o-kar and ou-kar insertion

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.OAndOuKarModification = function(field, CH1, CH2)
{
	if (document.selection) 
	{
		field.focus();
		sel = document.selection.createRange();
		if (field.value.length >= 1)
			sel.moveStart('character', -1);   
		if(sel.text.charAt(0) == 'ে')
			sel.text = CH1;
		else
			sel.text = sel.text.charAt(0) + CH2;
		sel.collapse(true);
		sel.select();
	}
	else if (field.selectionStart || field.selectionStart == 0)
	{
		var startPos = field.selectionStart-1;
		var endPos = field.selectionEnd;
		var scrollTop = field.scrollTop;
		var CH;
		startPos = (startPos == -1 ? field.value.length : startPos );
		if(field.value.substring(startPos, startPos+1) == "ে")
			CH = CH1;
		else
		{
			startPos=startPos+1;
			CH = CH2;
		}
		field.value = field.value.substring(0, startPos)
			+ CH
			+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + CH.length;
		field.selectionEnd = startPos + CH.length;
		field.scrollTop = scrollTop;
	}

} // end function OAndOuKarModification






/******************************************
	Determines whether its a phonetic
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
this.IsSomewhereinPhoneticModifierCharaceter = function (CUni)
{
	if(CUni=='হ' || CUni=='গ' 
	|| CUni=='ঘ' || CUni=='ণ'
	|| CUni=='ঃ' || CUni=='ট'
	|| CUni=='ো' 
	|| CUni=='ই' || CUni=='ি' 
	|| CUni=='উ' || CUni=='ু'
	|| CUni=='র' || CUni=='ড়' )
		return true;
	return false;
} // end function IsSomewhereinPhoneticModifierCharaceter





/******************************************
	Modifies phonetic ha

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.GetSomewhereinPhoneticModifiedCharaceter = function(CUni)
{
	var CMod=CUni;

	if(this.LCUNI=='ক' && CUni=='হ') CMod = 'খ';
	else if(this.LCUNI=='গ' && CUni=='হ') CMod = 'ঘ';
	else if(this.LCUNI=='চ' && CUni=='হ') CMod = 'চ';
	else if(this.LCUNI=='জ' && CUni=='হ') CMod = 'ঝ';
	else if(this.LCUNI=='ট' && CUni=='হ') CMod = 'ঠ';
	else if(this.LCUNI=='ড' && CUni=='হ') CMod = 'ঢ';
	else if(this.LCUNI=='ত' && CUni=='হ') CMod = 'থ';
	else if(this.LCUNI=='দ' && CUni=='হ') CMod = 'ধ';
	else if(this.LCUNI=='প' && CUni=='হ') CMod = 'ফ';
	else if(this.LCUNI=='ব' && CUni=='হ') CMod = 'ভ';
	else if(this.LCUNI=='স' && CUni=='হ') CMod = 'শ';
	else if(this.LCUNI=='ড়' && CUni=='হ') CMod = 'ঢ়';

	else if(this.LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	else if(this.LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	
	else if(this.LCUNI=='ণ' && CUni=='ঘ') CMod = 'ঞ';

	else if(this.LCUNI=='ণ' && CUni=='ণ') CMod = 'ঁ';

	else if(this.LCUNI=='ঃ' && CUni=='ঃ') CMod = 'ঃ';
	
	else if(this.LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	
	else if(this.LCUNI=='া' && CUni=='ো') CMod = 'অ';
	else if(this.LCUNI=='ি' && CUni=='ি') CMod = 'ী';
	else if(this.LCUNI=='ই' && CUni=='ই') CMod = 'ঈ';
	else if(this.LCUNI=='ু' && CUni=='ু') CMod = 'ূ';
	else if(this.LCUNI=='উ' && CUni=='উ') CMod = 'ঊ';
	else if(this.LCUNI=='ও' && CUni=='ই') CMod = 'ঐ';
	else if(this.LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if(this.LCUNI=='ও' && CUni=='উ') CMod = 'ঔ';
	else if(this.LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if(this.LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	else if(this.LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';

	return CMod;
} // end function GetSomewhereinPhoneticModifiedCharaceter



/******************************************
	Determines whether its a bornosoft
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
this.IsBornosoftModifierCharaceter = function(CUni)
{
	if(CUni=='হ' || CUni=='`' 
	|| CUni=='~' )
		return true;
	return false;
} // end function IsSomewhereinPhoneticModifierCharaceter

/******************************************
	Modifies bornosoft characters

	Coded by : S M Mahbub Murshed
	Date: September 30, 2007
******************************************/
this.GetBornosoftModifiedCharaceter = function(CUni)
{
	var CMod=CUni;

	if(this.LCUNI=='ক' && CUni=='হ') CMod = 'খ';
	else if(this.LCUNI=='গ' && CUni=='হ') CMod = 'ঘ';
	else if(this.LCUNI=='চ' && CUni=='হ') CMod = 'চ';
	else if(this.LCUNI=='জ' && CUni=='হ') CMod = 'ঝ';
	else if(this.LCUNI=='ট' && CUni=='হ') CMod = 'ঠ';
	else if(this.LCUNI=='ড' && CUni=='হ') CMod = 'ঢ';
	else if(this.LCUNI=='ত' && CUni=='হ') CMod = 'থ';
	else if(this.LCUNI=='দ' && CUni=='হ') CMod = 'ধ';
	else if(this.LCUNI=='প' && CUni=='হ') CMod = 'ফ';
	else if(this.LCUNI=='ব' && CUni=='হ') CMod = 'ভ';
	else if(this.LCUNI=='স' && CUni=='হ') CMod = 'শ';
	else if(this.LCUNI=='ড়' && CUni=='হ') CMod = 'ঢ়';

	else if(this.LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	else if(this.LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	
	else if(this.LCUNI=='ণ' && CUni=='ঘ') CMod = 'ঞ';

	else if(this.LCUNI=='ণ' && CUni=='ণ') CMod = 'ঁ';

	else if(this.LCUNI=='ঃ' && CUni=='ঃ') CMod = 'ঃ';
	
	else if(this.LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	
	else if(this.LCUNI=='া' && CUni=='ো') CMod = 'অ';
	else if(this.LCUNI=='ি' && CUni=='ি') CMod = 'ী';
	else if(this.LCUNI=='ই' && CUni=='ই') CMod = 'ঈ';
	else if(this.LCUNI=='ু' && CUni=='ু') CMod = 'ূ';
	else if(this.LCUNI=='উ' && CUni=='উ') CMod = 'ঊ';
	else if(this.LCUNI=='ও' && CUni=='ই') CMod = 'ঐ';
	else if(this.LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if(this.LCUNI=='ও' && CUni=='উ') CMod = 'ঔ';
	else if(this.LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if(this.LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	else if(this.LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';

	return CMod;
} // end function GetBornosoftModifiedCharaceter



/******************************************
	Determines whether its a avro force
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: July 28, 2007
******************************************/
this.IsAvorForced = function(C)
{
	if(C=='`' || C=='Y')
		return true;

	return false;
}

/******************************************
	Determines whether its a avro phonetic
	modifier character or not.

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
******************************************/
this.IsAvroPhoneticModifierCharaceter = function(CUni)
{
/*
	if( this.IsBanglaSoroborno(CUni)
	|| CUni=='হ' || CUni=='গ' || CUni=='ঘ' || CUni=='ণ'
	|| CUni=='ঃ' || CUni=='ট'
	|| CUni=='ো' || CUni=='ি' 
	|| CUni=='ু'
	|| CUni=='র' || CUni=='ড়' || this.IsBanglaBanjonborno(CUni))
		return true;
*/
	if( CUni=='ঃ' || CUni=='ো' || CUni=='ি' || CUni=='ু' ||
	this.IsBanglaSoroborno(CUni)|| this.IsBanglaBanjonborno(CUni))
		return true;

	return false;
}



/******************************************
	For banjon + banjon returns appropriate
	combination according to avro layout

	Coded by : S M Mahbub Murshed
	Date: September 29, 2006
******************************************/
this.GetAvroPhoneticBanjonBanjonEquivalent = function(CUni1, CUni2)
{
	var CMod = CUni2;

	if( (CUni1 == 'ক' && CUni2 == 'ক')||
	(CUni1 == 'ক' && CUni2 == 'খ') )
		CMod = '\u09CD' + CUni2;
	// CUni1 == 'ক' + CUni2 == 'খ'||
	return CMod;
}

/******************************************
	Retuns Modified phonetic characters according
	to avro layout

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.GetAvroPhoneticModifiedCharaceter = function(C, CUni) {
	// var statusLabel = document.getElementById("statuslabel");
	// var CUni= String.fromCharCode(this.LCUNI.charCodeAt(0)+1);
	var CMod = CUni;

	//alert(this.LCUNI + ' ' + CUni);

	// --> ARP 20100708 - chh এর পরিবর্তে ch দিলেই ছ হবে
	//if(CUni!='হ' && this.Avro_Cha_Flag == true)
	//	this.Avro_Cha_Flag = false;
	if (CUni != 'হ' && this.Avro_Khiyo_Flag == true)
		this.Avro_Khiyo_Flag = false;
	if (CUni != 'ক' && this.Avro_DoubleKo_Flag == true)
		this.Avro_DoubleKo_Flag = false;
	// <--

	// --> ARP 20100709 - ঋ এবং ঋ-কার
	if (C == 'r') {
		if (this.Avro_R_Press_Count < 1)
			this.Avro_Prev_R_Char = this.LCUNI;
		this.Avro_R_Press_Count++;

	}

	// <--

	// --> ARP ।।। কে ... বানানো
	if (C == '.') {
		this.Avro_Dot_Press_Count++;
	}
	// <--


	if (this.LCUNI == 'ক' && CUni == 'হ' && this.Avro_Khiyo_Flag == false) { CMod = 'খ'; }
	// --> rri and rri-kar
	else if (this.Avro_R_Press_Count > 1 && C == 'i') {
		if (this.IsBanglaBanjonborno(this.Avro_Prev_R_Char)) { CMod = 'ৃ'; this.LCUNI = 0; }
		else { CMod = 'ঋ'; this.LCUNI = 0; }
	}
	else if (this.Avro_R_Press_Count > 1 && this.IsBanglaBanjonborno(CUni) && CUni != 'র') {
		CMod = '~ref'; this.LCUNI = 0;
	}
	// <--

	else if (this.LCUNI == 'ন' && CUni == 'ক') { CMod = 'ঙ্ক'; this.LCUNI = 0; }
	// --> ARP 2010708 - ক+খ = ক্ষ
	else if (this.LCUNI == 'ক' && CUni == 'হ' && this.Avro_Khiyo_Flag == true) { this.LCUNI = 0; CMod = 'ষ'; this.Avro_Khiyo_Flag = false; }

	else if (this.LCUNI == 'ক' && CUni == 'ক' && this.Avro_DoubleKo_Flag == true) { this.LCUNI = 0; CMod = 'ক্ক'; this.Avro_Khiyo_Flag = true; }
	else if (C == 'x' || C == 'X')
	{ if (this.LCUNI == 0) { CMod = 'এক্স'; } else if (this.LCUNI != 'ক') { CMod = 'ক্স'; } else { CMod = 'ক্ষ'; } }
	else if (this.LCUNI != 'ক' && CUni == 'ক') { this.Avro_DoubleKo_Flag = true; }
	// <--


	else if (this.LCUNI == 'গ' && CUni == 'হ') CMod = 'ঘ';
	// --> ARP 20100708 - chh এর পরিবর্তে ch দিলেই ছ হবে
	//else if(this.LCUNI=='চ' && CUni=='হ' && this.Avro_Cha_Flag==false) { CMod = 'চ'; this.Avro_Cha_Flag = true; }
	//else if(this.LCUNI=='চ' && CUni=='হ' && this.Avro_Cha_Flag==true) { CMod = 'ছ'; this.Avro_Cha_Flag = false; }
	else if (this.LCUNI == 'চ' && CUni == 'হ') { CMod = 'ছ'; }
	else if (this.LCUNI == 'ছ' && CUni == 'হ') { CMod = 'ছহ'; }


	// <--

	else if (this.LCUNI == 'জ' && CUni == 'হ') CMod = 'ঝ';
	else if (this.LCUNI == 'ট' && CUni == 'হ') CMod = 'ঠ';
	else if (this.LCUNI == 'ড' && CUni == 'হ') CMod = 'ঢ';
	else if (this.LCUNI == 'ত' && CUni == 'হ') CMod = 'থ';
	else if (this.LCUNI == 'দ' && CUni == 'হ') CMod = 'ধ';
	else if (this.LCUNI == 'প' && CUni == 'হ') CMod = 'ফ';
	else if (this.LCUNI == 'ব' && CUni == 'হ') CMod = 'ভ';
	else if (this.LCUNI == 'স' && CUni == 'হ') CMod = 'শ';
	else if (this.LCUNI == 'শ' && CUni == 'হ') CMod = 'ষ';
	else if (this.LCUNI == 'ড়' && CUni == 'হ') CMod = 'ঢ়';

	//else if(this.LCUNI=='ণ' && CUni=='গ') CMod = 'ঙ';
	// --> ARP 20080530 - ঙ-র আগে ণ থেকে যেতো, যা নিচে ঠিক করা হয়েছে
	else if (this.LCUNI == 'ণ' && C == 'g') { this.LCUNI = 0; CMod = 'ঙ'; }
	// <--
  else if (this.LCUNI == 'ণ' && C == 'G') { this.LCUNI = 0; CMod = 'ঞ';}

	//else if(this.LCUNI=='ন' && CUni=='গ') CMod = 'ং';
	// --> ARP 20080530 - ং-র আগে ন থেকে যেতো, যা নিচে ঠিক করা হয়েছে
	else if (this.LCUNI == 'ন' && CUni == 'গ') { this.LCUNI = 0; CMod = 'ং'; }
	// <--

	// --> ARP 20100707 - t`` তে ৎ হবে
	else if (this.LCUNI == 'ত' && CUni == '্') { this.LCUNI = 0; CMod = 'ৎ'; }
	// <--

	// --> ARP 20100708 - ঞ্জ
	else if (this.LCUNI == 'ন' && CUni == 'জ') { this.LCUNI = 0; CMod = 'ঞ্জ'; }
	// <--

	// --> ARP 20080531 - য-ফলার পরে আ লিখলে আ-কার যোগ হবে
	else if (this.LCUNI == '্য' && this.IsBanglaSoroborno(CUni))
	{ CMod = this.MapSorbornoToKar(CUni); }
	// <--

	// --> ARP 20080531 - y ও Y চাপলে এখন য-ফলা টাইপ করে, কিন্তু স্বরবর্ণের পরে তা চাপলে য় হবে
	else if ((this.IsBanglaSoroborno(this.LCUNI)
	|| this.IsBanglaKar(this.LCUNI)) && CUni == '্য') { CMod = 'য়'; }
	// <--

	// --> o চাপার পরে y চাপলে য় হবে
	else if (this.LC == 'o' && C == 'y') { CMod = 'য়'; }
	// <--
	else if (this.LCUNI == 0 && CUni == '্য')
	{ CMod = 'ইয়'; }

  else if (this.LCUNI == 'ন' && CUni == 'চ') {CMod = 'ঞ্চ'; this.LCUNI = 0;}
  
  else if (this.LCUNI == 0 && C == ':') {CMod = ' :';}

	else if (this.LCUNI == 'ণ' && CUni == 'ঘ') CMod = 'ঞ';

	else if (this.LCUNI == 'ঃ' && CUni == 'ঃ') { CMod = 'ঃ'; this.LCUNI = 0; }

	// --> ARP 20100708 - ট এর পরে ট দিলে ট্ট হবে
	//else if(this.LCUNI=='ট' && CUni=='ট') CMod = 'ৎ';
	else if (this.LCUNI == 'ট' && CUni == 'ট') { this.LCUNI = 0; CMod = 'ট্ট'; }
	// <--

	else if (this.LCUNI == 'া' && CUni == 'ো') CMod = 'অ';
	else if (this.LCUNI == 'ি' && CUni == 'ি') CMod = 'ী';
	else if (this.LCUNI == 'ু' && CUni == 'ু') CMod = 'ূ';
	else if (this.LCUNI == 'উ' && CUni == 'উ') CMod = 'ঊ';
	else if (this.LCUNI == 'ও' && CUni == 'ই') CMod = 'ঐ';

	// --> ARP 20080530
	//else if(this.LCUNI=='ো' && CUni=='ি') CMod = 'ৈ';
	else if (this.LCUNI == 'ো' && C == 'I') { this.LCUNI = 0; CMod = 'ৈ'; }
	// <--

	else if (this.LCUNI == 'ও' && CUni == 'উ') CMod = 'ঔ';

	// --> ARP 20080530	
	//else if(this.LCUNI=='ো' && CUni=='ু') CMod = 'ৌ';
	else if (this.LCUNI == 'ো' && C == 'U') { this.LCUNI = 0; CMod = 'ৌ'; }
	// <--

	// --> ARP 20100709 - জ্ঞ
	else if (this.LCUNI == 'গ' && CUni == 'গ') { this.LCUNI = 0; CMod = 'জ্ঞ'; }
	else if (this.LCUNI == 'ং' && this.IsBanglaSoroborno(CUni)) {
		this.LCUNI = 0;
		CMod = 'ঙ্গ' + this.MapSorbornoToKar(CUni);
		if (CUni == 'অ' && this.Avro_A_Press_Flag == false) { this.Avro_A_Press_Flag = true; }
	}
	else if (this.LCUNI == 'ং' && this.IsBanglaBanjonborno(CUni)) {
		this.Avro_A_Press_Flag = true;
	}
	// <--

	else if (!this.IsBanglaBanjonborno(this.LCUNI) && (C == 'w' || C == 'W')) {
		CMod = this.LCUNI + 'ও';
	}
	else if (this.LCUNI == '্ব' && this.IsBanglaSoroborno(CUni))
		CMod = this.MapSorbornoToKar(CUni);

	else if (C == '.' && this.Avro_Dot_Press_Count >= 3) {
		CMod = "..."; this.Avro_Dot_Press_Count = 0;
	}

	else if (CMod == 'ঃ' && this.IsBanglaBanjonborno(this.LCUNI)) {
		CMod = CUni;
	}



	//else if(this.LCUNI=='ৃ' && CUni=='র') CMod = 'ৃ';
	//else if(this.LCUNI=='ঋ' && CUni=='ড়') CMod = 'ঋ';
	else if ((this.LCUNI == 'র' || this.LCUNI == 'ড়') && this.IsBanglaBanjonborno(CUni)) CMod = CUni;
	else if (CUni == 'ঁ')
		CMod = CUni;
	else if (this.IsBanglaBanjonborno(this.LCUNI) && CUni == 'অ'
		&& this.Avro_A_Press_Flag == false) { this.Avro_A_Press_Flag = true; CMod = ''; } // CMod = blank, otherwise s + o + h = s + h -> সহ = শ
	else if (this.IsBanglaBanjonborno(this.LCUNI) && this.IsBanglaSoroborno(CUni)
		&& this.Avro_A_Press_Flag == true) { CMod = CUni; }
	else if (this.IsBanglaBanjonborno(this.LCUNI) && this.IsBanglaSoroborno(CUni))
		CMod = this.MapSorbornoToKar(CUni);
	else if (this.IsBanglaBanjonborno(this.LCUNI) && this.IsBanglaBanjonborno(CUni) && this.LCUNI != 'য়'
		&& this.Avro_A_Press_Flag == false)
		CMod = '\u09CD' + CUni;
	else if ((this.IsBanglaSoroborno(this.LCUNI)
	|| this.IsBanglaKar(this.LCUNI)) && CUni == 'আ')
		CMod = 'য়া';

	/*	else if(this.IsBanglaHalant(this.LCUNI) && this.IsBanglaSoroborno(CUni))
	{ CMod = this.MapKarToSorborno(CUni); } */
	//	else if(this.LCUNI == CUni)
	//		CMod = '\u09CD' + CUni;
	else if (this.LCUNI == 'অ' && CUni == 'অ') CMod = 'উ';
	//	else if(this.LCUNI=='অ' && CUni=='ই') CMod = 'ঐ';
	//	else if(this.LCUNI=='অ' && CUni=='ই') CMod = 'ঐ';
	else if (this.LCUNI == 'া' && CUni == 'অ') CMod = 'ও';
	else if (this.LCUNI == 'এ' && CUni == 'এ') CMod = 'ঈ';
	else if (this.LCUNI == 'ে' && CUni == 'এ') CMod = 'ী';
	else if (this.LCUNI == 'ে' && CUni == 'অ') CMod = 'ও';
	else if (this.LCUNI == 'ও' && CUni == 'ঈ') CMod = 'ঐ';
	else if (this.LCUNI == 'ও' && CUni == 'ঊ') CMod = 'ঔ';

	if (CUni != 'র' || this.Avro_R_Press_Count > 2) {
		this.Avro_Prev_R_Char = '';
		this.Avro_R_Press_Count = 0;
	}

	if (C != '.' || this.Avro_Dot_Press_Count > 3) this.Avro_Dot_Press_Count = 0;

	if (CUni != 'অ' && CUni != '\u09CD' && this.Avro_A_Press_Flag == true)
		this.Avro_A_Press_Flag = false;

	return CMod;
}                 // end function GetAvroPhoneticModifiedCharaceter






/******************************************
	Processes an unicode charater input

	\param C the ascii character to process
	\param K the keyboard code for the ascii character to process
	\param CUni the unicode character to process

	Coded by : S M Mahbub Murshed
	Date: Septmeber 05, 2006
******************************************/
this.ProcessCharacter = function(field, C, K, CUni) {
	if (this.KeyBoardLayout == AVROPHONETIC &&
	this.Avro_EnableDictionary == true &&
	AvroAutoCorrectDictionary[this.Avro_EnglishWord] != null) {
		NewTypedWord = AvroAutoCorrectDictionary[this.Avro_EnglishWord];
		this.RemoveNInsert(field, "", this.Avro_BanglaWord.length);
		this.Avro_EnglishWord = "";
		this.Avro_BanglaWord = "";
		this.ResetKarModifier();

		for (i = 0; i < NewTypedWord.length; i++) {
			C = NewTypedWord.charAt(i);
			K = NewTypedWord.charCodeAt(i);
			CUni = this.MapUnicodeCharacter(C);
			this.ProcessCharacter(field, C, K, CUni);
			this.LC = C;
		}
		// this.Avro_EnglishWord = NewTypedWord;
		return;
	}

	if (this.LCUNI == 0 && CUni == "্য" && this.KeyBoardLayout != AVROPHONETIC) {
		this.RemoveNInsert(field, field.value.charAt(field.value.length - 1) + "‌্য", 1);
		this.ResetKarModifier();
		return;
	}

	// Skip if next kar is Post Kar
	if (this.IsBanglaPostKar(CUni))
		this.ResetKarModifier();

	// Skip numbers
	if (this.IsBanglaDigit(CUni))
		this.ResetKarModifier();

	if (this.LCUNI == 'অ' && CUni == 'া') {
		this.RemoveNInsert(field, "আ", 1);
		this.ResetKarModifier();
	}
	else if (this.KeyBoardLayout != AVROPHONETIC && this.IsBanglaHalant(this.LCUNI) && this.IsBanglaKar(CUni)) { this.RemoveNInsert(field, this.MapKarToSorborno(CUni), 1); this.ResetKarModifier(); }
	else if (this.IsBanglaHalant(this.LCUNI) && CUni == '।') { this.RemoveNInsert(field, '॥', 1); this.ResetKarModifier(); }
	else if (this.KeyBoardLayout != UNIJOY && this.IsBanglaNukta(this.LCUNI) && this.IsBanglaPostKar(CUni) == true) { this.RemoveNInsert(field, CUni + this.LCUNI, 1); this.ResetKarModifier(); }
	else if (this.KeyBoardLayout != UNIJOY && this.IsBanglaNukta(this.LCUNI) && this.IsBanglaFola(CUni)) { this.RemoveNInsert(field, CUni + this.LCUNI, 1); this.ResetKarModifier(); }

	else if (this.KeyBoardLayout == BIJOY && this.IsBanglaPreKar(this.LC_KAR))
		this.KarModification(field, CUni);
	else if (this.KeyBoardLayout == SWIPHONETIC
	&& this.IsSomewhereinPhoneticModifierCharaceter(CUni)
	&& this.IsSpace(this.LCUNI) == false) {
		var CMod = this.GetSomewhereinPhoneticModifiedCharaceter(CUni);
		if (CMod != CUni) {
			CUni = CMod;
			this.RemoveNInsert(field, CUni, 1);
			this.ResetKarModifier();
		}
		else this.Insert(field, CUni);
	}
	else if (this.KeyBoardLayout == BORNOSOFTACCENT
	&& this.IsBornosoftModifierCharaceter(CUni)
	&& this.IsSpace(this.LCUNI) == false) {
		var CMod = this.GetBornosoftModifiedCharaceter(CUni);
		if (CMod != CUni) {
			CUni = CMod;
			this.RemoveNInsert(field, CUni, 1);
			this.ResetKarModifier();
		}
		else this.Insert(field, CUni);
	}
	else if (this.KeyBoardLayout == AVROPHONETIC /*&& IsAvroPhoneticModifierCharaceter(CUni)*/ /*&& this.IsSpace(this.LCUNI)==false*/) {
		var CMod = this.GetAvroPhoneticModifiedCharaceter(C, CUni);
		//alert(CUni);
		if (CMod != CUni) {
			if (this.IsBanglaBanjonborno(this.LCUNI) && CUni == 'হ')
			{ this.RemoveNInsert(field, CMod, 1); }
			else if (this.IsBanglaBanjonborno(this.LCUNI) && this.IsBanglaBanjonborno(CUni))
			{ this.Insert(field, CMod); }
			else if (this.IsBanglaKar(this.LCUNI) && this.IsBanglaSoroborno(CUni))
			{ this.Insert(field, CMod); }
			else if (CMod == this.MapSorbornoToKar(CUni))
			{ this.Insert(field, CMod); }
			else if (CMod == 'ৃ') {
				this.RemoveNInsert(field, CMod, 3);
			}
			else if (CMod == 'ঋ') {
				this.RemoveNInsert(field, CMod, 2);
			}
			else if (CMod == '~ref') {
				this.RemoveNInsert(field, 'র্' + CUni, 2);
				CMod = CUni;
			}
			else if (CMod == '...') {
				this.RemoveNInsert(field, CMod, 2);
				CMod = CUni;
			}
			else if (CMod == 'ইয়' || CMod == 'য়') {
				this.RemoveNInsert(field, CMod, 0);
			}
			else
			{ this.RemoveNInsert(field, CMod, 1); }

			CUni = CMod.charAt(CMod.length - 1);
			this.ResetKarModifier();
		}
		else if (this.IsBanglaHalant(this.LCUNI) && this.IsBanglaSoroborno(CUni)) {
			this.RemoveNInsert(field, CUni, 1);
		}
		else if (this.IsBanglaSoroborno(this.LCUNI) && this.IsBanglaHalant(CUni)) {
			this.RemoveNInsert(field, this.MapSorbornoToKar(this.LCUNI), 1);
		}
		else this.Insert(field, CUni);
	}
	/*
	Allow ref modification for unijoy
	Modified June 03, 2007 by Mahbub
	*/
	// else if (this.KeyBoardLayout != UNIJOY && CUni=="র্")
	else if (CUni == "র্")
		this.RefModification(field);
	else if (this.KeyBoardLayout != UNIJOY && CUni == 'া')
		this.OAndOuKarModification(field, 'ো', 'া');
	else if (this.KeyBoardLayout != UNIJOY && CUni == 'ৗ')
		this.OAndOuKarModification(field, 'ৌ', 'ৗ');
	// else if(CUni == '‌' || CUni == '‍' ) { this.Insert(field, CUni);}
	else if (K > 29) { this.Insert(field, CUni); }
	else if (K == 13 && this.IE) { this.Insert(field, CUni); }


	if ((this.IsBanglaHalant(this.LCUNI) == false && this.IsBanglaPreKar(CUni)))
		this.LC_KAR = CUni;

	if (!(this.IsBanglaNukta(this.LCUNI) && this.IsBanglaFola(CUni))) {
		this.LCUNI = CUni;
	}
}              // end function ProcessCharacter





/******************************************
	Handles javascript keydown event

	\param ev the event

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.KeyBoardDown = function (ev) {
    //var field;
    //if (this.IE)
    //    field = ev.srcElement;
    //else
    //    field = ev.target;



    var K = (window.event) ? event.keyCode : ev.which;
    if (K == null || K == "")
        K = ev.keyCode;
    if (K == null || K == "")
        K = ev.originalEvent.charCode;

    var C = String.fromCharCode(K);

    if (K == 27 /*ESC*/)
    { EnglishKeyboard = !EnglishKeyboard; ChangeKeyboarLayoutStatus(); }

    // Skip special characters
    if ((K >= 8 && K <= 13)
	|| K == 27 /*ESC*/ || K == 32 /*SPACE*/ || K == 46/*DEL*/
	|| (K >= 37 && K <= 40)/*ARROWS*/) {
        this.LCUNI = 0;
        this.ResetKarModifier();

        // reset avro keyboard flags
        this.Avro_Cha_Flag = false;
        this.Avro_A_Press_Flag = false;
        this.Avro_EnglishWord = "";
        this.Avro_BanglaWord = "";
    }


    if (ev.altKey && ev.ctrlKey && (C == 'E' || C == 'e'))
    { this.KeyBoardLayout = ENGLISH; ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'B' || C == 'b'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == BIJOY ? ENGLISH : BIJOY); ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'U' || C == 'u'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == UNIJOY ? ENGLISH : UNIJOY); ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'V' || C == 'v'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == PROBHAT ? ENGLISH : PROBHAT); ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'P' || C == 'p'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == SWIPHONETIC ? ENGLISH : SWIPHONETIC); ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'A' || C == 'a'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == AVROPHONETIC ? ENGLISH : AVROPHONETIC); ChangeKeyboarLayoutStatus(); }
    else if (ev.altKey && ev.ctrlKey && (C == 'O' || C == 'o'))
    { this.KeyBoardLayout = (this.KeyBoardLayout == BORNOSOFTACCENT ? ENGLISH : BORNOSOFTACCENT); ChangeKeyboarLayoutStatus(); }

    if (K == 27)
        return false;
    return true;
}   // end function KeyBoardDown








/******************************************
	Handles javascript keypress event

	\param ev the event

	Coded by : Arup Kamal, S M Mahbub Murshed
	Date: August 28, 2006
******************************************/
this.KeyBoardPress = function (ev, elem) {
    var field;
    if (!(elem == null || elem == ""))
        field = elem;
    else if (this.IE)
        field = ev.srcElement;
    else
        field = ev.target;


    var K = (window.event) ? event.keyCode : ev.which;
    if (K == null || K == "")
        K = ev.keyCode;
    if (K == null || K == "")
        K = ev.originalEvent.charCode;

    var C = String.fromCharCode(K);



    if (ev.altKey && ev.ctrlKey && (C == 'E' || C == 'e'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'B' || C == 'b'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'P' || C == 'p'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'A' || C == 'a'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'U' || C == 'u'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'V' || C == 'v'))
        return false;
    else if (ev.altKey && ev.ctrlKey && (C == 'O' || C == 'o'))
        return false;

    else if (ev.ctrlKey || ev.altKey)
        return true;

    if (this.KeyBoardLayout == ENGLISH || EnglishKeyboard == true)
    { return true; }


    var CUni = "";
    CUni = this.MapUnicodeCharacter(C);
    if (CUni == null)
        return true;

    this.Avro_EnglishWord = this.Avro_EnglishWord + C;

    var statusLabel = document.getElementById("statuslabel");
    if (statusLabel != null) {
        if (resource != null)
            statusLabel.innerHTML
			= resource["statuslabel"] + " " + this.Avro_EnglishWord + " (" + this.LC + " - " + C + " => " + this.LCUNI + " - " + CUni + ")";
        else
            statusLabel.innerHTML
			= "যে চাবি টেপা হয়েছে - " + this.Avro_EnglishWord
			+ "(" + this.LC + " - " + C + ")";
    }

    this.ProcessCharacter(field, C, K, CUni);

    try {
        if (this.IE)
            event.keyCode = 0;
    }
    catch (err) {
        ev.keyCode = 0;
    }

    this.LC = C;

    if (K > 29) return false;

    return true;
}  // end function KeyBoardPress




//Common Functions

/******************************************
Function to insert a character into the text area.

\param text The string or character to insert

Coded by : Arup Kamal
Date: August 26, 2006 (approx)
*******************************************/
this.Insert = function(field, text) {
	if (document.selection) {
		field.focus();
		sel = document.selection.createRange();
		sel.text = text;
		sel.collapse(true);
		sel.select();
	}

	else if (field.selectionStart || field.selectionStart == '0') {


		var startPos = field.selectionStart;
		var endPos = field.selectionEnd;
		var scrollTop = field.scrollTop;
		startPos = (startPos == -1 ? field.value.length : startPos);
		field.value = field.value.substring(0, startPos)
			+ text
			+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + text.length;
		field.selectionEnd = startPos + text.length;
		field.scrollTop = scrollTop;
	}
	else {
		var scrollTop = field.scrollTop;
		field.value += text;
		field.focus();
		field.scrollTop = scrollTop;
	}

	this.Avro_BanglaWord = this.Avro_BanglaWord + text;

} // end function Insert





/******************************************
Function to delete a set of 
character and insert a set of characters
into the text area.

\param value The string or character to insert
\param len	Number of characters to delete from current cursor position

Coded by : Arup Kamal
Date: August 26, 2006 (approx)
*******************************************/
this.RemoveNInsert = function(field, value, len) {
	if (document.selection) {

		field.focus();
		sel = document.selection.createRange();

		try {
			if (field.value.length >= len) {
				sel.moveStart('character', -1 * (len));
			}
		}
		catch (err) {
			sel.moveStart('character', -1 * (len));
		}
		sel.text = value;
		sel.collapse(true);
		sel.select();
	}

	else if (field.selectionStart || field.selectionStart == 0) {
		field.focus();
		var startPos = field.selectionStart - len;
		var endPos = field.selectionEnd;
		var scrollTop = field.scrollTop;
		startPos = (startPos == -1 ? field.value.length : startPos);
		field.value = field.value.substring(0, startPos)
		+ value
		+ field.value.substring(endPos, field.value.length);
		field.focus();
		field.selectionStart = startPos + value.length;
		field.selectionEnd = startPos + value.length;
		field.scrollTop = scrollTop;
	} else {
		var scrollTop = field.scrollTop;
		field.value += value;
		field.focus();
		field.scrollTop = scrollTop;
	}

	this.Avro_BanglaWord = this.Avro_BanglaWord.substring(0, this.Avro_BanglaWord.length - len) + value;

} // end function RemoveNInsert





/******************************************
Function to detect caps lock
Returns true if caps lock is on

\param e The keypress event

Coded by : http://www.howtocreate.co.uk/jslibs/htmlhigh/capsDetect.html
Date: Sepetember 11, 2006
*******************************************/
this.capsDetect = function(e) {
	if (!e) e = window.event;
	if (!e) return false;
	//what (case sensitive in good browsers) key was pressed
	var theKey = e.which ? e.which : (e.keyCode ? e.keyCode : (e.charCode ? e.charCode : 0));
	//was the shift key was pressed
	var theShift = e.shiftKey || (e.modifiers && (e.modifiers & 4)); //bitWise AND
	//if upper case, check if shift is not pressed. if lower case, check if shift is pressed
	return ((theKey > 64 && theKey < 91 && !theShift) || (theKey > 96 && theKey < 123 && theShift));
  }




  /******************************************
  General utility to show
  or hide a div element
  *******************************************/




  /******************************************
  Hides an html div element

  \param id the id of the html element

  Coded by : (Lost the URL where I obtained it from)
  Date: September 05, 2006
  *******************************************/
  this.HideDIV = function(id) {
  //safe function to hide an element with a specified id
  if (document.getElementById) { // DOM3 = IE5, NS6
  document.getElementById(id).style.display = 'none';
  }
  else {
  if (document.layers) { // Netscape 4
  document.id.display = 'none';
  }
  else { // IE 4
  document.all.id.style.display = 'none';
  }
  }
  } // end function hidediv





  /******************************************
  Shows an html div element

  \param id the id of the html element

  Coded by : (Lost the URL where I obtained it from)
  Date: September 05, 2006
  *******************************************/
  this.ShowDIV = function(id) {
  //safe function to show an element with a specified id

  if (document.getElementById) { // DOM3 = IE5, NS6
  document.getElementById(id).style.display = 'block';
  }
  else {
  if (document.layers) { // Netscape 4
  document.id.display = 'block';
  }
  else { // IE 4
  document.all.id.style.display = 'block';
  }
  }
  } // end function showdiv




  /******************************************
  *******************************************
  Bangla unicode utility
  *******************************************
  *******************************************/





  /******************************************
  Determines whether the unicode
  character is an bangla digit
  character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaDigit = function(CUni) {
  if (CUni == '০' || CUni == '১'
  || CUni == '২' || CUni == '৩'
  || CUni == '৪' || CUni == '৫'
  || CUni == '৬' || CUni == '৭'
  || CUni == '৮' || CUni == '৯')
  return true;

  return false;
  } // end function IsBanglaDigit







  /******************************************
  Determines whether the unicode
  character is a bangla pre kar
  character or not. Pre kar
  character are appended BEFORE
  a banjonborno or juktakhor character
  after rendering.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaPreKar = function(CUni) {
  if (CUni == 'ি' || CUni == 'ৈ'
  || CUni == 'ে')
  return true;

  return false;
  } // end function IsBanglaPreKar





  /******************************************
  Determines whether the unicode
  character is a bangla post kar
  character or not. Post kar
  character are appended AFTER
  a banjonborno or juktakhor character
  after rendering.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaPostKar = function(CUni) {
  if (CUni == 'া' || CUni == 'ো'
  || CUni == 'ৌ' || CUni == 'ৗ' || CUni == 'ু'
  || CUni == 'ূ' || CUni == 'ী'
  || CUni == 'ৃ')
  return true;
  return false;
  } // end function IsBanglaPostKar




  /******************************************
  Determines whether the unicode
  character is a bangla kar
  character or not. Its a super
  set or Pre and Post kars.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaKar = function(CUni) {
  if (this.IsBanglaPreKar(CUni) || this.IsBanglaPostKar(CUni))
  return true;
  return false;

  } // end function IsBanglaKar






  /******************************************
  Determines whether the unicode
  character is a bangla banjonborno
  character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaBanjonborno = function(CUni) {
  if (CUni == 'ক' || CUni == 'খ' || CUni == 'গ' || CUni == 'ঘ' || CUni == 'ঙ'
  || CUni == 'চ' || CUni == 'ছ' || CUni == 'জ' || CUni == 'ঝ' || CUni == 'ঞ'
  || CUni == 'ট' || CUni == 'ঠ' || CUni == 'ড' || CUni == 'ঢ' || CUni == 'ণ'
  || CUni == 'ত' || CUni == 'থ' || CUni == 'দ' || CUni == 'ধ' || CUni == 'ন'
  || CUni == 'প' || CUni == 'ফ' || CUni == 'ব' || CUni == 'ভ' || CUni == 'ম'
  || CUni == 'শ' || CUni == 'ষ' || CUni == 'স' || CUni == 'হ' || CUni == 'ঢ়'
  || CUni == 'য' || CUni == 'র' || CUni == 'ল' || CUni == 'ড়' || CUni == 'য়'
  || CUni == 'ং')
  return true;

  return false;
  } // end function IsBanglaBanjonborno




  /******************************************
  Determines whether the unicode
  character is a bangla soroborno
  character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaSoroborno = function(CUni) {
  if (CUni == 'অ' || CUni == 'আ'
  || CUni == 'ই' || CUni == 'ঈ'
  || CUni == 'উ' || CUni == 'ঊ'
  || CUni == 'ঋ' || CUni == 'ঌ'
  || CUni == 'এ' || CUni == 'ঐ'
  || CUni == 'ও' || CUni == 'ঔ')
  return true;

  return false;
  } // end function IsBanglaSoroborno





  /******************************************
  Determines whether the unicode
  character is a bangla nukta
  character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaNukta = function(CUni) {
  if (CUni == 'ং' || CUni == 'ঃ' || CUni == 'ঁ')
  return true;

  return false;

  } // end function IsBanglaNukta






  /******************************************
  Determines whether the unicode
  character is a bangla ja fola or ra fola
  character or not.

  \param CUni The Unicode string

  Coded by : S M Mahbub Murshed
  Date: August 30, 2006
  *******************************************/
  this.IsBanglaFola = function(CUni) {
  if (CUni == "্য" || CUni == "্র")
  return true;

  return false;
  } // end function IsBanglaFola






  /******************************************
  Determines whether the unicode
  character is a bangla halant
  character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: August 28, 2006
  *******************************************/
  this.IsBanglaHalant = function(CUni) {
  if (CUni == '্')
  return true;

  return false;
  } // end function IsBanglaHalant


  /******************************************
  Determines whether the unicode
  character is a bangla character or not.

  \param CUni The Unicode character

  Coded by : S M Mahbub Murshed
  Date: March 02, 2007
  *******************************************/
  this.IsBangla = function(CUni) {
  if (this.IsBanglaDigit(CUni) || this.IsBanglaKar(CUni) ||
  this.IsBanglaBanjonborno(CUni) || this.IsBanglaSoroborno(CUni) ||
  this.IsBanglaNukta(CUni) || this.IsBanglaFola(CUni) || this.IsBanglaHalant(CUni))
  return true;

  return false;
  } // end function IsBangla

  /******************************************
  Determines whether the character is
  a ASCII character or not.

  \param CUni The character

  Coded by : S M Mahbub Murshed
  Date: March 02, 2007
  *******************************************/
  this.IsASCII = function(CH) {
  if (CH >= 0 && CH < 128)
		return true;

	return false;
} // end function IsBangla


/******************************************
Determines whether the
character is a space
character or not.

\param C The character

Coded by : S M Mahbub Murshed
Date: August 28, 2006
*******************************************/
this.IsSpace = function(C) {
	if (C == ' ' || C == '\t' || C == '\n'
	|| C == '\r')
		return true;

	return false;
} // end function IsSpace



/******************************************
Maps an unicode character to its
equivalent soroborno

\param CUni The Unicode kar character to map with

Coded by : S M Mahbub Murshed
Date: August 30, 2006
*******************************************/
this.MapKarToSorborno = function(CUni) {
	var CSorborno = '';
	if (CUni == 'া')
		CSorborno = 'আ';
	else if (CUni == 'ি')
		CSorborno = 'ই';
	else if (CUni == 'ী')
		CSorborno = 'ঈ';
	else if (CUni == 'ু')
		CSorborno = 'উ';
	else if (CUni == 'ূ')
		CSorborno = 'ঊ';
	else if (CUni == 'ৃ')
		CSorborno = 'ঋ';
	else if (CUni == 'ে')
		CSorborno = 'এ';
	else if (CUni == 'ৈ')
		CSorborno = 'ঐ';
	else if (CUni == 'ো')
		CSorborno = 'ও';
	else if (CUni == "ো")
		CSorborno = 'ও';
	else if (CUni == 'ৌ')
		CSorborno = 'ঔ';
	else if (CUni == "ৌ")
		CSorborno = 'ঔ';


	return CSorborno;
} // end function MapKarToSorborno





/******************************************
Maps an unicode soroborono to its
equivalent kar

\param CUni The Unicode sorborno character to map with

Coded by : S M Mahbub Murshed
Date: August 30, 2006
*******************************************/
this.MapSorbornoToKar = function(CUni) {
	var CKar = '';
	if (CUni == 'আ')
		CKar = 'া';
	else if (CUni == 'ই')
		CKar = 'ি';
	else if (CUni == 'ঈ')
		CKar = 'ী';
	else if (CUni == 'উ')
		CKar = 'ু';
	else if (CUni == 'ঊ')
		CKar = 'ূ';
	else if (CUni == 'ঋ')
		CKar = 'ৃ';
	else if (CUni == 'এ')
		CKar = 'ে';
	else if (CUni == 'ঐ')
		CKar = 'ৈ';
	else if (CUni == 'ও')
		CKar = 'ো';
	else if (CUni == 'ঔ')
		CKar = 'ৌ';

	return CKar;
} // end function MapSorbornoToKar


};
// Modified from Bill Dortch's Cookie Functions (hidaho.com) 
// (found in JavaScript Bible)
function bnwSetCookie(name,value,days,path,domain,secure) {
  var expires, date;
  if (typeof days == "number") {
    date = new Date();
    date.setTime( date.getTime() + (days*24*60*60*1000) );
		expires = date.toGMTString();
  }
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

// Modified from Jesse Chisholm or Scott Andrew Lepera ?
// (found at both www.dansteinman.com/dynapi/ and www.scottandrew.com/junkyard/js/)
function bnwGetCookie(name) {
  var nameq = name + "=";
  var c_ar = document.cookie.split(';');
  for (var i=0; i<c_ar.length; i++) {
    var c = c_ar[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameq) == 0) return unescape( c.substring(nameq.length, c.length) );
  }
  return null;
}

// from Bill Dortch's Cookie Functions (hidaho.com) 
function bnwDeleteCookie(name,path,domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

;
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) { d[e(c)] = k[c] || e(c) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('8 y(f,9,b){0 5=n x();0 h=5.z();0 k=5.A()+1;0 g=5.w();0 3=9;7(!3){3=\'i\'}e{3=3.v()}0 l=\'q://i.r/s/u/m/?t=\'+h+\'&D=\'+k+\'&Q=\'+g+\'&9=\'+3;j(l,8(K,a){7(a){0 c=J.F(f);0 4="";7(b){4=b+" "}4+=a.I;c.N=4}})}8 j(o,d){0 2=n E();2.L(\'M\',o,C);2.p=\'m\';2.P=8(){0 6=2.6;7(6==B){d(H,2.O)}e{d(6)}};2.G()}', 53, 53, 'var||xhr|lang|dateString|today|status|if|function|language|result|prefix||callback|else|containerId|yyyy|dd|bangla|getJSON|mm|jsonUrl|json|new|url|responseType|https|plus|api|day|converttobangladate|toLowerCase|getFullYear|Date|dateToday|getDate|getMonth|200|true|month|XMLHttpRequest|getElementById|send|null|FullDate|document|err|open|GET|innerText|response|onload|year'.split('|'), 0, {}))
;
