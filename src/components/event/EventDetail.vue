<template>
    <div class="event-detail" v-if="display.isShowDetail">
        <div class="container">
            <h3 class="event-title">{{ item.getTitle() }}</h3>
            <div class="event-date">
                <label class="fs-3">開催日時</label>
                    <p>{{ item.getDate().toLocaleString() }}</p>
            </div>
            <div class="event-location">
                <label class="fs-3">開催場所</label>
                <p>{{ item.getLocation() }}</p>
            </div>

            <div class="event-body">
                <label class="fs-3">内容</label>
                <p v-for="message in item.getBody()">{{ message }}</p>
            </div>
            <div class="d-flex mt-5">
                <button class="btn btn-primary" @click="clickToListButton">戻る</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import EventModel from '@/ts/models/EventModel.js';
import EventDisplay from '@/ts/display/EventDisplay';

const props = defineProps({
    display: {
        type: EventDisplay,
        required: true
    }
})

const item = computed((): EventModel => {
    return reactive(props.display.item)
})

const clickToListButton = () => {
    props.display.showList()
}
</script>