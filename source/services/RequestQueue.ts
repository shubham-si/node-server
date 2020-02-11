export default class RequestQueue<T>{
    private _requestArray: T[];
 
    constructor(queue?: T[]) {
      this._requestArray = queue || [];
   }
 
   public enqueue(item: T) {
     this._requestArray.push(item);
   }
 
   public dequeue(): T {
     return this._requestArray.shift();
   }
 
   public clear() {
     this._requestArray = [];
   }
 
   public get count(): number {
     return this._requestArray.length;
   }

   public each(callback:(value:T)=>void):void{
       this._requestArray.forEach(callback);
   }
}