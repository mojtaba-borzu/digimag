import Head from 'next/head';
import Nav from './Nav';

export default function Home () {
  return (
    <div className="h-screen bg-blue-200">
      <head>
        <title>Digi Mraket</title>
      </head>
      <nav>
        <Nav />
      </nav>
      <main>
        main
      </main>
      <footer>
        footer
      </footer>

      hello
    </div>
  );
}
