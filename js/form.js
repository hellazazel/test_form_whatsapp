document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //ВВЕДИТЕ ДЕЙСТВУЮЩИЙ НОМЕР WHATSAPP:
  const phone__number = "+7-921-978-61-59";

  const client = document.querySelector("#client").value; // переменная 
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;
  const service = document.querySelector("#service").value;
  const response = document.querySelector("#response");
  const file = document.querySelector("#file");

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
		*Сообщение*%0A
		${service}
    *Схемы, фото или рисунки мебели*%0A
    ${file}`;

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

