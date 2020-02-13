import { Ajax } from '../services/Ajax';
import { placementRepo } from '../config/ConfigBuilder';

class LogManager{

    public static LEVEL_1:number=1;             // -- AdapterManager (PlacementRepo)
    public static LEVEL_2:number=2;            // -- AuctionManager (Placement Responses)
    public static LEVEL_3:number=3;

    constructor(){
       
    }

    public log(data:any,level:number){
        if(level==LogManager.LEVEL_1){
            this.logData(data,"providerResponseLog");
        }else if(level==LogManager.LEVEL_2){
            this.logData(data,"auctionParticipantLog");
        }else if(level==LogManager.LEVEL_3){
            this.logData(data,"auctionWinnerLog");
        }
    }
    
    private async logData(data:any,url:string){
       let ajax= new Ajax("http://localhost:8080/"+url,data,"POST");
        ajax.callService().then((res)=>{
            
         },(rej)=>{
             console.log('logging error');
         });
         
    }    
   
}

const Logger:LogManager =new LogManager();
export default Logger;

/*

"bidprice",
"adcode",
"providerid"
"revshare"
"size"
"ecc"
"epc"
"publisherid"

*/
