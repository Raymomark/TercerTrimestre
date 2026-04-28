import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

const FIELDS = [NAME_FIELD, STAGE_FIELD, AMOUNT_FIELD, CLOSE_DATE_FIELD];

export default class OpportunityDetailTheme extends LightningElement {
    @api recordId;

    isDark = false;
    opportunity;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredOpportunity({ data, error }) {
        if (data) {
            this.opportunity = data;
        } else if (error) {
            this.opportunity = undefined;
        }
    }

    get name() {
        return this.opportunity?.fields.Name.value;
    }

    get stage() {
        return this.opportunity?.fields.StageName.value;
    }

    get amount() {
        return this.opportunity?.fields.Amount.value;
    }

    get closeDate() {
        return this.opportunity?.fields.CloseDate.value;
    }

    get containerClass() {
        return this.isDark ? 'card dark' : 'card light';
    }

    get buttonLabel() {
        return this.isDark ? 'Modo claro' : 'Modo oscuro';
    }

    toggleTheme() {
        this.isDark = !this.isDark;
    }
}