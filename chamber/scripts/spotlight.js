const url = "./data/members.json";

async function loadSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    const filtered = data.members.filter(m =>
        m.membership === "Gold" || m.membership === "Silver"
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    const container = document.getElementById("spotlight-container");

    selected.forEach(member => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.logo}" alt="${member.name}">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit</a>
            <p>${member.membership}</p>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();

card.innerHTML = `
    <img src="${member.logo}" alt="${member.name}">
    <div>
        <h3>${member.name}</h3>
        <p><strong>EMAIL:</strong> ${member.email}</p>
        <p><strong>PHONE:</strong> ${member.phone}</p>
        <p><strong>URL:</strong> ${member.website}</p>
    </div>
`;