var arToolkitSource = new THREEx.ArToolkitSource({

    sourceType: 'webcam',
})

arToolkitSource.init(function onReady() {

    console.log(arToolkitContext.arController);
    if (arToolkitContext.arController !== null) {
        arToolkitContext.arController.addEventListener('getMarker', function(ev) {
            console.log('marker pos: ', ev.data.marker.pos);
        });
    }
})