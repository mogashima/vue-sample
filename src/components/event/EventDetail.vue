<template>
    <div class="event-detail" v-if="display.isShowDetail">
        <div>
            <p>{{ item.getTitle() }}</p>
            <p>{{ item.getDate().toLocaleString() }}</p>
        </div>
        <div class="d-flex">
            <button class="btn btn-primary" @click="clickToListButton">戻る</button>
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