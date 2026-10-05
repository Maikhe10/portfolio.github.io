// Use apenas números: país + DDD + telefone.
const whatsappNumber = "556198725703";

const form = document.querySelector("#contact-form");
const directContact = document.querySelector(".direct");

// Aponta o botão de contato direto para a conversa do WhatsApp.
directContact.href = `https://wa.me/${whatsappNumber}`;

// Monta a mensagem inicial com o nome, o assunto e os detalhes informados.
function createWhatsAppMessage(name, subject, message) {
  const lines = [
    "Olá, Maikhe!",
    `Meu nome é ${name}.`,
    `Tenho interesse em: ${subject}.`,
  ];

  if (message) {
    lines.push("", message);
  }

  return lines.join("\n");
}

// Converte os dados do formulário em uma mensagem pronta para enviar pelo WhatsApp.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("nome").trim();
  const subject = formData.get("assunto");
  const message = formData.get("mensagem").trim();
  const text = createWhatsAppMessage(name, subject, message);
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.location.assign(url);
});
