// lista de tareas con tareas prearmadas para conectar con la artista //

const input = document.getElementById("new");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

const ourList = [
    { task: "Follow on Instagram" },
    { task: "Inquiry about an artwork" },
    { task: "Ask about commissions" },
]

ourList.forEach(suggested => {
    const li = document.createElement("li")
    li.textContent = suggested.task

    const btnDelete = document.createElement("button")
    btnDelete.textContent = "Delete"
    btnDelete.addEventListener("click", () => li.remove())
    li.appendChild(btnDelete)

    const btnCompleted = document.createElement("button")
    btnCompleted.textContent = "Completed"
    btnCompleted.addEventListener("click", (e) => {
        e.preventDefault();
        li.style.color = "green"
    })
    li.appendChild(btnCompleted)

    list.appendChild(li)

})

button.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    if (text) {
        const li = document.createElement("li")
        li.textContent = text

        const btnDelete = document.createElement("button")
        btnDelete.textContent = "Delete"
        btnDelete.addEventListener("click", () => li.remove())
        li.appendChild(btnDelete)

        const btnCompleted = document.createElement("button")
        btnCompleted.textContent = "Completd"
        btnCompleted.addEventListener("click", (e) => {
            e.preventDefault();
            li.style.color = "green"
        })
        li.appendChild(btnCompleted)

        list.appendChild(li)
    }
})