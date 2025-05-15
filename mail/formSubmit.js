
$('.contactForm').submit(function (evento) {
  evento.preventDefault();
  console.log(evento);
  console.log($(this));

  let objectForm = $(this),
    sendMethod = objectForm.attr('method'),
    sendUrl = objectForm.attr('action'),
    sendData = {};

  objectForm.find("[name]").each(function (index, formItem) {
    console.log(index, formItem);

    let item = $(this),
      name = item.attr('name'),
      nameValue = item.val();

    sendData[name] = nameValue;
  });

  console.log(sendData);

  $.ajax({
    method: sendMethod,
    url: sendUrl,
    dataType: 'json',
    accepts: 'application/json',
    data: sendData,

    success: (data) => {
      console.log(data);
      Swal.fire({
        title: "Your email has been sent successfully!",
        text: "I'll get in touch with you in a little while.",
        icon: "success",
        position: "center",
        showConfirmButton: true,
        confirmButtonColor: "var(--primary)",
      });
      /* alert("Formulario enviado");*/
      $('.contactForm')[0].reset(); 
      $('#applyForm')[0].reset();
    },
    error: (err) => {
      Swal.fire({
        title: "Sorry, it seems that our mail server is not responding.",
        text: "Please try again later!",
        icon: "error",
        position: "center",
        showConfirmButton: true,
        confirmButtonColor: "var(--primary)",
      });
    }
  });
});