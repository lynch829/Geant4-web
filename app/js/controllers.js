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
    var layerNum = this.numLayers.length + 1;
    this.numLayers.push(layerNum);
  }
  $scope.removeLayer = function() {
  	var layerNum = this.numLayers.length;
  	this.numLayers.pop(layerNum);
  }
  $scope.submit = function() {
  	
  }
};
