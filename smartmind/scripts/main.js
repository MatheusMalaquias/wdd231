const container = document.querySelector("#class-schedule-container");

if (container) {
    loadTools();
}

async function loadTools() {
    try {
        const response = await fetch("data/tools.json");
        const tools = await response.json();

        tools.forEach(tool => {
            const card = document.createElement("div");
            card.classList.add("class-card");

            card.innerHTML = `
                <h3>${tool.name}</h3>
            `;

            // evento de clique
            card.addEventListener("click", () => {
                openModal(tool);
            });

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}