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

SwitchText.addEventListener('click', ChangeTarget());
SwitchCap.addEventListener('click', ChangeTarget());
function ChangeTarget(){
    SwitchText.classList.toggle('active');
    SwitchCap.classList.toggle('active');
}