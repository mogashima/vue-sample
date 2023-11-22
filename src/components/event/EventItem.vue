<template>
    <div class="event-item col-sm-4">
        <div class="card">
            <div class="card-body">
                <p :class="dateClassName">
                    {{ item.getDate().toLocaleDateString() }}
                </p>
                <p>
                    {{ item.getTitle() }}
                </p>

                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EventModel from '@/ts/models/EventModel';
import { computed } from '@vue/reactivity';

const props = defineProps({
    item: {
        type: EventModel,
        required: true
    }
})

const dateClassName = computed(() => {
    return props.item.getDate() > new Date('2023/01/01') ? 'new-event' : ''
})
</script>
<style scoped></style>
  