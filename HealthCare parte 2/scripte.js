const form = document.getElementById("DemandeForm");
const tablebody = document.getElementById("tableBody");
const message = document.getElementById("message");
const searchInput = document.getElementById("site-search");

let demandes = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const motif = document.getElementById("motif").value;
  const date = document.getElementById("date").value;

  if (!nom || !prenom || !telephone || !email || !motif || !date) {
    showMessage(" Vous devez remplir toutes les cases  ", "red");
    return;
  }

  const demande = {
    nom,
    prenom,
    telephone,
    email,
    motif,
    date,
  };

  demandes.push(demande);
  AfficherTable(demandes);
  showMessage(" Commande ajoutée avec succès ", "green");
  form.reset();
});
function AfficherTable(data) {
  tablebody.innerHTML = "";

  data.forEach((demande) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${demande.nom}</td>
      <td>${demande.prenom}</td>
      <td>${demande.telephone}</td>
      <td>${demande.email}</td>
      <td>${demande.motif}</td>
      <td>${demande.date}</td>
      <td>
        <button onclick="deleteRow(this)">Supprimer</button>
      </td>
    `;
    tablebody.appendChild(row);
  });
}

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;

  setTimeout(() => {
    message.textContent = "";
  }, 2500);
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
function searchD(text) {
  const value = text.toLowerCase();

  const result = demandes.filter(
    (d) =>
      d.nom.toLowerCase().includes(value) ||
      d.prenom.toLowerCase().includes(value) ||
      d.email.toLowerCase().includes(value) ||
      d.motif.toLowerCase().includes(value),
  );

  AfficherTable(result);
}
searchInput.addEventListener("input", function () {
  searchD(this.value);
});
