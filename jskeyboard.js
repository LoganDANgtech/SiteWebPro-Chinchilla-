var SwitchBtnsOff = document.querySelectorAll('.tgl-color')

SwitchBtnsOff.forEach(btnoff => {
    btnoff.addEventListener('click', function ChangeColor(){
        var btnOn = document.querySelector('.tgl-color.active')
        btnOn.classList.remove('active');
        btnoff.classList.add('active');
    });
});


const SwitchCap = document.getElementById('tgl-key-caps')
const SwitchText = document.getElementById('tgl-key-text')

SwitchText.addEventListener('click', function(e) {ChangeTarget()});
SwitchCap.addEventListener('click', function(e) {ChangeTarget()});

function ChangeTarget(){
    SwitchText.classList.toggle('active');
    SwitchCap.classList.toggle('active');
};

var btnOn = document.querySelector('.tgl-color.active')

/*const Beckgroundtouchessss = document.querySelector('g:not(.Web_-_Click_Area) > *')
const BackgroundtoucheS = document.querySelectorAll('#W-Click_Area path')
console.log(BackgroundtoucheS)

BackgroundtoucheS.forEach(Backgroundtouche => {
    Backgroundtouche.addEventListener('click', function Changebackground(){
        console.log("coucou");
        Backgroundtouche.attributes.fill.nodeValue = (btnOn.attributes.datahex.nodeValue);
    });
});*/

$(document).ready(function(){
    $('g:not(.Web_-_Click_Area) > *').click(function() {
        console.log(self)
    });
});