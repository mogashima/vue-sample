<template>
    <div class="event-page">
        <EventList :display=display></EventList>
        <EventEdit :display=display></EventEdit>
        <EventDetail :display=display></EventDetail>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import EventList from '@/components/event/EventList.vue';
import EventEdit from '@/components/event/EventEdit.vue';
import EventDetail from '@/components/event/EventDetail.vue';

import EventDisplay from '@/ts/display/EventDisplay';
const display = ref(new EventDisplay())
</script>
  
<style scoped></style>
  