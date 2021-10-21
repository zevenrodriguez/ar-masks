AFRAME.registerComponent("marker-distance", {

    tick: function() {
        this.markerDistance(marker)
    },
    markerDistance: function(marker) {

        var marker = document.querySelector(marker)

        markerPos = new THREE.Vector3();
        marker.object3D.getWorldPosition(markerPos);
        console.log("marker pos for " + marker + " is " + markerPos);
    }

});