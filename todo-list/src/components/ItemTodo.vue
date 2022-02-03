<template>
   <div>
        <div v-for="(item, index) in itemTodos" :key="index" class="item">

            <div  @click="Check(index)" class="item_info" :class="{check: item.checked}">
                <h2 spellcheck="false" @keydown.enter="TitleEnter(index, $event)"> {{item.title}} </h2>
                <h4 spellcheck="false" @keydown.enter="DescEnter(index, $event)"> {{item.desc}} </h4>
            </div>

            <div class="row_">

                <div class="col_">
                    <button v-if="!item.delete" type="submit" @click="AskRemoveItemTodo(index)" class="excluir btn full_btn" :class="{checkEx: item.checked}">Excluir</button>
                    
                    <div class="row_" v-else>
                        <div class="col_">
                            <button type="submit" @click="RemoveItemTodo(index)" class="confirmar btn full_btn" :class="{checkOk: item.checked}">Confirmar</button>
                        </div>
                        <div class="col_">
                            <button type="submit" @click="AskRemoveItemTodo(index)" class="cancelar btn full_btn" :class="{checkEx: item.checked}">Cancelar</button>
                        </div>
                    </div>

                </div>
                <div class="col_">
                    <button v-if="!item.editing" type="submit" @click="EditarItemTodo(index)" class="editar btn full_btn" :class="{checkEd: item.checked}">Editar</button>
                    <button v-else type="submit" @click="EditarItemTodo(index)" class="editar ok btn full_btn">Ok</button>
                </div>
            </div>

        </div>
   </div>
</template>

<script>
export default {
    name: 'ItemTodo',
    props: ['itemTodos'],
    methods: {
        RemoveItemTodo(item) {
            this.itemTodos.splice(item, 1)
        },
        AskRemoveItemTodo(item) {
            this.itemTodos[item].delete = !this.itemTodos[item].delete
        },
        EditarItemTodo(item) {
            this.itemTodos[item].checked = false
            if(this.itemTodos[item].editing) {
                this.itemTodos[item].editing = false;
                const editTitle = document.querySelectorAll("h2");
                const editDesc = document.querySelectorAll("h4");
                editTitle[item].setAttribute("contenteditable", false);
                editDesc[item].setAttribute("contenteditable", false);
            }
            else if(!this.itemTodos[item].editing) {
                this.itemTodos[item].editing = true;
                const editTitle = document.querySelectorAll("h2");
                const editDesc = document.querySelectorAll("h4");
                editTitle[item].setAttribute("contenteditable", true);
                editDesc[item].setAttribute("contenteditable", true);
                editTitle[item].focus();
            }
        },
        TitleEnter(item, e) {
            e.preventDefault()
            const editDesc = document.querySelectorAll("h4");
            editDesc[item].focus();
        },
        DescEnter(item, e) {
            e.preventDefault()
            this.EditarItemTodo(item)
        },
        Check(item) {
            if(!this.itemTodos[item].editing)
            {
                this.itemTodos[item].checked = !this.itemTodos[item].checked
            }
        }
    },
    
}
</script>

<style scoped>
    .item {
        margin: 2% 30% 2%;
        box-shadow: 0 1px 5px rgb(107, 121, 124);
        border-radius: 10px;
    }

    .item_info {
        background: rgba(255, 255, 255, 1);
        color: black;
        border-radius: 10px 10px 0 0;
        transition: all .2s;
    }

    .row_ {
        overflow: hidden;
        margin-top: -8px;
    }

    .col_ {
        float: left;
        width: 50%;
    }

    h2 {
        padding: 1.5% 2% 0% 2%;
        font-size: 20px;
        overflow-wrap: break-word;
    }

    h4 {
        padding: 0 2% 2% 2%;
        font-size: 16px;
        font-weight:initial;
        overflow-wrap: break-word;
    }

    .excluir {
        background-color:rgb(245, 94, 125);
        border-radius: 0 0 0 10px;
    }

    .cancelar {
        background-color:rgb(245, 94, 125);
        border-radius: 0 0 0 0;
        margin-top: 8px;
        
    }

    .confirmar {
        background: rgba(175, 252, 98, 1);
        border-radius: 0 0 0 10px;
        margin-top: 8px;
    }

    .editar {
        background-color:rgb(175, 252, 98);
        border-radius: 0 0 10px 0;
    }

    .ok {
        background-color:rgb(142, 250, 241);

    }

    .check {
        background: rgba(255, 255, 255, 0.2);
        color: rgb(110, 110, 110);
    }

    .checkEx {
        background: rgba(245, 94, 125, 0.65);
        color: rgb(87, 87, 87);
    }

    .checkEd {
        background: rgba(175, 252, 98, 0.65);
        color: rgb(87, 87, 87);
    }

    .checkOk {
        background: rgba(175, 252, 98, 0.65);
        color: rgb(87, 87, 87);
    }

    .btn {
        transition: none;
    }

    .full_btn {
        width: 100%;
    }
</style>