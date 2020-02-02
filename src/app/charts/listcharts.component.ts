import { Component, OnInit } from '@angular/core';
import {ICharts} from '../interfaces/charts.interface'
import { ChartsService} from '../charts/chart.service';
import { Charts } from '../models/charts.model';
@Component({
  selector: 'app-listcharts',
  templateUrl: './listcharts.component.html',
  styleUrls: ['./listcharts.component.css'],
  providers:[ChartsService]
})
export class ListchartsComponent implements OnInit {
  d:any;
  charts: ICharts[];
  showEditTable:boolean=false;
  EditRowID:any='';
  constructor(private _chartservice:ChartsService) { 
  }

  ngOnInit() {
    this._chartservice.getCharts()
                .subscribe((chartData=>this.charts=chartData));
    // this._chartservice.listen('get').subscribe((data) => {
    //     console.log(data);
    // })
    
  }
  Edit(val){
    this.EditRowID=val;
  }
  Save(val){
    this.d=this.charts.find(x=>x._id===val);
    //console.log(this.d);
    this._chartservice.updateCharts(val,this.d)
    .subscribe((chart)=>{
      this._chartservice.update('update').subscribe((data) => {
        console.log(data);
       });
      //let index = this.charts.findIndex(u => u._id === val);
      //this.charts[index]=chart;
    });
    
  }
}
