/* Задание 2.
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие 
или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, 
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
*/

const initialData = [{
        product: "Лампа светодиодная",
        reviews: [{
                id: "1",
                text: "Хорошие лампы, светят долго!",
            },
            {
                id: "2",
                text: "Хороший магазин. Рекомендую.",
            },
        ],
    },
    {
        product: "Светильник с подсветкой",
        reviews: [{
            id: "3",
            text: "Светит ярко, куплю ещё.",
        }, ],
    },
    {
        product: "Светодиодная лента 12в",
        reviews: [{
            id: "4",
            text: "Легко устанавливается.",
        }, ],
    },
];

const userInput = document.querySelector('.user_input');
const sendBtn = document.querySelector('.send_btn');
const reviews = document.querySelector('.reviews');
const divError = document.querySelector('.error_msg');

initialData.forEach(element => {
    const productName = document.createElement('h3');
    productName.textContent = element.product;
    reviews.appendChild(productName);
    element.reviews.forEach(review => {
        const defaultReview = document.createElement('p');
        defaultReview.textContent = review.text;
        reviews.appendChild(defaultReview);
    });
});


sendBtn.addEventListener('click', function() {
    try {
        if (userInput.value.trim().length < 15 || userInput.value.trim().length > 500) {
            throw new Error('Просьба добавить длину комментария')
        }
        const reviewElem = document.createElement('p');
        reviewElem.textContent = (userInput.value);
        reviews.appendChild(reviewElem);
        divError.textContent = '';
    } catch (error) {
        divError.textContent = error.message;
    }
});