const axios = require('axios');
const slugify = require('slugify');

const post = {
    title: "Przeprowadzka na nowe miejsce: Porady dotyczące Zachowania Zdrowego Rozsądku",
    date: "2023-12-14T12:00:00Z",
    imageUrl: [
        "../img/photos/post23photo2.jpg",
    ],
    text: "Przeprowadzka na nowe miejsce może być trudna, ale dzięki właściwemu planowi i organizacji można sprawić, że ten proces będzie bardziej zarządzalny i mniej stresujący. Oto 10 konkretnych kroków, które pomogą Ci się przeprowadzić i zachować równowagę emocjonalną:\n\n<strong>Krok 1: Stwórz szczegółowy plan działań</strong>\nUstal harmonogram. Podaj daty kluczowych wydarzeń, takich jak pakowanie, transport i rozpakowywanie.\nPrzygotuj listę rzeczy. Sporządź szczegółową listę tego, co planujesz zabrać ze sobą.\nOkreśl budżet. Z góry oblicz budżet na przeprowadzkę, uwzględniając wszystkie możliwe koszty.\n\n<strong>Krok 2: Pakuj mądrze i uporządkuj</strong>\nZakup opakowania z wyprzedzeniem. Obejmuje to pudła, taśmę, folię bąbelkową i markery.\nPakuj wg kategorii. Ułatwi to rozpakowywanie i poszukiwanie potrzebnych rzeczy.\nOznaczaj pudła. Wskazuj zawartość i pokój, do którego mają być dostarczone.\n<img src=\"/img/photos/post23photo1.jpg\" alt=\"moving\" />\n\n<strong>Krok 3: Przygotuj się na przybycie</strong>\nZbadaj nowe mieszkanie. Przed rozładunkiem dokładnie obejrzyj swoje nowe miejsce zamieszkania.\nZaczynaj od najważniejszych rzeczy. Nie próbuj rozpakować wszystkiego od razu, zacznij od najważniejszych rzeczy.\n\n<strong>Krok 4: Ustal priorytety</strong>\nStwórz kąt \"Natychmiastowe Potrzeby\". Spakuj do tego pudełka niezbędne rzeczy na pierwszy czas.\nZrób zdjęcia podłączeń. Przed rozkładaniem zrób zdjęcia podłączeń elektroniki.\nPrzestrzegając tych konkretnych kroków, ułatwisz sobie przeprowadzkę i unikniesz wielu problemów. Pamiętaj, że plan i uporządkowanie są Twoimi najlepszymi sprzymierzeńcami w tym procesie. Powodzenia w nowym miejscu!\n",
    category: "Wynajem"
};

// Используем slugify для создания слага из заголовка
const slug = slugify(post.title, { lower: true });

// Добавляем slug к объекту поста
post.slug = slug;

async function addPost() {
    try {
        const response = await axios.post('http://localhost:3002/posts', post);
        console.log('Успешно добавлен пост:', response.data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

addPost();
