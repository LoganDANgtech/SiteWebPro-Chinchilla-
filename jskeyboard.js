var SwitchBtnsOff = document.querySelectorAll('.tgl-color')

SwitchBtnsOff.forEach(btnoff => {
    btnoff.addEventListener('click', function ChangeColor(){
        var btnOn = document.querySelector('.tgl-color.active')
        btnOn.classList.remove('active');
        btnoff.classList.add('active');
    });
});

var keyBSteps = document.querySelectorAll('.keyB-step')

keyBSteps.forEach(Step => {
    Step.addEventListener('click', function Choosestep(){
        var Chosenstep = document.querySelector('.keyB-step.active')
        Chosenstep.classList.remove('active')
        Step.classList.add('active')
        var text = Step.attributes.steptxt.nodeValue
        var i = 1;
        function writing() {   
            setTimeout(function() {  
                Step.innerHTML = "<p>" + text.slice(0,i) + "</p>"
                i++;
                if (i < text.length +1) {
                writing();        
                }
            }, 30)
        }
        writing();
        Chosenstep.innerHTML = "<p>" + Chosenstep.attributes.step.nodeValue + "</p>"

        if (Step.id === 'step2'){
            document.querySelector('.customizer-keyboard').style.top = '0'
        }else{
            document.querySelector('.customizer-keyboard').style.top = '-100px'
        }
    })            
})




const SwitchCap = document.getElementById('tgl-key-caps')
const SwitchText = document.getElementById('tgl-key-text')

SwitchText.addEventListener('click', function(e) {ChangeTarget()});
SwitchCap.addEventListener('click', function(e) {ChangeTarget()});

function ChangeTarget(){
    SwitchText.classList.toggle('active');
    SwitchCap.classList.toggle('active');
};

const BackgroundtoucheS = document.querySelectorAll('#W-Key_Base path');
$(document).ready(function(){
    $('g:not(.Web_-_Click_Area) > *').click(function(e) {
        if (SwitchCap.classList[1] === 'active'){
            var loc = e.target.attributes[4].value.slice(0,15)
            BackgroundtoucheS.forEach(Backgroundtouche => {
                if (Backgroundtouche.attributes.d.nodeValue.slice(0,15) === loc){
                    var btnOn = document.querySelector('.tgl-color.active')
                    Backgroundtouche.attributes.fill.nodeValue = (btnOn.attributes.datahex.nodeValue);
                }
            });
        };
    });
});