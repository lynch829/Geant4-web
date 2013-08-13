import io
def createMacroFile():
   macro = open('vehicle1.mac', 'w')
   macro.write('/control/execute physics.mac \n/control/verbose 1 \n/run/verbose 2 \n/event/verbose 0 \n/tracking/verbose 0 \n/run/initialize \n/score/create/boxMesh boxMesh_1 \n/score/mesh/boxSize 150 150 15 cm \n/score/mesh/nBin 1 1 30 \n/score/quantity/energyDeposit eDep \n/configuration/choose vehicle \n/configuration/AddShielding On \n/gun/data gcr_min_z=1.txt \n/run/beamOn 1000 \n/score/dumpQuantityToFile boxMesh_1 eDep EnergyDeposition_.csv')
   macro.close()
createMacroFile()