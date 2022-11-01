import { makeAutoObservable } from "mobx" 

class Counter{

    bool = true;
    delete = true;
    constructor(){
        makeAutoObservable(this)
    }

    trigger(){
        this.bool=!this.bool
    }
    trigger_delete(){
        this.delete=!this.delete
    
    }
}

export default new Counter();