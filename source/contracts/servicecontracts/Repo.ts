
import { Placement } from '../../config/models/Placement';
import { isBuffer } from 'util';


 export interface Repository<K, V> {
    add(item: V): this;
    remove(item: V): this;
    find(id: K): null | V;
    each(callback: (element: V, key: K) => void): void;
}


export class PlacementProviderConfigRepo<K,V> implements Repository<K,V>{                   // providerconfig

    private placementList;

    constructor(){
        this.placementList = new Array<V>();
    }

    public add(config:V){
        this.placementList.push(config);
        return this;
    }

    public remove(config:V){
        this.placementList.remove(config);
        return this;
    }

    public find(id: K) : null|V{

        let config;

        if(typeof id ==="number")
            config= this.placementList.filter((config)=>{+config.id==+id});
        else if(typeof id === "string")
            config= this.placementList.filter((config)=>{config.id==id});
        else
            return null;

        if(config.length==0){
            return null;
        }
        return config;
    }

    public each(callbackForEach:(element: V, key: K)=> void){
        this.placementList.forEach(callbackForEach);
    }
}

export class PlacementRepo<K,V> implements Repository<K,V>{                         // placement Repo
    public placementList;

    constructor(){
        this.placementList = new Array<V>();
    }

    public add(config:V){
        this.placementList.push(config);
        return this;
    }

    public remove(config:V){
        this.placementList.remove(config);
        return this;
    }

    public find(id: K) : null|V{

        let config;

        if(typeof id ==="number")
            config= this.placementList.filter((config)=>{+config.properties.id==+id});
        else if(typeof id === "string")
            config= this.placementList.filter((config)=>{config.properties.id==id});
        else
            return null;

        if(config.length==0){
            return null;
        }
        return config;
    }

    public each(callbackForEach:(element: V, key: K)=> void){
        this.placementList.forEach(callbackForEach);
    }

}