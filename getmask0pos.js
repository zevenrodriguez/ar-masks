var marker0 = document.querySelector("marker-0");

var marker0_pos = marker0.getAttribute("position");

console.log("marker_0 pos: " + marker0_pos);

AFRAME.registerComponent("mask-0", {
    init: function() {
        // your code here - the scene should be ready
        var marker0 = document.querySelector("marker-0");
        var marker0_pos = marker0.getAttribute("position");
        window.location.href = "test.html";
    },
});