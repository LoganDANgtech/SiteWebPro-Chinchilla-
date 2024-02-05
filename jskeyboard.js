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
const BackgroundtoucheS = document.querySelectorAll('#W-Key_Base path');
$(document).ready(function(){
    

    function filterDomRectIntersections(element, elementsToTest) {
        return elementsToTest.reduce(function(accumulator, newElement) {
            var overlap = false;
            if (!Array.isArray(element)) {
                element = [element];
            }
            var localBoundingBox = newElement.getBoundingClientRect();
            element.forEach(function(e) {
                var elementRect = e.getBoundingClientRect();
                var _overlap = !(elementRect.right < localBoundingBox.left || elementRect.left > localBoundingBox.right || elementRect.bottom < localBoundingBox.top || elementRect.top > localBoundingBox.bottom);
                if (_overlap) {
                    overlap = true;
                }
            });
            if (overlap) {
                accumulator.push(newElement);
            }
            return accumulator;
        }, []);
    };
    function applyActiveColorToCap(context, capElement) {
        var $capElement = $(capElement);
        var activeTextSelector = context.getActiveTextSelector();
        var $textElements = $(context.filterDomRectIntersections(capElement, $(activeTextSelector).toArray()));
        var textColor;
        if ($.inArray($textElements.first().prop('tagName').toLowerCase(), this.svgTypesToFill.toLowerCase().split(',')) !== -1) {
            textColor = $textElements.first().attr('fill');
        } else {
            textColor = $textElements.find(this.svgTypesToFill).first().attr('fill');
        }
        var showError = false;
        $(capElement).attr('fill', context.activeColor);
        return showError;
    };
    function getActiveTextSelector() {
        return ['g.Alpha_-_' + this.currentAlpha + ' > *', 'g.Alpha_-_' + this.currentAlpha + ' g > *', 'g.OS_-_' + this.currentOs + ' > *', 'g.OS_-_' + this.currentOs + ' g > *', 'g.Mods_-_' + this.currentFunc + ' > *', 'g.Mods_-_' + this.currentFunc + ' g > *'].join(',');
    };


    $('g:not(.Web_-_Click_Area) > *').click(function(e) {
        if (SwitchCap.classList[1] === 'active'){
            var loc = e.target.attributes[4].value.slice(0,15)
            BackgroundtoucheS.forEach(Backgroundtouche => {
                if (Backgroundtouche.attributes.d.nodeValue.slice(0,15) === loc){
                    var btnOn = document.querySelector('.tgl-color.active')
                    Backgroundtouche.attributes.fill.nodeValue = (btnOn.attributes.datahex.nodeValue);
                }
            });
        }else{
            var ccap = self.filterDomRectIntersections(this, $('g.Web_-_Key_Base > path').toArray());
            if (self.currentAlpha != 'Blank') {
                var alphaParents = $(self.filterDomRectIntersections(ccap[0], $('g[class^="Alpha_-_"] > *').toArray()));
                alphaParents.each(function() {
                    self.applyActiveColorToText(self, this);
                });
            }
            if (self.currentFunc != 'Blank') {
                var funcParents = $(self.filterDomRectIntersections(ccap[0], $('g[class^="Mods_-_"] > *').toArray()));
                funcParents.each(function() {
                    self.applyActiveColorToText(self, this);
                });
            }
            if (self.currentOs != 'Blank') {
                var osParents = $(self.filterDomRectIntersections(ccap[0], $('g[class^="OS_-_"] > *').toArray()));
                osParents.each(function() {
                    self.applyActiveColorToText(self, this);
                });
            }
        };
    });
});