<script lang="ts">
    export let addTodo: (text: string) => void;
    export let toggleCompleted: (event: MouseEvent) => void;
    export let todosAmount: number;

    let todo = "";

    function handleSubmit() {
        addTodo(todo);
        todo = "";
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    {#if 0 < todosAmount}
        <input class="toggle-all"
               id="toggle-all"
               type="checkbox"
               on:click={toggleCompleted}/>
        <label aria-label="Mark all as complete!" for="toggle-all">Mark all as complete!</label>
    {/if}

    <input autofocus
           bind:value={todo}
           class="new-todo"
           id="new-todo"
           placeholder="What chu wanna do?"
           type="text"
    />
</form>

<style>
    .toggle-all {
        width: 1px;
        height: 1px;
        position: absolute;
        opacity: 0;
    }

    .toggle-all + label {
        position: absolute;
        font-size: 0;
    }

    .toggle-all + label:before {
        content: '❯';
        display: block;
        padding: var(--spacing-16);
        font-size: var(--font-24);
        color: var(--color-gray-58);
        transform: rotate(90deg);
    }

    .toggle-all:checked + label:before {
        color: var(--color-gray-28);
    }

    .new-todo {
        width: 100%;
        padding: var(--spacing-16);
        padding-left: 60px;
        font-size: var(--font-24);
        border: none;
        border-bottom: 1px solid var(--shadow-1);
    }
</style>