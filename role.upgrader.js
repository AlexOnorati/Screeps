var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
         if(creep.memory.isFull && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }else
        if(!creep.memory.isFull && creep.carry.energy < creep.carryCapacity) {
            
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                if(creep.carry.energy < creep.carryCapacity) {
                    creep.moveTo(sources[0]);
                }
            }
        }else if(creep.carry.energy == creep.carryCapacity){
            creep.memory.isFull = true;
        }else if(creep.carry.energy == 0){
            creep.memory.isFull = false;
        }
    }
};

module.exports = roleUpgrader;
