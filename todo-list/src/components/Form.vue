<template>
    <div class="form">
        <div class="mb-3"> 
            <input class="form-control" id="title" type="text" v-model="title" placeholder="Título" @keydown.enter="TitleFormEnter">
        </div>

        <div class="teste">
            <textarea class="form-control" id="desc" v-model="desc" placeholder="Descrição" @keydown.enter="DescFormEnter"></textarea>
        </div>

        <div>
            <button class="btn btn-primary" type="submit" @click="AddItemTodo">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            title: '',
            desc: '',
            editing: false,
            checked: false,
            delete: false,
        }
    },
    methods: {
        AddItemTodo() {
            if(this.title.trim() == '')
            {
                window.alert("Inclua um Título")
                return
            }

            this.$emit('addingTodo', {
                title: this.title,
                desc: this.desc,
                editing: this.editing,
                checked: this.checked,
                delete: this.delete
            });

            this.title = '';
            this.desc = '';
        },
        TitleFormEnter(e) {
            e.preventDefault()
            const desc = document.getElementById("desc");
            desc.focus();
        },
        DescFormEnter(e) {
            e.preventDefault()
            this.AddItemTodo();
        }
    }
}
</script>

<style scoped>
    .form {
        margin: 2% 32.5%;
        padding: 2%;
        border: 1px solid white;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 1px 5px rgb(107, 121, 124);
    }

    .btn {
        width: 100%;
        margin-top: 4%;
        background-color: rgb(142, 250, 241);
        border-color: transparent;
        color: black;
    }

    textarea {
        resize: none;
    }

    input, textarea {
        border-color: transparent;
        background-color: rgb(216, 229, 233);
    }
</style>