/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */
var Layers;
function InputCtrl($scope) {
	$scope.numLayers = [1,2,3];
	// This is an array of the possible materials
  $scope.materials = [
    {"name": " None",
    "value": "none"
     },
    {"name": "Aluminum",
    "value": "Aluminum"
     },
    {"name": "Lead",
    "value": "matPb"
     },
    {"name": "Water",
    "value": "matH2O"
     },
    {"name": "Kevlar",
    "value": "kevlar"
     }
    
  ];
 
  $scope.orderProp = 'name';
  /* This function adds one layer if there are less than 30 layers
   * if there are thirty layers it will tell the user that they can't add anymore.
   */ 
  $scope.addLayer = function() {
    if (this.numLayers.length < 30) {
	    var layerNum = this.numLayers.length + 1;
	    this.numLayers.push(layerNum);
	    Layers = numLayers;
	    return Layers;
  }
  	else {
  		alert('Sorry, no more than 30 layers.');
  	}
 } 	
 /* This function will remove a layer until there is only
  * one layer present. At that point it will alert the user telling
  * them that they need at least on layer.
  */
  $scope.removeLayer = function() {
  	if (this.numLayers.length > 1) {
	  	var layerNum = this.numLayers.length;
	  	this.numLayers.pop(layerNum);
	  	this.Layers = numLayers;
	  	return Layers;
	  } else {
	  	alert('You need at least 1 layer.');
	  }
  }
  //send layer values and thicknesses to server for processing
  $scope.submit = function() {
  	var layer;
  	for (layer in this.numLayers) {
  	//TODO: grab layer info and send it to server. Figure out how to do that.
		var layerId = 'layer' + (Math.round(layer) + 1);
		var thickId = 'thick' + (Math.round(layer) + 1);
		var unitId = 'unit' + (Math.round(layer) + 1);
  		var material = document.getElementById(layerId).value;
  		var thick = document.getElementById(thickId).value;
  		var unit = document.getElementById(unitId).value;  	
  		
  	};
  }
};
