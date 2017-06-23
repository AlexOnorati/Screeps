var roleBuilder = {

    run: function(creep) {
        var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.isFull = true;
        }
        if(!creep.memory.isFull && creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else if(creep.carry.energy == 0){
            creep.memory.isFull = false;
        }else {
            if(creep.repair(creep.build(constructionSite, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)){
                creep.moveTo(constructionSite);
            }
            if(creep.build(constructionSite, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionSite);
            }
        }
    }
};

module.exports = roleBuilder;