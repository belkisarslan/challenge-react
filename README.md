# React Challenge

Merhabalar👋,

Yeni react dokümanındaki challengeları çözmeye başladığım bir repo oluşturdum.

**<h2>Your First Component</h2>**
<h3>Challenge 1 of 4: Export the component</h3>

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
<h3>Solutation 1 of 4: Export the component</h3>

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
<h3>Challenge 2 of 4: Fix the return statement </h3>

```
export default function Profile() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

<h3>Solutation 2 of 4: Fix the return statement </h3>
 
💫 ***img kapanış tagı sonrası konan noktalı virgül silinmelidir.*** 

💫 ***return işlemi için ( ) parantez açılmalıdır.***   

```
export default function Profile() {
  return(
  <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko     Saruhashi" />
)
}
```

<h3>Challenge 3 of 4: Spot the mistake</h3>

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

<h3>Solutation 3 of 4: Spot the mistake</h3>

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


