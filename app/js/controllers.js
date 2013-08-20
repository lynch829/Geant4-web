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
    "value": "water"
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
	    $scope.layerNum = this.numLayers.length + 1;
	    this.numLayers.push(this.layerNum);
	    $scope.Layers = this.numLayers;
	    return this.Layers;
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
	  	$scope.layerNum = this.numLayers.length;
	  	this.numLayers.pop(this.layerNum);
	  	this.Layers = this.numLayers;
	  	return this.Layers;
	  } else {
	  	alert('You need at least 1 layer.');
	  }
  }
  //send layer values and thicknesses to server for processing
  $scope.submit = function() {
  	$scope.layer;
  	for (layer in this.numLayers) {
		$scope.layerId = 'layer' + (Math.round(layer) + 1);
		$scope.thickId = 'thick' + (Math.round(layer) + 1);
		$scope.unitId = 'unit' + (Math.round(layer) + 1);
  		$scope.material = String(document.getElementById(this.layerId).value);
  		$scope.thick = Number(document.getElementById(this.thickId).value);
  		$scope.unit = String(document.getElementById(this.unitId).value);  
  		if (this.thick.typeOf === NaN) {
  			alert('Thicknesses need to be a number');
  			break;
  		} else if (this.thick === 0) {
  			alert('The thicknesses needs to be greater than 0');
  			break;
  		} else {
	  		if (this.unit == 'm') {
	  			this.thick *= 100;
	  			return this.thick;
	  		}	else if (this.unit == 'km') {
	  			this.thick *= 1000 * 100;
	  			return this.thick;
	  		} else if (this.unit == 'mm') {
	  			this.thick *= 0.1;
	  			return this.thick;
	  		}
	  		console.log(this.thick);
	  		return this.thick
	  		data.push({'material':this.material, 'thickness':this.thick, 'unit':'cm'});
		}	
		return this.thick
	};
  }
  $scope.numberCheck = function() {
  	for (var layer in this.numLayers) {
		$scope.thickId = 'thick' + (Math.round(layer) + 1);
 		$scope.thick = Number(document.getElementById(this.thickId).value);
  	    if (this.thick.typeOf === NaN) {
  	    	return 'wrong';
  		} else if (this.thick === 0 || thick === '') {
  			return 'wrong';
  		} else {
  			return '';
  		}
	}
	}
  return this.numLayers
};
function CanvasCtrl($scope) {
  //use to draw the layers and possibly the graph(s)
  	$scope.aluminum = '#999999'
	$scope.water = '#66CCFF';
	$scope.lead = '#3D3D3D';
	$scope.kevlar;	
	$scope.layerCanvas = document.getElementById("layerCanvas");
	$scope.layers = layerCanvas.getContext("2d");
	  for (layer in this.numLayers) {
	  	this.layerId = 'layer' + (Math.round(layer) + 1);
	  	this.material = String(document.getElementById(this.layerId).value);
  }
}
