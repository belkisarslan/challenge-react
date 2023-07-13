# React Challenge

Merhabalar👋,

Yeni react dokümanındaki challengeları çözmeye başladığım bir repo oluşturdum.

**<h2 style="color:OrangeRed">Your First Component</h2>**
<h3 style="color:DarkOrange">Challenge 1 of 4: Export the component</h3>

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

```
<h3 style="color:Green">Solutation 1 of 4: Export the component</h3>

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

```
<h3 style="color:DarkOrange">Challenge 2 of 4: Fix the return statement </h3>

```
export default function Profile() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

<h3 style="color:Green">Solution 2 of 4: Fix the return statement </h3>
 
💫 ***img kapanış tagı sonrası konan noktalı virgül silinmelidir.*** 

💫 ***return işlemi için ( ) parantez açılmalıdır.***   

```
export default function Profile() {
  return(
  <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko     Saruhashi" />
)
}
```

<h3 style="color:DarkOrange">Challenge 3 of 4: Spot the mistake</h3>

```
function profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <profile />
      <profile />
      <profile />
    </section>
  );
}

```

<h3 style="color:Green">Solution 3 of 4: Spot the mistake</h3>

💫 ***Component isimleri büyük harfle başlamalıdır.*** 

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```
<h3 style="color:DarkOrange">Challenge 4 of 4: Your own component</h3>
<h3 style="color:Green">Solution 4 of 4: Your own component</h3>

💫 ***Son olarak sıfırdan bir component oluşturmamız istenmektedir. Component ismini büyük yapmayı, Export etmeyi ve return döndürmeyi unutmayın :)*** 

```
export default function Blog(){
  return <h1>Good job!</h1>
}
```

**<h2 style="color:OrangeRed">Passing Props to a Component</h2>**

<h3 style="color:DarkOrange">Challenge 1 of 3: Extract a component </h3>

```
import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

```

<h3 style="color:Green">Solution 1 of 3: Extract a component</h3>

💫 ***Sık tekrarlanan elementlerin prop geçilerek kodların sadeleştirilmesi istenmektedir. İki kişi için hazırlanan kart bilgilerini teke düşürelim ve ardında oluşturduğumuz profil componentlerine kişi özelliklerini prop olarak gönderelim.*** 

```
import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
    </div>
  );
}
```

<h3 style="color:DarkOrange">Challenge 2 of 3: Adjust the image size based on a prop </h3>

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

```
<h3 style="color:Green">Solution 2 of 3: Adjust the image size based on a prop</h3>


💫 ***Kullandığımız resimlerin başka bir sekmede verilen boyutlara göre açılması istenmektedir. Burada amaç tanımladığımız propların component içinde verileri değiştirerek tekrar tekrar ve farklı boyutlarda kullanabildiğimizi görmektir. Çözümde atlanmaması gereken küçük bir ayrıntı ise kapsayıcı fragment kullanımıdır. Eklenen çoklu compenentler için kapsayıcı <> </> kullanılmadığında hata vermektedir.***

```
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}

```

<h3 style="color:DarkOrange">Challenge 3 of 3: Passing JSX in a children prop</h3>

```
export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  );
}
```

<h3 style="color:Green">Solution 3 of 3: Passing JSX in a children prop</h3>

💫 ***JSX olarak gönderilen ve tekrar tekrar kullanılan özelliklerin prop olarak gönderilmesi istenmektedir.***

```
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}

```

**<h2 style="color:OrangeRed">Conditional Rendering</h2>**

<h3 style="color:DarkOrange">Challenge 1 of 3: Show an icon for incomplete items</h3>

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

<h3 style="color:Green">Solution 1 of 3: Show an icon for incomplete items</h3>

💫 ***Koşul operatörleri kullanarak, koşul sağlanıyorsa '✔' sağlanmıyorsa '❌' işaretlerini kullanmamız istenmektedir.***

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

<h3 style="color:DarkOrange">Challenge 2 of 3: Show the item importance</h3>

```
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

<h3 style="color:Green">Solution 2 of 3: Show the item importance</h3>

💫 ***Yazılan maddelerin önem derecesinin '&&' operatör kullanarak italik ve arada bir boşluk bırakılmış şekilde yazılması istenmektedir.***

```
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```
**<h2 style="color:OrangeRed">Rendering List</h2>**

<h3 style="color:DarkOrange">Challenge 1 of 4: Splitting a list in two</h3>

```
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
```

<h3 style="color:Green">Solution 1 of 4: Splitting a list in two</h3>

💫 ***Verilen kişi listesini kimyagerler ve diğer herkes olarak ikiye ayırmamız istenmektedir. Önce filter metoduyla kimyager sorgusu yapalım. Ardından map metoduyla iki ayrı liste şeklinde döndürelim***

*Eğer diğer örnekleri de incelemek isterseniz bu challenge sayfasını linkliyorum [Rendering List](https://react.dev/learn/rendering-lists).*

```
export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

```

<h3 style="color:DarkOrange">Challenge 2 of 4: Nested lists in one component </h3>

```
export default function RecipeList() {
  const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}

```

<h3 style="color:Green">Solution 2 of 4: Nested lists in one component </h3>

💫 ***Verilen yemek listesini iç içe map metodu uygulayarak önce yemek adı ardından malzeme listesi şeklinde döndürmemiz istenmektedir.***

```
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

```
🔔 ***Çıktı bu şekilde görünmektedir.***

>
># Recipes
>## Greek Salad
>- tomatoes
>- cucumber
>- onion
>- olives
>- feta
>## Hawaiian Pizza
>- pizza crust
>- pizza sauce
>- mozzarella
>- ham
>- pineapple
>## Hummus
>- chickpeas
>- olive oil
>- garlic cloves
>- lemon
>- tahini

<h3 style="color:DarkOrange">Challenge 3 of 4: Extracting a list item component </h3>

💫 ***Yukardaki yemek listesi örneğindeki aynı verileri kullanarak sık tekrar eden özelliklerin prop geçilerek yeni bir componentle fonksiyona çağırılması istenmektedir. Çıktımız yine aynı olacaktır. Sadece kod ekranımız biraz daha sade ve okunabilir hale gelecektir.***

<h3 style="color:Green">Solution 3 of 4: Extracting a list item component </h3>

```
function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

```

<h3 style="color:DarkOrange">Challenge 4 of 4: List with a separator</h3>

```
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
        </p>
      )}
    </article>
  );
}
```

<h3 style="color:Green">Solution 4 of 4: List with a separator</h3>

💫 ***Verilen şiirin satır aralarına çizgi çekmemiz istenmektedir.***

1.Çözüm

```
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

```
❗ ***1. çözümde kullanılan key={i + '-separator'} ve key={i + '-text'} açıklamaların nedeni aynı key'e sahip iki children kullanılamayacağı içindir. Fragment kullanarak bu işlemden kaçınabiliriz. 2. çözüm fragment kullanılmış çözümdür.***

2.Çözüm

```
import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}

```

❗ ***{i > 0} ifadesi çizginin ilk dizeden hemen sonra başlaması içindir. Tıpkı ilk örnekteki shift() metodunun kullanılması gibi. Aksi takdirde ilk dizenin üstünden başlamaktadır.***

🔔 ***Çıktı bu şekilde görünmektedir.***


>I write, erase, rewrite
>***
>Erase again, and then
>***
>A poppy blooms.


💖 *Bu challenge benim için çok zevkliydi.*

**<h2 style="color:OrangeRed">Responding to Events</h2>**

<h3 style="color:DarkOrange">Challenge 1 of 2: Fix an event handler</h3>

💫 ***Verilen butona tıklandığında tema renginin değişmesi beklenmektedir ancak değişmemektedir. Hatayı bulmamız isteniyor.***

```
 return (
    <button onClick={handleClick()}>
      Toggle the lights
    </button>
  );
```

<h3 style="color:Green">Solution 1 of 2: Fix an event handler</h3>

💫 ***Örnekte handleClick( ) fonksiyonu parantezli olarak kullanılarak hemen çalıştırılmıştır. Ancak biz tıklandığında çalışmasını istiyoruz. Parantezleri silerek işlemin çağrıldığı zaman çalışmasını sağlamalıyız.*** 

```
 return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
```

<h3 style="color:DarkOrange">Challenge 2 of 2: Wire up the events 
</h3>

💫 ***Verilen renk değiştirme butonuna tıklandığında ana componente bağlı olarak sayaç artmakta ancak renk değişmemektedir. Bizden istenen ise, butonun renk değiştirmek için kullanılırken sayacın artmamasını sağlamaktır.***

```
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button>
      Change color
    </button>
  );
}
```

<h3 style="color:Green">Solution 2 of 2: Wire up the events 
</h3>

💫 ***Bu gibi durumlarda, yani bir alt bileşen her çağrıldığında üst bileşene çağrı yapmasını engellemek için e.stopPropagation( ) kullanılır.***

```
export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}
```

*Eğer örnekleri incelemek ve konu anlatımını okumak isterseniz bu challenge sayfasını linkliyorum. 👉 [Responding to Events](https://react.dev/learn/responding-to-events)*

**<h2 style="color:OrangeRed">State: A Component's Memory</h2>**

<h3 style="color:DarkOrange">Challenge 1 of 4: Complete the gallery </h3>

💫 ***Bu challengeda 'next' butonuna basıldığında galerideki fotoğraflar ilerlemektedir. Ancak son fotoğrafa gelindiğinde hata vermektedir. Bizden istenen ise ya fotoğraf bitince ileri butonunu devre dışı bırakmamız ya da koşul ekleyerek fotoğrafların devam etmesini sağlamamız.***

<h3 style="color:Green">Solution 1 of 4: Complete the gallery </h3>

💫 Ben fotoğrafların devam edeceği şekilde çözdüm. Bu challengeı canlıya aldım. 

👉 [Live: Complete the gallery](https://challenge-react-jade.vercel.app/exercise)

<h3 style="color:DarkOrange">Challenge 2 of 4: Fix stuck form inputs</h3>

💫 ***Birden fazla değişkenli bir formu state kullanarak çalışır hale getirmemiz istenmektedir.***

```javascript
export default function Form() {
  let firstName = '';
  let lastName = '';

  function handleFirstNameChange(e) {
    firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
  }

  function handleReset() {
    firstName = '';
    lastName = '';
  }

```

<h3 style="color:Green">Solution 2 of 4: Fix stuck form inputs</h3>

```javascript
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }
```

<h3 style="color:DarkOrange">Challenge 3 of 4: Fix a crash</h3>

💫 ***Form gönderildikten sonra ekranda bir teşekkür mesajı görünmesi istenmektedir. Ancak görünmemektedir. Hatayı gidermeliyiz.***

```javascript
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    const [message, setMessage] = useState('')
  }
```

<h3 style="color:Green">Solution 3 of 4: Fix a crash</h3>

💫 ***Hooklar componentin yalnızca en üst seviyesinde ve aynı sırada çağırılmalıdır. Koşul içinde verilen state tanımlamasını yukarı taşımalıyız.***

```javascript
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  }
```

<h3 style="color:DarkOrange">Challenge 4 of 4: Remove unnecessary state</h3>

💫 ***Gereksiz state tanımlamasını kaldırmamız istenmiştir. Peki neden gereksiz?***

```javascript
import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    setName(prompt('What is your name?'));
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
```

<h3 style="color:Green">Solution 4 of 4: Remove unnecessary state</h3>

💫 ***Çünkü state değişkenleri yalnızca yeniden oluşturulma durumlarında bilgiyi tutması için kullanılır. Örneğimizde tek bir girdi vardır ve normal değişken olarak kaydedilmesi yeterlidir.***

```javascript
export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
```