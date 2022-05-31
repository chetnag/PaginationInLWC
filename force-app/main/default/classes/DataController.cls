public with sharing class DataController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [select Id,Name from Contact];
    }

    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpportunityList(){
        return [select Id,Name from Opportunity];
    }
}
