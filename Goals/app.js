// Variables
const goalInput = document.getElementById("goal-input");
const addGoalBtn = document.getElementById("add-goal-btn");
const goalsList = document.getElementById("goals-list");

// Función para añadir una nueva meta
function addGoal() {
    const goalText = goalInput.value.trim();
    if (goalText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="goal-text">${goalText}</span>
            <button class="complete" onclick="toggleComplete(this)">✔</button>
            <button class="remove" onclick="removeGoal(this)">❌</button>
        `;
        goalsList.appendChild(li);
        goalInput.value = ""; // Limpiar el campo de texto
    }
}

// Función para marcar una meta como completada
function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle("completed");
}

// Función para eliminar una meta
function removeGoal(button) {
    const li = button.closest('li');
    li.remove();
}

// Evento al hacer clic en el botón para añadir una meta
addGoalBtn.addEventListener("click", addGoal);

// Evento al presionar "Enter" en el campo de texto
goalInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addGoal();
    }
});
