/*
 * controller.js
 * -------------
 * Author: mfirmin @ github
 * Date: Jul 26 2015
 * 
 * Description: Input: world state, Output: control torques
 *
*/

var primitives = require('./primitives/primitives')

function Controller() {

    this.entities = {};
    this.joints = {};

}


Controller.prototype.constructor = Controller;

Controller.prototype.initialize = function() {

    this.rShoulder_pdc = new primitives.PDController(-.3);

};

Controller.prototype.step = function(state) {

    return {'rShoulder': -this.rShoulder_pdc(state.joints.rShoulder.rot[2], state.joints.rShoulder.omega[2]) };

};

module.exports = Controller;
