import { LightningElement } from 'lwc';
export default class AppointmentForm extends LightningElement {
handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const fields = event.detail.fields; // Get the fields values
    this.template.querySelector('lightning-record-edit-form').submit(fields); // Submit the form with the field values
}
}