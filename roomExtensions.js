Room.prototype.stats = function(){
  return {
      creepsCount : this.find(FIND_MY_CREEPS).length;
      enemiesCount : this.find(FIND_HOSTILE_CREEPS).length;
  };  
};

Room.prototype.creepStats = function(searchRole){
    return {
      _(Memory.creeps).filter( { role: searchRole } ).size();
    };
};

Room.prototype.