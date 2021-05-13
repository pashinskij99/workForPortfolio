const dots = document.querySelector('.testimonials-dots'),
   dotOnly = dots.querySelectorAll('.testimonials-dot'),
   slayder = document.querySelector('.testimonials-slyder'),
   slayderElement = slayder.querySelectorAll('.testimonials-item');

function slayderContent() {
   slayderElement.forEach(event => {
      event.style.display = 'none';
   });
   dotOnly.forEach(e => {
      e.classList.remove('testimonials-dot-active');
   })
}

function showSlayderElement(i = 0) {
   slayderElement[i].style.display = 'flex';
   slayderElement[i].classList.add('fade');
   dotOnly[i].classList.add('testimonials-dot-active');
}

dots.addEventListener('click', (event) => {
   const target = event.target
   if (target && target.classList.contains('testimonials-dot')) {
      dotOnly.forEach((item, i) => {
         if (target == item) {
            slayderContent();
            showSlayderElement(i);
         }
      });
   }
});

slayderContent();
showSlayderElement();

// modal

const btnHireMe = document.querySelector('.header-medium-second-btn'),
   modal = document.querySelector('.modal'),
   btnCloseModal = document.querySelector('.modal-btn-close');

function showModal(elem) {
   elem.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimeOpen);
   });
}

function openModal() {
   modal.style.display = 'block';
   document.body.style.overflow = 'hidden';
}

function hiddenModal(elem) {
   elem.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
   });
   modal.addEventListener('click', (event) => {
      if (event.target === modal) {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      };
   });
}



showModal(btnHireMe);
hiddenModal(btnCloseModal);

// const modalTimeOpen = setTimeout(openModal, 10000);

// открытие модального окна в конце страници автоматически

// function showModalByScroll() {
//    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//       openModal();
//       window.removeEventListener('scroll', showModalByScroll);
//    }

// }

// window.addEventListener('scroll', showModalByScroll);

// ответ от сервера на модальное окно
// 1 получение всех форм
// 2 прописываем функцию postDate которая отвечает за постинг данных
// помещаеем в нее какуюто form и вещшаем на нее обработчик сообытий
// используем submit помещаем аргумент е и отменяем стандартное поведение
// создаем request = new XMLHttpRequest();
// вызываем метод open для настройки
// и помещаем в него POST и путь к файлу сервера
// передаем данные через formDate
// оздаем переменую formDate и помещаем в нее конструктов
// настраиваем заголовки setrequestheader('content-type', 'multipart/form-date')
// навешиваем обработчик события load на request и внутри условие если все правильно то request.response
// создать обьект с списком фраз которые для различных ситуаций
// и вставляем их через блок
// через форич передаем формам функцию postDate
// проверяем


// передаем через json
// вместо multi вставляем application/json
// создаем обьект пустой
// фордату перебераем через форич и внутри создаем функию с двумя аргументами
// обращаемся к обьекту внути помещаем второй аргумент равно первый
// создаем переменую json и для конвертации json.stringify(обьект)
// и поместить json в send
// настроить бэкенд $_POST = JSON_DECODE(file_get_contents("php")) 

const forms = document.querySelectorAll('form');

const message = {
   loading: 'Загрузка',
   success: 'Все прошло хорошо!',
   errors: 'Ошибка'
};

forms.forEach(item=>{
   postDate(item);
});

function postDate(form){
   form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const object = {};
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      
      
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json');
      
      const formDate = new FormData(form);
      const json = JSON.stringify(object);
      formDate.forEach(function(element, i) {
         object[i]=element;
      });
      request.send(json);
      request.addEventListener('load', ()=>{
         if (request.status === 200) {
            console.log(request.response);
            statusMessage.textContent = message.success;
            form.reset();
            setTimeout(()=>{
               statusMessage.remove();
            }, 2000);
         } else {
            statusMessage.textContent = message.errors;
         }
      });
   });
}

