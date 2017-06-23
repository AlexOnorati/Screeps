/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.prefabs');
 * mod.thing == 'a thing'; // true
 */

var prefabs = {
    'harvester' : {type: [WORK, CARRY, MOVE], memory:{'role':'harvester', 'roomId':undefined}},
    'upgrader' : {type:[WORK, CARRY, MOVE],memory:{'role':'upgrader', isFull: false}},
    'builder':{type:[WORK, CARRY, MOVE], memory:{'role':'builder'}}
}

function createCreepFromPrefab(prefabName, spawner){
    Game.spawns[spawner].createCreep(prefabs[prefabName].type, prefabs[prefabName].memory);
    
}

function createCreepRandom(spawner){
    createCreepFromPrefab(getRandomRole(), spawner);
}

function getRandomRole(){
    var obj_keys = Object.keys(prefabs);

    var ran_key = obj_keys[Math.floor(Math.random()*obj_keys.length)];

    return ran_key;
}

function updateMemory(){
    for(let name in Memory.creeps){
        if(Game.creeps[name]==undefined){
            delete Memory.creeps[name];
        }
    }
}

module.exports = {
    createCreepFromPrefab,
    createCreepRandom,
    updateMemory
};