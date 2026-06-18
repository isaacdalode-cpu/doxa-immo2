const biens = [
    { titre: "Villa à Gombe", prix: "2500$ / mois" },
    { titre: "Appartement à Ngaliema", prix: "500$ / mois" }
];

const container = document.getElementById('app');

biens.forEach(bien => {
    container.innerHTML += `
        <div class="card">
            <h3>${bien.titre}</h3>
            <p>Prix : ${bien.prix}</p>
            <button class="btn-green" onclick="alert('Contact via WhatsApp')">Je suis intéressé</button>
        </div>
    `;
});
