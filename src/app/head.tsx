export default function Head() {
    return (
      <>
        <title>Seaclouds</title>
      <meta name="description" content="Opis strony dla SEO" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Ikona strony */}
      <link rel="icon" href="/logo.png" />

      {/* Preload kluczowego obrazka hero */}
      <link rel="preload" as="image" href="/offer/offer3.jpg" />
      </>
    )
  }