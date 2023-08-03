# React Challenge

Merhabalar👋,

Yeni react dokümanındaki challengeları çözmeye başladığım bir repo oluşturdum.

<img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="react" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>
<br>
 
> 
> * [Your First Component](#your-first-component)
> * [Passing Props to a Component](#passing-props-to-a-component)
> * [Conditional Rendering](#conditional-rendering)
> * [Rendering List](#rendering-list)
> * [Responding to Events](#responding-to-events)
> * [State: A Component's Memory](#state-a-components-memory)
>* [State as a Snapshot](#state-as-a-snapshot)
>* [Queueing a Series of State Updates](#queueing-a-series-of-state-updates)
>* [Updating Objects in State](#updating-objects-in-state)
>* [Updating Arrays in State](#updating-arrays-in-state)
> 

## Your First Component

<h3 style="color:DarkOrange">Challenge 1 of 4: Export the component</h3>

```javascript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

```
<h3 style="color:Green">Solution 1 of 4: Export the component</h3>

```javascript
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

```javascript
export default function Profile() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

<h3 style="color:Green">Solution 2 of 4: Fix the return statement </h3>
 
💫 ***img kapanış tagı sonrası konan noktalı virgül silinmelidir.*** 

💫 ***return işlemi için ( ) parantez açılmalıdır.***   

```javascript
export default function Profile() {
  return(
  <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko     Saruhashi" />
)
}
```

<h3 style="color:DarkOrange">Challenge 3 of 4: Spot the mistake</h3>

```javascript
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

```javascript
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

💫 ***Son olarak sıfırdan bir component oluşturmamız istenmektedir. Component ismini büyük yapmayı, Export etmeyi ve return etmeyi unutmayın :)*** 

```javascript
export default function Blog(){
  return <h1>Good job!</h1>
}
```

<img src="https://images.pexels.com/photos/5310564/pexels-photo-5310564.jpeg?auto=compress&cs=tinysrgb&w=600" alt="done" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>


## Passing Props to a Component

<h3 style="color:DarkOrange">Challenge 1 of 3: Extract a component </h3>

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

<img src="https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dontStop" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

## Conditional Rendering

<h3 style="color:DarkOrange">Challenge 1 of 3: Show an icon for incomplete items</h3>

```javascript
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

```javascript
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

```javascript
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

```javascript
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

<img src="https://images.pexels.com/photos/669986/pexels-photo-669986.jpeg?auto=compress&cs=tinysrgb&w=600" alt="make it" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

## Rendering List

<h3 style="color:DarkOrange">Challenge 1 of 4: Splitting a list in two</h3>

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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


<img src="https://images.pexels.com/photos/8695313/pexels-photo-8695313.jpeg?auto=compress&cs=tinysrgb&w=600" alt="keep trying" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

## Responding to Events

<h3 style="color:DarkOrange">Challenge 1 of 2: Fix an event handler</h3>

💫 ***Verilen butona tıklandığında tema renginin değişmesi beklenmektedir ancak değişmemektedir. Hatayı bulmamız isteniyor.***

```javascript
 return (
    <button onClick={handleClick()}>
      Toggle the lights
    </button>
  );
```

<h3 style="color:Green">Solution 1 of 2: Fix an event handler</h3>

💫 ***Örnekte handleClick( ) fonksiyonu parantezli olarak kullanılarak hemen çalıştırılmıştır. Ancak biz tıklandığında çalışmasını istiyoruz. Parantezleri silerek işlemin çağrıldığı zaman çalışmasını sağlamalıyız.*** 

```javascript
 return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
```

<h3 style="color:DarkOrange">Challenge 2 of 2: Wire up the events 
</h3>

💫 ***Verilen renk değiştirme butonuna tıklandığında ana componente bağlı olarak sayaç artmakta ancak renk değişmemektedir. Bizden istenen ise, butonun renk değiştirmek için kullanılırken sayacın artmamasını sağlamaktır.***

```javascript
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

```javascript
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

<img src="https://images.pexels.com/photos/5314960/pexels-photo-5314960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="move on" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto;height:400px"/>



## State: A Component's Memory

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

*Eğer örnekleri incelemek ve konu anlatımını okumak isterseniz bu challenge sayfasını linkliyorum. 👉 [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)*



<img src="https://images.pexels.com/photos/14019519/pexels-photo-14019519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work in progress" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

## State as a Snapshot

<h3 style="color:DarkOrange">Challenge 1 of 1: Implement a traffic light</h3>

💫 ***Verilen trafik lambasında bir sonraki adımı alert olarak gösterecek şekilde ayarlamamız istenmektedir. Yani eğer ekranda Yürü! yazıyorsa bir sonra adım Dur! olmalıdır.***

```javascript
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
  }
```

<h3 style="color:Green">Solution 1 of 1: Implement a traffic light</h3>

```javascript
export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

```
*Eğer örnekleri incelemek ve konu anlatımını okumak isterseniz bu challenge sayfasını linkliyorum. 👉 [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)*

## Queueing a Series of State Updates

<img src="https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Queueing a Series of State Updates" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

<h3 style="color:DarkOrange">Challenge 1 of 2: Fix a request counter </h3>

💫 ***Verilen sipariş sayacını düzeltmemiz istenmektedir. Bir ürün için satın al butonuna basıldığında 'beklemede' yazan kısmın artıp satış gerçeklestikten sonra 'tamamlandı' yazan kısmın artarken 'beklemede' yazan kısmın aynı oranda azalması beklenmektedir. Örneğin;*** 
- 1 sipariş alındı - 1 ürün bekleme - 0 ürün satıldı
- 1 ürün satıldı - 0 ürün beklemede
- 2 sipariş alındı - 2 ürün beklemede - 0 ürün satıldı
- 2 ürün satıldı - 0 ürün beklemede

```javascript
export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }
```

<h3 style="color:Green">Solution 1 of 2: Fix a request counter </h3>

💫 ***Birden fazla state güncellemek istersek n => n +  1 formülünü kullanırız.*** 

```javascript
export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }
```

<h3 style="color:DarkOrange">Challenge 2 of 2: Implement the state queue yourself</h3>

💫 ***Bu konunun özeti olarak değişiklik sonrası state güncellemelerini, güncelleme sonrası state değişiklikleri ve batching işlemini kapsayan bir örnek çözmemiz isteniyor. Sonucun aşağıdaki gibi görünmesi beklenmektedir.*** 

```javascript
//özet
//updater function.React adds that function to its queue.
n => n + 1 

//update state after replacing. React stores 6 as the final result and returns it from useState.
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1); // 5 + 1 = 6
}}>

//replace state after updating. React adds “replace with 42” to its queue.
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

>Base state: 0
>
>Queue: [1, 1, 1]
>
>Expected result: 1
>
>Your result: 1 (correct)
>***
>Base state: 0
>
>Queue: [n => n+1, n => n+1, n => n+1]
>
>Expected result: 3
>
>Your result: 3 (correct)
>***
>*(update state after replacing)*
>
>Base state: 0
>
>Queue: [5, n => n+1]
>
>Expected result: 6
>
>Your result: 6 (correct)
>***
>*(replace state after updating)*
>
>Base state: 0
>
>Queue: [5, n => n+1, 42]
>
>Expected result: 42
>
>Your result: 42 (correct)
>***

<h3 style="color:Green">Solution 2 of 2: Implement the state queue yourself</h3>

```javascript
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }

  return finalState;
}

```

*Eğer örnekleri incelemek ve konu anlatımını okumak isterseniz bu challenge sayfasını linkliyorum. 👉 [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)*

## Updating Objects in State

<h3 style="color:DarkOrange">Challenge 1 of 3: Fix incorrect state updates</h3>

💫 ***Verilen formda hatalı ve eksik state güncellemeleri yapılmıştır. Hataları gidermemiz isteniyor.***

```javascript
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    //useState'in ikinci parametresi olan setPlayer unutulmuş
    player.score++;
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      //kopyalama yapılmamış
      lastName: e.target.value
    });
  }
```
>
>Bu konuda nesne güncellemeleri ele alınmıştır. Nesneleri ve iç içe geçmiş nesneleri güncellerken kolay kopyalayabileceğimiz spread opetorden bahsedilmiştir. Örnekleri şu şekildedir.
>```
>setPerson({
 > ...person, // Copy the old fields
 > firstName: e.target.value // But override this one
>});
>```
>```
>setPerson({
>  ...person, // Copy other fields
>  artwork: { // but replace the artwork
>    ...person.artwork, // with the same one
>    city: 'New Delhi' // but in New Delhi!
>  }
>});
>```

<h3 style="color:Green">Solution 1 of 3: Fix incorrect state updates</h3>

```javascript
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

    function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }
```

<img src="https://images.pexels.com/photos/7290739/pexels-photo-7290739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Queueing a Series of State Updates" style="border-radius:8px;display:block;float:none;margin-left:auto;margin-right:auto"/>

<h3 style="color:DarkOrange">Challenge 2 of 3: Find and fix the mutation</h3>

💫 ***Rengini  değiştirebileceğimiz bir kutu verilmiş. Kutunun yeri de değiştirebiliyor. Kutunun arkasında sabit bir arka plan var. Kutunun yerini değiştirdikten sonra rengini değiştirirsek arka plan da hareket ediyor ancak arka planın sabit kalması istenmektedir.***

```javascript
const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    //yukarıdaki örnekteki gibi setShape işlemi atlanmış
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }
```

<h3 style="color:Green">Solution 2 of 3: Find and fix the mutation</h3>

```javascript
const initialPosition = {
  x: 0,
  y: 0
};


export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      }
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }
```

<h3 style="color:DarkOrange">Challenge 3 of 3: Update an object with Immer</h3>

💫 ***Aynı kutu örneğini Immer kütüphanesiyle çözmemiz istenmektedir.***

<h3 style="color:Green">Solution 3 of 3: Update an object with Immer</h3>

```javascript
import { useImmer } from 'use-immer';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    updateShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }
```

*Eğer örnekleri incelemek ve konu anlatımını okumak isterseniz bu challenge sayfasını linkliyorum. 👉 [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)*

## Updating Arrays in State

Dizileri mutasyona uğratmadan kullanabilmemiz için, uygulamamız gereken yöntemler ve kaçınmamız gereken yöntemler bir tablo üzerinde gösterilmiş. Hoşuma gittiği için challenge çözümünden önce bu tabloyu aktaracağım.


   |   | Kaçınılması Gereken   | Önerilen  |
|--|:-------| -----:|
| adding | push,unshift  | concat, [...arr] spread syntax    |
| removing | pop, shift,splice  | filter, slice              |
| replacing | splice, arr[i] = ... assignment     | map      |
| sorting   | reverse, sort | copy the array first           |

💖 *Splice ve Slice yöntemleri çok karıştırıldığı için, kullanılması gereken **p'siz olan** şeklinde akılda kalıcı bir ipucu verilmiş. Bu da çok hoşuma gitti.*

<h3 style="color:DarkOrange">Challenge 1 of 4: Update an item in the shopping cart 
</h3>

- Baklava (1) +
- Cheese (5) +
- Spaghetti (2) +

💫 ***Artı butonuna tıkladığımızda her ürünün kendi sipariş sayısının artması beklenmektedir. Bu işlemi gerçekleştirecek bir handleIncreaseClick( ) fonksiyonu yazmamız istenmektedir.***

<h3 style="color:Green">Soluton 1 of 4: Update an item in the shopping cart 
</h3>

```javascript
function handleIncreaseClick(productId) {
  //yeni bir dizi oluşturmak için map yöntemini kullandık
    setProducts(products.map(product => {
      //id eşleştirmesi yaparak sadece tıkladığımızın artmasını sağladık
      if (product.id === productId) {
        return {
          //spread ile nesnelerin kopyasını aldık
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }
```

<h3 style="color:DarkOrange">Challenge 2 of 4: Remove an item from the shopping cart</h3>

- Baklava (1) + -
- Cheese (5) + -
- Spaghetti (2) + -

💫 ***Bu defa eksi butonuna tıkladığımızda her ürünün kendi sipariş sayısının azalması beklenmektedir. Bu işlemi gerçekleştirecek bir handleDecreaseClick( ) fonksiyonu yazmamız istenmektedir. Küçük bir ayrıntı olarak siparişi 0'a düşen ürünün sepetten silinmesi istenmektedir.***

<h3 style="color:Green">Solution 2 of 4: Remove an item from the shopping cart</h3>

```javascript
 function handleDecreaseClick(productId) {
  //yeni bir dizi oluşturmak için map yöntemini kullandık
    let nextProducts = products.map(product => {
      //id eşleştirmesi yaparak sadece tıkladığımızın azalmasını sağladık
      if (product.id === productId) {
        return {
          //spread ile nesnelerin kopyasını aldık
          ...product,
          // 1 azalttık
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    //filter yöntemiyle sayacı 0'dan büyük olanları göster dedik
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }
```
<h3 style="color:DarkOrange">Challenge 3 of 4: Fix the mutations using non-mutative methods</h3>

💫 ***Mutasyona uğratmayan yöntemleri kullanarak handleAddTodo( ), handleChangeTodo( ) ve handleDeleteTodo( ) fonksiyonlarını yeniden yazmamız istenmektedir. Çıktı aşağıdaki gibi görünmektedir.***


>
><input placeholder="Add to do"> <button>Add</button>
>
><input type="checkbox">
><label>Buy milk</label> <button>Edit</button> <button>Delete</button>
>
><input type="checkbox">
><label>Eat tacos</label> <button>Edit</button> <button>Delete</button>
>
><input type="checkbox">
><label>Brew tea</label> <button>Edit</button> <button>Delete</button>
>
<br>

```javascript
 function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }
```
<h3 style="color:Green">Solution 3 of 4: Fix the mutations using non-mutative methods</h3>

```javascript
 function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

   function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }
```