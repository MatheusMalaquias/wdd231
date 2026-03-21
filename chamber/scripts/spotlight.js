const url = "./data/members.json";

async function loadSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("spotlight-container");

    // limpa antes
    container.innerHTML = "";

    // filtra gold e silver
    const filtered = data.members.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
    );

    // embaralha
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // pega 3
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${member.logo}" alt="${member.name}">
            <div>
                <h3>${member.name}</h3>
                <p><strong>EMAIL:</strong> ${member.email}</p>
                <p><strong>PHONE:</strong> ${member.phone}</p>
                <p><strong>URL:</strong> 
                    <a href="${member.website}" target="_blank">
                        Visit Site
                    </a>
                </p>
            </div>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();