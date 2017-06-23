
function creepLog(creep){
    console.log('Name: ' + creep.name + ', Role: ' + creep.memory.role + ', ' + creep.room);
}

function test(phrase){
    console.log(phrase);
}

module.exports = {
    creepLog,
    test
};