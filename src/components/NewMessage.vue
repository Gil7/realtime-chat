<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New message (enter to add)</label>
            <input type="text" v-model="newMessage" name="new-message" id="new-message">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NewMessage',
        props: ['name'],
        data(){
            return {
                newMessage: null
            }
        },
        methods: {
            addMessage(){
                if (this.newMessage) {
                    console.log(this.name, this.newMessage, Date.now())
                }
                else {

                }
            }
        }
    }
</script>
<style>

</style>
