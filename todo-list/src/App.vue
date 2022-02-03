<template>
    <div>
        <h1 class="title">ToDo List</h1>

        <Form @addingTodo="itemTodos.push($event)"></Form>

        <ItemTodo v-bind:itemTodos="itemTodos" ></ItemTodo>

    </div>
</template>

<script>
import ItemTodo from './components/ItemTodo.vue';
import Form from './components/Form.vue';

export default {
    name: 'App',
    components: {
        ItemTodo,
        Form
    },
    data() {
        return {
            itemTodos: []
        }
    },
    watch: {
        itemTodos: {
            deep: true,
            handler() {
                localStorage.setItem('itemTodos', JSON.stringify(this.itemTodos))
            }
        }
    },
    created() {
        const json = localStorage.getItem('itemTodos')
        const array = JSON.parse(json)
        if(Array.isArray(array)) {
            this.itemTodos = array || []
        }
    }
}
</script>

<style>
    body
    {
        background-image: linear-gradient(to left top ,rgb(155, 255, 152), rgb(137, 110, 255));
        background-attachment: fixed;
    }

    .title {
        text-align: center;
        margin-top: 20px;
        color: white;
        font-weight: bold;
        font-size: 66px;
        text-shadow: 0 0px 5px rgb(107, 121, 124);
    }
</style>