<template>
    <div>
        <button
         @click="onClick"
         class="bg-green-400 text-gray-200 font-bold rounded h-10 w-32">{{text}}</button>  
    </div>
</template>
<script>
export default {
    name: "Button",
    props: {
        text: String,

    },
    methods: {
        onClick() {
            console.log("clicked!")
        }

        
    }, 
    
}
</script>
<style lang="">
    
</style>