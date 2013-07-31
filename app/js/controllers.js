/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */
var Layers;
function InputCtrl($scope) {
	$scope.numLayers = [1,2,3];
	
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
  $scope.removeLayer = function() {
  	if (this.numLayers.length > 1) {
	  	var layerNum = this.numLayers.length;
	  	this.numLayers.pop(layerNum);
	  	Layers = numLayers;
	  	return Layers;
	  } else {
	  	alert('You need at least 1 layer.')
	  }
  }
  $scope.submit = function() {
  	//send layer values and thicknesses to server for processing
  	for (layer in this.numLayers) {
  	//TODO: grab layer info and send it to server. Figure out how to do that.
  		
  	};
  }
};
