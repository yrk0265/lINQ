import { ICharts } from '../interfaces/charts.interface';
export class Charts implements ICharts {
  constructor(public _id:string,public Legend:string,public Value:number,public Month:string){
  }
}
