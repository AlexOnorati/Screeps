var roleHarvester = {
    
    
    /** @param {Creep} creep **/
    run: function(creep) {
        let testSource = creep.pos.findClosestByPath(FIND_SOURCES);
        if(testSource != null){
             //console.log(testSource.pos);
        }
       
        var structure = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
        if(creep.carry.energy < creep.carryCapacity) {
             if(creep.memory.roomId == undefined){
               
            
        //      var room = Game.rooms[creep.room.id];
        //         //console.log(creep.room);
        //         if(Game.rooms[creep.room.id] == undefined){
        //             Game.rooms[creep.room.id] = creep.room;
        //             room = creep.room;
        //         }
        //         //console.log('Room: ' +room);
        //         if(room.memory == undefined){
        //             room.memory = {harvesters: 1};
        //             creep.memory.roomId = room.id;
        //         }else if(room.memory.harvesters == undefined){
        //             room.memory.harvesters = 1;
        //             creep.memory.roomId = room.id;
        //         }else if(room.memory.harvesters < 5){
        //             room.memory.harvesters += 1;
        //             creep.memory.roomId = room.id;
        //         }else{
        //             const nextRoom = creep.pos.findClosestByRange(FIND_EXIT_TOP);
        //             creep.moveTo(nextRoom);
        //             //console.log(nextRoom);
        //         }
        //         //console.log('Room id set for ' + creep.name+ ' '+creep.memory.roomId == undefined);
        //      }
        //   else{            
        //         //console.log(creep.memory.roomId);
        //     //var source =  Game.getObjectById(creep.memory.roomId).find(FIND_SOURCES);
        //     //if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        //     //    creep.moveTo(source);
        //     //}
          }
        }
        else {
            if(creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure);
            }
        }
    }
};

module.exports = roleHarvester;