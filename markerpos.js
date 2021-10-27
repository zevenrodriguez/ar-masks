let markerPosition = new THREE.Vector3(0, 1, 0);

AFRAME.registerComponent('markerhandler', {
    schema: {
        id: { type: 'int', default: -1 },
        hasbeenTracked: { default: false }
    },
    init: function() {


    },

    tick: function() {
        var data = this.data;
        this.el.sceneEl.addEventListener('markerFound', () => {
            // redirect to custom URL e.g. google.com
            console.log("marker " + data.id + " found")

            markerPosition = this.el.object3D.position;

            console.log(markerPosition.x);

            console.log("marker " + data.id + " position = " + JSON.stringify(markerPosition));


        })
        document.getElementById('m0').object3D.position.set(markerPosition.x, markerPosition.y, markerPosition.z); //TODO lerp 

    }

});