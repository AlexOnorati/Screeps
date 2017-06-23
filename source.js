function getOpenPositionCount(pos, room){
    const sourcePos = pos;
    const spaces = room.lookAtArea(sourcePos.y + 1,sourcePos.x - 1,sourcePos.y - 1,sourcePos.x + 1, true);
    let terrainCount;
    for(let i = -1; i < 1; i++){
        for(let j = -1; j < 1; j++){
            let tempPosition = spaces[sourcePos.y + i][sourcePos.x + 1];
            for(let k = 0; k < temPosition.lenth; k++){
                if(tempPosition[k].type == 'terrain'){
                    terrainCount++;
                }
            }
        }
    }
    return 9 - terrainCount;
}

module.exports = {
    getOpenPositionCount
};