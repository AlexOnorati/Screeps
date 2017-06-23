var learn = require('learn');


function runSimulation(simulation){
    learn.resetAll();
    alterSimulation(simulation);
}

function alterSimulation(simulation){
    if(simulation == 0){
        learn.setInvader(0);
        learn.run();
    }
}

module.exports = {
    runSimulation,
    alterSimulation
};