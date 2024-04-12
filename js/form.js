// document.querySelector("#submit").addEventListener("click", e => {
//   e.preventDefault();

//   //ВВЕДИТЕ ДЕЙСТВУЮЩИЙ НОМЕР WHATSAPP:
//   const phone__number = "+7-904-084-88-52";

//   const client = document.querySelector("#client").value; // переменная 
//   const date = document.querySelector("#date").value;
//   const time = document.querySelector("#time").value;
//   const service = document.querySelector("#service").value;
//   const response = document.querySelector("#response");

//   resp.classList.remove("fail");
//   resp.classList.remove("send");

//   const url = `https://api.whatsapp.com/send?phone=${phone__number}&text=
// 		*_MI NEGOCIO_*%0A
// 		*Бронирование*%0A%0A
// 		*Как вас зовут ?*%0A
// 		${cliente}%0A
// 		*Укажите дату бронирования*%0A
// 		${fecha}%0A
// 		*Укажите время броинрования*%0A
// 		${hora}%0A
// 		*Предпочитаемое время бронирование*%0A
// 		${empleado}%0A
// 		*Что за услуга должна быть оказана ?*%0A
// 		${service}`;

//   if (cliente === "" || fecha === "" || hora === "") {
//     resp.classList.add("fail");
//     resp.innerHTML = `Некоторые данные отсутсвуют, ${client}`;
//     return false;
//   }
//   resp.classList.remove("fail");
//   resp.classList.add("send");
//   resp.innerHTML = `Ваша заявка отправлена, ${client}`;

//   window.open(url);
// });


document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //ВВЕДИТЕ ДЕЙСТВУЮЩИЙ НОМЕР WHATSAPP:
  const phone__number = "+7-904-084-88-52";

  const client = document.querySelector("#client").value; // переменная 
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;
  const service = document.querySelector("#service").value;
  const response = document.querySelector("#response");

  response.classList.remove("fail");
  response.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${phone__number}&text=
		*Заявка на сборку мебели*%0A
		*Бронирование*%0A%0A
		*Как вас зовут ?*%0A
		${client}%0A
		*Укажите желаемую дату сборку мебели*%0A
		${date}%0A
		*Укажите желаемое время сборки мебели*%0A
		${time}%0A
		*Предпочитаемое время бронирование*%0A
		${service}`;

  if (client === "" || date === "" || time === "") {
    response.classList.add("fail");
    response.innerHTML = `Некоторые данные отсутствуют, ${client}`;
    return false;
  }
  response.classList.remove("fail");
  response.classList.add("send");
  response.innerHTML = `Ваша заявка отправлена, ${client}`;

  window.open(url);
});

