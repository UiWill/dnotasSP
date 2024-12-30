function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_w5g7ml6";
    const templateID = "template_al6i2zk";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Menssagem enviada com sucesso!!")
  
      })
      .catch(err => {
        console.error("Erro ao enviar o email:", err);
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    });
    
  
  }
  
  