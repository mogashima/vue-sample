<template>
    <div class="event-item card col-sm-4">
        <div class="card-body">
            <p><slot name="date"></slot></p>
            <p><slot name="title"></slot></p>
            
            <slot></slot>
        </div>
    </div>
</template>
  
<style scoped></style>
  