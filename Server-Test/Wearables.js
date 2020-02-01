let wearableStates = {
    "off": "off",
    "on" : "on",
    "connected" : "connected"
};

Object.freeze(wearableStates);

class Wearable {
    constructor(signature, color){
        this.state = wearableStates.off
        
        this.color = color;
        this.signature = signature;
        
        this.connection = null; //holds a reference to the wearable this wearable is connected to
        this.wearablePair = null; //holds data for the pair associated with this glove
    }
    
    checkLoop(){
        //first checks if connected to self
        if(this.isConnectedToSelf())
            return false;
        
        //set up for iteratives 
        currentWearable = this;
        var findingLoop = true;
        var loopFound = false;
        
        //tries to find a loop. if ever a connection is null it returns false;
        while(findingLoop){
            if(currentWearable.connection != null){
                if(currentWearable.connection == this.wearablePair){
                    findingLoop = false;
                    loopFound = true;
                }
                else {
                    currentWearable = currentWearable.connection.wearablePair;
                }
            }
            else {
                findingLoop = false;
            }
        }
        return loopFound;
    }
    
    isConnectedToSelf(){
        //catch for if there is no connection
        if (connection != null || wearablePair != null )
            return false;
        return connection == wearablePair;
    }
    
    breakConnection(){
        this.connection = null;
    }
    
    registerNeighbor(Wearable neighbor){
        this.neighbor = neighbor; 
    }
    
    
}

var warables = [];



module.exports.getWearables = getWearables;