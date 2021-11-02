let markerPosition = [new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1)]

AFRAME.registerComponent('marker0handler', {
    schema: {
        id: { type: 'int', default: -1 },
        hasbeenTracked: { default: false }
    },
    init: function() {
        this.el.object3D.visible = "false";
        console.log(this.el.getAttribute('id'));
    },

    tick: function() {
        var data = this.data;
        this.el.sceneEl.querySelector("#mask0").addEventListener('markerFound', () => {
            this.el.object3D.visible = true; //set object visible when first tracked //TODO on click, hide model
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position

        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }

});

AFRAME.registerComponent('marker1handler', {
    schema: {
        id: { type: 'int', default: -1 }
    },

    init: function() {
        this.el.object3D.visible = "false";
    },

    tick: function() {
        var data = this.data;
        this.el.sceneEl.querySelector("#mask1").addEventListener('markerFound', () => {
            this.el.object3D.visible = true; //set object visible when first tracked //TODO on click, hide model
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position
        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }
});

AFRAME.registerComponent('marker2handler', {
    schema: {
        id: { type: 'int', default: -1 }
    },

    init: function() {
        this.el.object3D.visible = "false";

    },

    tick: function() {
        var data = this.data;
        this.el.sceneEl.querySelector('#mask2').addEventListener('markerFound', () => {
            this.el.object3D.visible = true; //set object visible when first tracked //TODO on click, hide model
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position
        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }
});