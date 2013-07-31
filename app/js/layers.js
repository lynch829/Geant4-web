/**
 * @author Christian Lambert
*/
// Material colors 
var aluminum = '#999999'
var water = '#66CCFF';
var lead = '#3D3D3D';
var kevlar

var layerCanvas = document.getElementById("layerCanvas");
var layers = layerCanvas.getContext("2d");
layers.fillStyle=water;
layers.fillRect(230,75,20,20);
layers.fillStyle=aluminum;
layers.fillRect(205,65,20,40);
