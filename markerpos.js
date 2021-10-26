AFRAME.registerComponent('mask0', {
    schema: {},
    init: function() {
        var maskPos = document.querySelector('mask0');
        var mask0Pos = mask0.getAttribute('position');

        console.log('position = ' + mask0Pos);
    }
});