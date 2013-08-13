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
  	var data = [];
  	for (layer in this.numLayers) {
		var layerId = 'layer' + (Math.round(layer) + 1);
		var thickId = 'thick' + (Math.round(layer) + 1);
		var unitId = 'unit' + (Math.round(layer) + 1);
  		var material = String(document.getElementById(layerId).value);
  		var thick = Number(document.getElementById(thickId).value);
  		var unit = String(document.getElementById(unitId).value);  
  		if (thick.typeOf === NaN) {
  			alert('Thicknesses need to be a number');
  			break;
  		} else if (thick === 0) {
  			alert('The thicknesses needs to be greater than 0');
  			break;
  		} else {
	  		if (unit == 'm') {
	  			thick *= 100;
	  			return thick;
	  		}	else if (unit == 'km') {
	  			thick *= 1000 * 100;
	  			return thick;
	  		} else if (unit == 'mm') {
	  			thick *= 0.1;
	  			return thick;
	  		}
	  		console.log(thick);
	  		data.push({'material':material, 'thickness':thick, 'unit':'cm'});
		}	
	};
  	
  }
  $scope.numberCheck = function() {
  	for (var layer in this.numLayers) {
		var thickId = 'thick' + (Math.round(layer) + 1);
 		var thick = Number(document.getElementById(thickId).value);
  	    if (thick.typeOf === NaN) {
  	    	return 'wrong';
  		} else if (thick === 0 || thick === '') {
  			return 'wrong';
  		} else {
  			return '';
  		}
	}
	}
};
