AFRAME.registerComponent('spin-object', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#spin-sound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");        
            
            Context_AF.spin()    
            Context_AF.soundElem.components['sound'].stopSound();
            Context_AF.soundElem.components['sound'].playSound();
        });
                
    },
    spin : function() {
        const Context_AF = this;
        
        Context_AF.el.object3D.rotation.y += THREE.Math.degToRad(10);          
    }
});