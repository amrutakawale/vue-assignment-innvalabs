<template>
    <div>
        <button @click="sendMessageToSibling">Send Message to Child B</button>
    </div>
</template>

<script>
export default {
    methods: {
        sendMessageToSibling() {
            this.$emit('updateMessage', 'Hello from Child A!');
        }
    }
};
</script>
