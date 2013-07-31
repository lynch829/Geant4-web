/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */

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
  }
  	else {
  		alert('Sorry, no more than 30 layers.');
  	}
 } 	
  $scope.removeLayer = function() {
  	if (this.numLayers.length > 1) {
	  	var layerNum = this.numLayers.length;
	  	this.numLayers.pop(layerNum);
	  } else {
	  	alert('You need at least 1 layer.')
	  }
  }
  $scope.submit = function() {
  	
  }
};
