
const form = document.getElementById("DemandeForm");
const tablebody = document.getElementById("tableBody");
const message = document.getElementById("message");


form.addEventListener("submit", function (e) {
  e.preventDefault();``

  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const motif = document.getElementById("motif").value;
  const date = document.getElementById("date").value;

  if (!nom || !prenom || !telephone || !email || !motif || !date) {
    message.textContent = " Vous devez remplir toutes les cases  ";
    message.style.color = "red";
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nom}</td>
    <td>${prenom}</td>
    <td>${telephone}</td>
    <td>${email}</td>
    <td>${motif}</td>
    <td>${date}</td>
    <td>
      <button onclick="deleteRow(this)"> Supprimer</button>
    </td>
  `;
  tablebody.appendChild(row);

  message.textContent = " Commande ajoutée avec succès ";
  message.style.color = "green";
  form.reset();
});

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
