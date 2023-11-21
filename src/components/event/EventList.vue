<template>
    <div class="event-list" v-if="display.isShowList">
        <div class="row">
            <EventItem v-for="item in events" @click="clickItem(item)">
                <template #title>{{ item.getTitle() }}</template>
                <template #date>{{ item.getDate().toLocaleDateString() }}</template>
            </EventItem>
        </div>
        <div class="d-flex">
            <button class="btn btn-primary ms-auto" @click="clickNewItemButton">作成</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import EventDisplay from '@/ts/display/EventDisplay';
import EventItem from './EventItem.vue';
import EventModel from '@/ts/models/EventModel';
import { ref } from 'vue'

const eventData: EventModel[] = []
eventData.push(new EventModel('iPhone15 発売', new Date('2023/9/22 00:00')))
eventData.push(new EventModel('iPhone14 発売', new Date('2022/9/16 00:00')))
eventData.push(new EventModel('iPhone13 発売', new Date('2021/9/24 00:00')))
eventData.push(new EventModel('iPhone12 発売', new Date('2020/10/23 00:00')))
eventData.push(new EventModel('iPhone11 発売', new Date('2019/09/20 00:00')))
eventData.push(new EventModel('iPhoneX 発売', new Date('2017/11/03 00:00')))
eventData.push(new EventModel('iPhone8 発売', new Date('2017/09/22 00:00')))


const events = ref(eventData)
const props = defineProps({
    display: {
        type: EventDisplay,
        required: true
    }
})

const clickNewItemButton = () => {
    props.display.showEdit()
}

const clickItem = (item: EventModel) => {
    props.display.item = item
    props.display.showDetail()
}

</script>