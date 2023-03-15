$(document).ready(function () {
    $("ul").sortable({ axis: "x", containment: "#main" });
    $("div").sortable({ axis: "y", containment: "#projects" })
});
window.addEventListener('load', () => {
    const form = document.querySelector(".newtaskform");
    const input = document.querySelector(".realText");
    const list = document.querySelector("#personal");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert(" Please fill out a task..😊")
            return
        }
        const task_list = document.createElement("div");
        task_list.classList.add("personal");

        const task_content_list = document.createElement("div")
        task_content_list.classList.add("aller")
        task_content_list.innerText = task


        task_list.appendChild(task_content_list);
        const taskInput = document.createElement("input");
        taskInput.classList.add("fakeText")
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");
        list.appendChild(task_list) 

        const taskActions = document.createElement("div")
        taskActions.classList.add("actions")
        const taskbuttons_edit = document.createElement("button")
        taskbuttons_edit.classList.add("edit");
        taskbuttons_edit.innerHTML = "edit";
        const taskbuttons_delete = document.createElement("button")
        taskbuttons_delete.classList.add("delete");
        taskbuttons_delete.innerHTML = "delete";
        taskActions.appendChild(taskbuttons_edit)
        taskActions.appendChild(taskbuttons_delete)

        task_list.appendChild(taskActions)
        task_list.appendChild(list)
        
        taskbuttons_edit.addEventListener( "click", () => {
           if (taskbuttons_edit.innerText.toLowerCase() == 'edit'){
            taskInput.removeAttribute("readonly");
            taskInput.focus();
            taskbuttons_edit.innerText = "Save"}
            // else{
        //     taskInput.setAttribute("readonly","readonly");
        //     taskbuttons_edit.innerText = "EDIT"
        //    }
        }) -67
        -g













        input.textContent = "";
    })
})






