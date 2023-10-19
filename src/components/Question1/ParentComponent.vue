<template>
    <div class="hello">
        <!-- This code is for Question 1 point number 1 and 2 -->
        <ChildComponent :parentMessage="childMessage" @childEvent="handleChildEvent"/>
        <div class="child-content">Data: {{ childData }}</div>
    </div>
    <div>
        <!-- This code is for Question 1 point number 3 -->
        <ChildOne @updateMessage="updateMessageInChildA" />
        <ChildTwo :message="messageFromChildA" />
    </div>

</template>

<script>
import ChildOne from './ChildOne.vue';
import ChildTwo from './ChildTwo.vue';
import ChildComponent from './ChildComponent.vue';
export default {
    name: 'ParentComponent',
    components: {
        ChildComponent,
        ChildOne,
        ChildTwo,
    },
    data() {
        return {
            childMessage: 'This is message from parent to child',
            childData: '',
            messageFromChildA: ''
        }
    },
    methods:{
        handleChildEvent(data){
            this.childData = data;
        },
        updateMessageInChildA(message) {
            this.messageFromChildA = message;
        }
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
.child-content{
    font-weight: 700;
}
</style>
