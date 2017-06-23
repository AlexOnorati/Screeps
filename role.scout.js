var roleScout = {

    /** @param {Creep} creep **/
    run: function(creep) {
        console.log(creep.room);
        Game.rooms[creep.room.id] = creep.room;
            let sources = creep.room.find(FIND_SOURCES);
            for(let s = 0; s < sources.length; s++){
                sourcePos = sources[s];
                console.log(sourcePos);
                console.log('TOP: '+(sourcePos.pos.y + 1) + ', LEFT: '+ sourcePos.pos.x - 1 + ', BOTTOM: '+ sourcePos.pos.y - 1 + ', RIGHT: '+sourcePos.pos.x + 1); 
                const spaces = creep.room.lookAtArea(sourcePos.pos.y + 1, sourcePos.pos.x - 1, sourcePos.pos.y - 1, sourcePos.pos.x + 1, false);
                console.log(spaces);
                Game.rooms[creep.room.id] = creep.room;
                creep.room.memory = spaces;
                
                console.log("tst");
                
                // let terrainCount;
                // for(let i in spaces){
                //     for(let j in i){
                //         console.log('test'+j);
                //     }
                // }
                // for(let i = -1; i < 1; i++){
                //     for(let j = -1; j < 1; j++){
                //         let tempPosition = spaces[sourcePos.pos.y + i];
                //         console.log(tempPosition);
                        
                //         //for(let k = 0; k < tempPosition.length; k++){
                //         //    if(tempPosition[k].type == 'terrain'){ 
                //         //        terrainCount++;
                //         //    }
                //         //}
                //     }
                // }
                if(Game.rooms[creep.room] == null){
                    Game.rooms[creep.room] = {};
                }
                //Game.rooms[creep.room][sources[s].name] = 9 - terrainCount;
            }
        
    }
};

module.exports = roleScout;