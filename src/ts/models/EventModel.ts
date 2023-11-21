export default class EventModel {
    private title: string
    private date: Date

    constructor(title: string = "", date: Date = new Date()) {
        this.title = title
        this.date = date
    }

    getTitle(): string {
        return this.title
    }

    getDate(): Date {
        return this.date
    }
}