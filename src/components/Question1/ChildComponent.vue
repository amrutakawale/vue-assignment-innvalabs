<template>
    <div class="hello">
        <h1>{{parentMessage}}</h1>
    </div>
    <button @click="emitEvent">Send Data to Parent</button>
</template>

<script>
export default {
    name: 'ChildComponent',
    components: {

    },
    props: {
        parentMessage: String
    },
    data() {},
    methods: {
        emitEvent() {
            this.$emit("childEvent", "This Data Came From The Child Component");
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
