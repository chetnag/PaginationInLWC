import { api, LightningElement } from 'lwc';

export default class Pagination extends LightningElement {
    totalRecords
    recordSize = 10
    currentPage = 1
    totalPage = 0
    @api
    set records(data){
        if(data){
            this.totalRecords = data
            this.visibleRecords = data.slice(0,this.recordSize)
            this.totalPage = Math.round(data.length/this.recordSize)
            this.updateRecords();
        }
    }

    get disabledPrevious(){
        return this.currentPage<=1
    }

    get disabledNext(){
        return this.currentPage>=this.totalPage
    }

    get  records(){
        return this.visibleRecords
    }
    previousHanlder(){
        if(this.currentPage>1){
            this.currentPage = this.currentPage - 1;
            this.updateRecords();
        }
    }
    nextHandler(){
        if(this.currentPage < this.totalPage){
            this.currentPage += 1
            this.updateRecords();

        }

    }
    updateRecords(){
        const start = (this.currentPage-1)*this.recordSize
        const end = this.recordSize * this.currentPage
        this.visibleRecords = this.totalRecords.slice(start,end)
        //Child to Parent call - passing data 
        this.dispatchEvent(new CustomEvent('update',{
            detail:{
                records:this.visibleRecords
            }
        }))
    }
}