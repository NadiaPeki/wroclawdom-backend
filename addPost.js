const axios = require('axios');
const slugify = require('slugify');

const post = {
    title: "Jak stworzyć idealne przestrzeń dla Twojego dziecka: Sekrety urządzania pokoju dziecięcego",
    date: new Date(),
    imageUrl: [
        "../img/photos/post23photo2.jpg",
    ],
    text: "Dzieci są naszym skarbem, a stworzenie przytulnej i bezpiecznej przestrzeni w ich pokoju ma kluczowe znaczenie dla ich rozwoju i dobrostanu. W niniejszym artykule omówimy różnorodne aspekty, poczynając od wyboru mebli i palety kolorów, a kończąc na tworzeniu funkcjonalnych stref, które sprzyjają zdrowemu wzrostowi i rozwojowi Twojego malucha.\n\n1. Wybór mebli: Praktyczność i bezpieczeństwo na pierwszym miejscu\nPierwszym krokiem do stworzenia idealnego pokoju dziecięcego jest wybór odpowiednich mebli. Postaw na funkcjonalne i bezpieczne elementy wyposażenia. Łóżka z barierkami, szafy z zaokrąglonymi rogami i miękkimi obiciami to nie tylko stylowe, ale również bezpieczne rozwiązania dla małych odkrywców.\n\n2. Paleta kolorów: Wpływ na stan emocjonalny\nKolory mają głęboki wpływ na stan emocjonalny dzieci. Jasne, pastelowe odcienie, takie jak delikatny błękit, subtelny róż czy miętowy, tworzą spokojną i przytulną atmosferę. Dodawanie jaskrawych akcentów pomaga stymulować kreatywne myślenie i koncentrację.\n\n3. Funkcjonalne strefy: Pokój do zabawy i nauki\nPodziel pokój dziecięcy na funkcjonalne strefy do zabawy i nauki. Stwórz kącik do zabaw z miękkimi dywanami i wygodnymi poduszkami. Postaw stół do rysowania i twórczości. Ważne jest zapewnienie komfortowego miejsca do wykonywania zadań domowych i czytania.\n\n4. Twórczość na ścianach: Rysowanie i dekoracje\nPuste ściany to płótno dla twórczości Twojego dziecka. Używaj specjalnych farb do ścian, które łatwo się zmywają, aby maluch mógł wyrazić swoją indywidualność. Naklejki, plakaty i ramki z ulubionymi postaciami dodadzą radości i kolorów.\n\n5. Bezpieczeństwo na pierwszym miejscu: Organizacja przestrzeni\nZadbaj o bezpieczeństwo w pokoju dziecięcym, odpowiednio organizując przestrzeń. Upewnij się, że gniazdka są zabezpieczone, a ostre krawędzie stołów i krzeseł są bezpiecznie zabezpieczone. Miękkie dywaniki na podłodze zapobiegną kontuzjom podczas aktywnej zabawy.\n\n6. Spokój i przytulność: Elementy dekoracyjne i oświetlenie\nUżyj elementów dekoracyjnych, które tworzą spokój i przytulność. Puszyste dywany, poduszki i kociki dodadzą ciepła do pokoju. Regulowane oświetlenie pozwoli tworzyć różne atmosfery — od jasnego światła do zabawy po delikatne światło przed snem.\n\n7. Przestrzeń osobista: Kącik do odpoczynku i samorozwoju\nZapewnij swojemu dziecku przestrzeń do odpoczynku i samorozwoju. Na przykład, przytulny kącik do czytania z fotelami i półkami na książki będzie idealnym miejscem do chwil wyciszenia i inspiracji.\n\n8. Ergonomia i strefa wzrostu: Meble rosnące wraz z dzieckiem\nWybieraj meble z myślą o wzroście i wieku dziecka. Regulowane stoły i krzesła pozwalają dostosować przestrzeń do potrzeb malucha, zapewniając prawidłową postawę podczas zajęć.\n\nTworzenie idealnego pokoju dziecięcego to zadanie, które wymaga uwagi dla detalii i zrozumienia potrzeb Twojego dziecka. Z uwzględnieniem bezpieczeństwa, funkcjonalności i indywidualnych preferencji można stworzyć miejsce, w którym maluch z radością spędza czas, rozwija się i rośnie. Pamiętaj, że pokój dziecięcy to nie tylko wnętrze, ale przestrzeń, w której kształtują się ważne wspomnienia i umiejętności.",
    category: "Zakup i Sprzedaż"
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
        console.error('Ошибка при добавлении поста:', error.response ? error.response.data : error.message);
    }
}

addPost();
