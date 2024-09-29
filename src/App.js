import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Header, Main, Archive, Footer, Button } from "./Components";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <Button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </Button>

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
