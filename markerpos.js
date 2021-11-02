let markerPosition = [new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, -1)]
let el0, el1, el2, el3;

AFRAME.registerComponent('marker0handler', {
    schema: {
        id: { type: 'int', default: -1 }
    },
    init: function() {
        this.entity = document.querySelector("#m0");
        this.entity.setAttribute('visible', 'false');
        el0 = document.querySelector("#mask0");
    },

    tick: function() {
        var data = this.data;
        el0.addEventListener('markerFound', () => {
            this.entity = document.querySelector("#m0");
            this.entity.setAttribute('visible', 'true');
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
        this.entity = document.querySelector("#m1");
        this.entity.setAttribute('visible', 'false');
        el1 = document.querySelector("#mask1");
    },

    tick: function() {
        var data = this.data;
        el1.addEventListener('markerFound', () => {
            this.entity = document.querySelector("#m1");
            this.entity.setAttribute('visible', 'true');
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
        this.entity = document.querySelector("#m2");
        this.entity.setAttribute('visible', 'false');
        el2 = document.querySelector("#mask2");
    },

    tick: function() {
        var data = this.data;
        el2.addEventListener('markerFound', () => {
            this.entity = document.querySelector("#m2");
            this.entity.setAttribute('visible', 'true');
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position
        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }
});


AFRAME.registerComponent('marker3handler', {
    schema: {
        id: { type: 'int', default: -1 }
    },

    init: function() {
        this.entity = document.querySelector("#m3");
        this.entity.setAttribute('visible', 'false');
        el3 = document.querySelector("#mask3");
    },

    tick: function() {
        var data = this.data;

        el3.addEventListener('markerFound', () => {
            this.entity = document.querySelector("#m3");
            this.entity.setAttribute('visible', 'true');
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position
        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }
});


AFRAME.registerComponent('marker4handler', {
    schema: {
        id: { type: 'int', default: -1 }
    },

    init: function() {
        this.entity = document.querySelector("#m4");
        this.entity.setAttribute('visible', 'false');
        el4 = document.querySelector("#mask4");
    },

    tick: function() {
        var data = this.data;
        el4.addEventListener('markerFound', () => {
            this.entity = document.querySelector("#m4");
            this.entity.setAttribute('visible', 'true');
            markerPosition[data.id] = this.el.object3D.position; //set marker position to world position
        })

        //glb elements are updated every frame
        document.getElementById('m' + data.id).object3D.position.set(markerPosition[data.id].x, markerPosition[data.id].y, markerPosition[data.id].z); //TODO lerp 
    }
});