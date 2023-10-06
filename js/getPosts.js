 const button = document.getElementById('card-btn');
 const outputDiv = document.querySelector('.new-cards');
 let startIndex = 0;
 let totalLoaded = 0;
 const maxElements = 30;

 button.addEventListener('click', async function () {
   if (totalLoaded >= maxElements) {
     return; // Прекращаем загрузку, если достигнуто максимальное количество элементов
   }

   document.querySelector('.new-cards').classList.toggle('active');

   // Определяем количество элементов, которые нужно загрузить
   const limit = Math.min(5, maxElements - totalLoaded);

   // Отправляем GET-запрос на указанный URL с параметрами _start и _limit
  await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${limit}`)
     .then(response => {
       if (!response.ok) {
         throw new Error('Error');
       }
       return response.json();
     })
     .then(data => {
      const newCardsContainer = document.querySelector('.new-cards');
      data.forEach(item => {
    
    const card = document.createElement('div');
    card.classList.add(`card-${item.id}`);
    card.id = 'card'
 /*    card.textContent = item.title; */ // Используйте нужные данные из элемента
    
    // изображение
    const imageDiv = document.createElement('div');
    const img = document.createElement('img')
    img.src = 'https://wallpapers.com/images/hd/pile-of-golden-binance-coins-gou50txd1fbbair4.jpg'
    img.setAttribute(
      'style',
      'width: 320px',
      'height: 180px'
    );
    imageDiv.classList.add('card__image')

    // текстовый блок
    const textBlock = document.createElement('div');
    textBlock.classList.add('card__text-block')

    // заголовок
    const titleBlock = document.createElement('div');
    titleBlock.classList.add('card__text-title');
/*     titleBlock.setAttribute(
      'style',
      'margin: 30px 0 0 30px; width: 100%; height: 8%'
    ) */

    const textTitle = document.createElement('p');
    textTitle.classList.add('card__title-text')
    textTitle.innerText = 'Bridge';
    titleBlock.appendChild(textTitle);
    textBlock.appendChild(titleBlock)


    // подзаголовок
    const subTitleBlock = document.createElement('div');
    subTitleBlock.classList.add('card__subtitle');
/*     subTitleBlock.setAttribute(
      'style',
      'margin: 30px 0 0 30px; width: 100%; height: 8%'
    ) */

    const textSubTitle = document.createElement('p');
    textSubTitle.classList.add('card__subtitle-text')
    textSubTitle.innerText = item.title;
    subTitleBlock.appendChild(textSubTitle);
    textBlock.appendChild(subTitleBlock)


    // описание
    const descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('card__description');
    descriptionBlock.setAttribute(
      'style',
      'align-items: center;'
    );

    const textDescription = document.createElement('p');
    textDescription.classList.add('card__description-text')
    textDescription.innerText = item.body;
    descriptionBlock.appendChild(textDescription);
    textBlock.appendChild(descriptionBlock)
  
    imageDiv.appendChild(img);
    card.appendChild(imageDiv);
    card.appendChild(textBlock);

    // создатель
    const postedByBlock = document.createElement('div');
    postedByBlock.classList.add('card__posted')
    const textPostedBy = document.createElement('p');
    textPostedBy.classList.add('card__posted-text');
    textPostedBy.innerHTML = `Posted by <span class="card__posted-span">Eugenia</span>, on July  24, 2019`;
    postedByBlock.appendChild(textPostedBy);
    textBlock.appendChild(postedByBlock);

    
    // кнопка
    const btnBlock = document.createElement('div');
    btnBlock.classList.add('card__btn-block');
    const btn = document.createElement('div');
    btn.classList.add('card__btn');
    postedByBlock.appendChild(btn);
    
    const btnText = document.createElement('p');
    btnText.innerText = 'Continue reading';
    btnText.classList.add('card__btn-text');
    btn.appendChild(btnText);
    
    btnBlock.appendChild(btn);
    textBlock.appendChild(btnBlock);
    newCardsContainer.appendChild(card);
  });

  console.log(data)
  
  // При успешном получении данных, отрисовываем их
  /*        outputDiv.innerHTML += JSON.stringify(data, null, 2); */
  startIndex += limit; // Увеличиваем индекс для следующего запроса
  totalLoaded += limit; // Увеличиваем общее количество загруженных элементов
     })
     .catch(error => {
       console.error('There was a problem with the fetch operation:', error);
       outputDiv.innerHTML = 'Произошла ошибка при загрузке данных.';
     });


 /*    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${limit}`)
    const data = await response.json();

    console.log(data) */
   // Отключаем кнопку после достижения максимального количества элементов
   if (totalLoaded >= maxElements) {
     button.disabled = true;
   }
 });