var buttonsValue = document.getElementsByClassName('btn');
var displayValue = document.getElementById('calculatordisplay');
var operationDisplay = document.getElementById('operationsdisplay');
var resetButton = document.getElementById('resetbutton');
var delButton = document.getElementById('delbutton');

var text='';
var osszeg=0;
var muveletekEgyben = [];
var muvSzoveg='';

for (var gombok of buttonsValue) {
    gombok.onclick = function(e) {
        var idErtek = e.target.getAttribute('id');
        if ((idErtek==1) || (idErtek==2) || (idErtek==3) || (idErtek==4) || (idErtek==5) || (idErtek==6) || (idErtek==7) || (idErtek==8) || (idErtek==9) || (idErtek==0)) {
            addText=idErtek;
            text=text+addText;
            displayTextWrite(text);
        }
        if (idErtek=='osszeadas') {
            // oszeadás
            var muv = '+';
            arryPush(muv);
        } 
        else if (idErtek=='kivonas') {
            // kivonás
            var muv = '-';
            arryPush(muv);
        } 
        else if (idErtek=='szorzas') {
            // szorzás
            var muv = '*';
            arryPush(muv);
        }
        else if (idErtek=='osztas') {
            // osztás
            var muv = '/';
            arryPush(muv);
        }
        else if (idErtek=='eggyelo') {
            // egyellő
            if ( muveletekEgyben.length>0 || osszeg!=0) {
                var muv = 'vege';
                arryPush(muv);
                arrayAddition();
            }
        }
        else if (idErtek=='vesszo') {
            // vessző
            if (text.length>0) {
            text=text+'.';
            } else { text='0.'; }
            displayTextWrite(text);
        }
    }
}

var arryPush = (muvelet) => {
    ertekBeir=parseFloat(text);
    if (!isNaN(ertekBeir)) {
        muveletekEgyben.push(ertekBeir);
        muveletekEgyben.push(muvelet);
        text='';
        displayTextWrite(text);
        operationTextWrite();
    }
}

var arrayAddition = () => {
    var ertek=0;
    for (var n=0; n<muveletekEgyben.length; n=n+2) {
        if (n==0) {
            ertek=muveletekEgyben[n];
        }        
        if (muveletekEgyben[n+1]=='+') {
            ertek=ertek+muveletekEgyben[n+2];
        }
        if (muveletekEgyben[n+1]=='-') {
            ertek=ertek-muveletekEgyben[n+2];
        }
        if (muveletekEgyben[n+1]=='*') {
            ertek=ertek*muveletekEgyben[n+2];
        }
        if (muveletekEgyben[n+1]=='/') {
            ertek=ertek/muveletekEgyben[n+2];
        }
    }
    text=ertek;
    muveletekEgyben = [];
    displayTextWrite(text);
    operationTextWrite();
}

var displayTextWrite = (textIn) => {
        //ertekBeir=parseFloat(text);
    if (text=='') {
        displayValue.innerHTML = '<p>0</p>';
    } else {
        displayValue.innerHTML = '<p>'+parseFloat(textIn)+'</p>';
    }
}

var operationTextWrite = () => {
    for (var muvKi of muveletekEgyben) {
        muvSzoveg += '<p>'+muvKi+'</p>';
    }
    operationDisplay.innerHTML = '<p>'+muvSzoveg+'</p>';
    muvSzoveg='';
}

resetButton.onclick = () => {
    location.reload();
}

delButton.onclick = () => {
    let ujText='';
    if (text.length>0) {
        for (let n=0; n<text.length-1; ++n) {
            ujText+=text[n];
        }
    text=ujText;
    displayTextWrite(text);
    }
}

// Keyboard
document.addEventListener('keydown', function(keyHoz) {

    if(keyHoz.keyCode == 97) {
        // 1
        addText=1;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 98) {
        // 2
        addText=2;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 99) {
        // 3
        addText=3;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 100) {
        // 4
        addText=4;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 101) {
        // 5
        addText=5;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 102) {
        // 6
        addText=6;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 103) {
        // 7
        addText=7;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 104) {
        // 8
        addText=8;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 105) {
        // 9
        addText=9;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 96) {
        // 0
        addText=0;
        text=text+addText;
        displayTextWrite(text);
    }
    if(keyHoz.keyCode == 107) {
        // oszeadás
        var muv = '+';
        arryPush(muv);
    } 
    else if (keyHoz.keyCode == 109) {
        // kivonás
        var muv = '-';
        arryPush(muv);
    } 
    else if (keyHoz.keyCode == 106) {
        // szorzás
        var muv = '*';
        arryPush(muv);
    }
    else if (keyHoz.keyCode == 111) {
        // osztás
        var muv = '/';
        arryPush(muv);
    }
    else if (keyHoz.keyCode == 13) {
        // egyellő
        if ( muveletekEgyben.length>0 || osszeg!=0) {
            var muv = 'vege';
            arryPush(muv);
            arrayAddition();
        }
    }
    else if (keyHoz.keyCode == 110) {
        // vessző
        if (text.length>0) {
        text=text+'.';
        } else { text='0.'; }
        displayTextWrite(text);
    }
});