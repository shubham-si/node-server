
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
            config= this.placementList.filter((config)=>{return +config.id==+id})[0];
        else if(typeof id === "string")
            config= this.placementList.filter((config)=>{return config.id==id})[0];
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
            config= this.placementList.filter((config)=>{return +config.properties.id==+id})[0];
        else if(typeof id === "string")
            config= this.placementList.filter((config)=>{return config.properties.id==id})[0];
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


export class ProviderRepo<K,V> implements Repository<K,V>{                         // Provider Repo
    public repoList;

    constructor(){
        this.repoList = new Array<V>();
    }

    public add(config:V){
        this.repoList.push(config);
        return this;
    }

    public remove(config:V){
        this.repoList.remove(config);
        return this;
    }

    public find(id: K) : V|undefined{

        let provider:V;
        if(typeof id ==="number")
            provider= this.repoList.filter((config)=>{return +config.id==+id})[0];
        else if(typeof id === "string")
            provider= this.repoList.filter((config)=>{return config.id==id})[0];

        return provider;
    }

    public each(callbackForEach:(element: V, key: K)=> void){
        this.repoList.forEach(callbackForEach);
    }

}
