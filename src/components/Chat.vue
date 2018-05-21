<template>
    <div class="chat container">
        <h2>Chat - {{username}}</h2>
    </div>    
</template>
<script>
    export default {
        name: 'chat',
        props: ['name'],
        data(){
            return {

            }
        },
        computed: {
            username(){
                return this.name
            }
        }
    }
</script>
<style>

</style>
