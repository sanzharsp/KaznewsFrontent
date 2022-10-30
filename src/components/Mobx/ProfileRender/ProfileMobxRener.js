import { makeAutoObservable } from "mobx" 

class Counter{

    bool = true;
    constructor(){
        makeAutoObservable(this)
    }

    trigger(){
        this.bool=!this.bool
    }
}

export default new Counter();