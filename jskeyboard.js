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



/*const Beckgroundtouchessss = document.querySelector('g:not(.Web_-_Click_Area) > *')

console.log(BackgroundtoucheS)


    
*/
const BackgroundtoucheS = document.querySelectorAll('#W-Key_Base path');
$(document).ready(function(){
    $('g:not(.Web_-_Click_Area) > *').click(function(e) {
        var loc = e.target.attributes[4].value.slice(0,15)
        BackgroundtoucheS.forEach(Backgroundtouche => {
            if (Backgroundtouche.attributes.d.nodeValue.slice(0,15) === loc){
                var btnOn = document.querySelector('.tgl-color.active')
                console.log(Backgroundtouche.attributes.fill.nodeValue)
                Backgroundtouche.attributes.fill.nodeValue = (btnOn.attributes.datahex.nodeValue);
            }
            
        });
    });
});