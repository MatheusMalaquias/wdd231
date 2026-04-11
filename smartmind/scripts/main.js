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
                <img src="${tool.image}" alt="${tool.name}">
                <h3>${tool.name}</h3>
                <p><strong>Category:</strong> ${tool.category}</p>
                <p><strong>Rating:</strong> ⭐ ${tool.rating}</p>
                <p>${tool.description}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}