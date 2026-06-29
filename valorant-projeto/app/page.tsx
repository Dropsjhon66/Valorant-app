import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>VALORANT</h1>

      <Image
        src="/banner.jpg"
        alt="Banner Valorant"
        width={1000}
        height={500}
      />

      <section>
        <h2>Sobre o jogo</h2>

        <p>
          Valorant é um FPS tático desenvolvido pela Riot Games. O jogo coloca
          duas equipes de cinco jogadores para disputar rodadas utilizando armas
          e habilidades únicas de cada agente.
        </p>

        <p>
          O sucesso do jogo se deve à combinação de mira precisa, estratégia,
          trabalho em equipe e agentes com estilos de jogo diferentes.
        </p>
      </section>

      <section>
        <h2>Explore o universo Valorant</h2>

        <ul>
          <li>
            <Link href="/agentes">Conheça os Agentes</Link>
          </li>

          <li>
            <Link href="/armas">Veja as Armas</Link>
          </li>

          <li>
            <Link href="/mapas">Descubra os Mapas</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Curiosidades</h2>

        <ul>
          <li>Lançado oficialmente em 2020.</li>
          <li>Desenvolvido pela Riot Games.</li>
          <li>Possui cenário competitivo mundial.</li>
          <li>Mais de 25 agentes disponíveis.</li>
        </ul>
      </section>
    </main>
  );
}