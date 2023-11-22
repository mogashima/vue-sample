export default class EventModel {
    private title: string
    private date: Date
    private body: string[]
    private location: string

    constructor(title: string = "", date: Date = new Date(), body: string[] = [], location: string = "") {
        this.title = title
        this.date = date
        this.body = body
        this.location = location
    }

    getTitle(): string {
        return this.title
    }

    getDate(): Date {
        return this.date
    }

    getBody(): string[] {
        return this.body
    }

    getLocation(): string {
        return this.location
    }
}