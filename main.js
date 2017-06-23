var roles = {};
var creeps = require('creep.prefabs');
var debug = require('console.extension');
var source = require('source');
var learn = require('learn');
module.exports.loop = function () {


//console.log(testSource);
//console.log(source.getOpenPositionCount(testSource.pos, Game.spawns['Spawn1'].room));
   creeps.updateMemory();
        if(Game.spawns['MotherShip'].energy > 200){
          creeps.createCreepRandom('MotherShip');
          
         }
     for(var name in Game.creeps) {
         var creep = Game.creeps[name];
         var role = creep.memory.role;
       
         if(!roles[role]){
             roles[role] = require('role.'+role);
         }
         roles[role].run(creep);
         //debug.creepLog(creep);
         //debug.test("yo");
              }


    //console.log(learn.getSpawner());
} 
