import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/DataController.getContactList';
import getOpportunityList from '@salesforce/apex/DataController.getOpportunityList';


export default class PaginationComp extends LightningElement {
    totalContacts
    visibleContacts

    totalOpp
    visibleOpp

    @wire(getContactList)
    wiredContact({error, data}){
        if(data){
            this.totalContacts = data
            console.log(this.totalContacts)
        }
        if(error){
            console.log(error)
        }
    }
    updateContactHandler(event){
        this.visibleContacts = [...event.target.records]
        console.log(event.detail.records)

    }

    @wire(getOpportunityList)
    wiredOpp({error, data}){
        if(data){
            this.totalOpp = data
            console.log(this.totalOpp)
        }
        if(error){
            console.log(error)
        }
    }
    updateOppHandler(event){
        this.visibleOpp = [...event.target.records]
        console.log(event.detail.records)

    }

}