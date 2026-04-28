import { LightningElement } from 'lwc';

export default class TimerCounter extends LightningElement {

    seconds = 0;
    timerId;

    get formattedTime() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds % 60;

        return `${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
    }

    formatNumber(value) {
        return value < 10 ? `0${value}` : value;
    }

    handleStart() {
        if (this.timerId) {
            return;
        }

        this.timerId = setInterval(() => {
            this.seconds = this.seconds + 1;
        }, 1000);
    }

    handlePause() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    handleReset() {
        this.handlePause();
        this.seconds = 0;
    }

    disconnectedCallback() {
        this.handlePause();
    }
}