<template>
    <div class="event-edit" v-if="display.isShowEdit">
        {{display.item.getTitle()}}
    </div>
</template>

<script setup lang="ts">
import EventModel from '@/ts/models/EventModel.js';
import EventDisplay from '@/ts/display/EventDisplay';

const props = defineProps({
    display: {
        type: EventDisplay,
        required: true
    }
})
</script>