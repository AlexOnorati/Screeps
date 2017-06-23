/*
*Resets the memory for the learn object.
*/
function resetMemory(){
    setBaseMemory();
    return "Memory has been reset";
}

/*
* Sets the base memory of the learn object.
*/
function setBaseMemory(){
    Memory.learn = {
        'name':'',
        'moveList': [],
        'loop': 'inf',
        'invader': '0'
    };
    return "Memory has been set";
}

/*
* Sets the sawner that the creeps are going to be created with.
*/
function setSpawner(name){
    if(!Memory.learn){
        setBaseMemory();
    }else{
        Memory.learn['name'] = name;
    }
    return 'Set spawner too: ' + name;
}

/*
* Return the spawner that that creating the screeps if none exists returns undefined.
*/
function getSpawner(){
    return  !Memory.learn ? undefined  : Memory.learn['name'];
}

/*
* Add a move that effects how the next creep will be made.
*/
function addMove(type, value){
    Memory.learn['moveList'].push({'type': type, 'value': value});
    return 'added move: '+ type + ' value: ' + value;
}

/*
* Generates the creep based on the given move.
*/
function generateCreep(){
    let body = [WORK];
    let name = Game.spawns[Memory.learn['name']].createCreep(body);
    return 'Created creep: ' + name;
}

/*
* Kills all creeps.
*/
function suicideCreeps(){
    
   for(var name in Game.creeps) {
         Game.creeps[name].suicide();
       
   }
    
}

/*
 * Destroys all invaders 
 */
function suicideInvader(){
    
}

/*
* Resets the invader to the current type in learn memory.
*/
function resetInvader(){
    suicideInvader();
    return 'Resetting invader with type: ' + Memory.learn['invader'];
}

/*
* Sets the current invader to memory.
*/
function setInvader(value){
    Memory.learn['invader'] = value;
    return 'Set invader to type: '+ value;
}

/*
* Resets so it can be ready for a new simulation.
*/
function resetAll(){
    suicideCreeps();
    suicideInvader();
    resetMemory();
    return 'Reset all creeps, invaders and memory';
}

module.exports = {
    setBaseMemory,
    resetMemory,
    setSpawner,
    getSpawner,
    addMove,
    generateCreep,
    suicideCreeps,
    resetInvader,
    setInvader,
    resetAll
};