function generateQRCodeAndAnimate() {
    const qrcodeContainer = document.getElementById("qrcodeContainer");
   
    const numeroTelefone = '+5586998044867';
    const mensagem = 'Oi! Adorei o seu site e estou interessado(a) em obter um orçamento. Podemos conversar sobre isso?';
    
    // Cria um link que redireciona para o WhatsApp com a mensagem
    const linkRedirecionamento = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    
    // Cria um novo QR Code
    new QRCode(document.getElementById("qrcodeContainer"), {
        text: linkRedirecionamento,
        width: 178,
        height: 178
    });
    const fechar = document.getElementById("fecharQRCode");
    fechar.classList.add('btn-close');
         // Adiciona um efeito de movimento à imagem
         const whatsappLogo = document.getElementById("whatsappLogo");
         whatsappLogo.style.transition = "transform 1s ease-in-out";
         setInterval(() => {
             whatsappLogo.style.transform = "rotate(360deg)";
         }, 0);
}
function fecharQRCode(){
    document.getElementById("qrcodeContainer").innerHTML = "";
    const fechar = document.getElementById("fecharQRCode");
    fechar.classList.remove('btn-close');
}

AOS.init({
    offset: 100, // Deslocamento do início da animação em pixels
    duration: 1500, // Duração da animação em milissegundos
    easing: '', // Tipo de easing (pode ser "linear", "ease", "ease-in", "ease-out", "ease-in-out")
    once: false, // A animação só ocorrerá uma vez
});








