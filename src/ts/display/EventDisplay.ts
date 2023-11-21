import EventModel from "../models/EventModel"

export default class EventDisplay {
    public isShowList: boolean = true
    public isShowDetail: boolean = false
    public isShowEdit: boolean = false
    public item: any = new EventModel()

    constructor() {

    }

    showList() {
        this.isShowList = true
        this.isShowEdit = false
        this.isShowDetail = false
    }

    showDetail() {
        this.isShowList = false
        this.isShowEdit = false
        this.isShowDetail = true
    }

    showEdit() {
        this.isShowList = false
        this.isShowEdit = true
        this.isShowDetail = false
    }

}