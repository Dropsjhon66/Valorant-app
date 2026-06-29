import Link from "next/link";
import Image from "next/image";

export default function Mapas() {
  return (
    <main>
      <h1>Mapas</h1>

      <Link href="/">← Voltar para Home</Link>

      <section>
        <h2>Ascent</h2>

        <Image
          src="/ascent.jpg"
          alt="Ascent"
          width={500}
          height={300}
        />

        <p>
          Ascent é um dos mapas mais tradicionais do jogo e possui
          grande importância no controle da região central.
        </p>
      </section>

      <section>
        <h2>Bind</h2>

        <Image
          src="/bind.jpg"
          alt="Bind"
          width={500}
          height={300}
        />

        <p>
          Conhecido pelos teletransportadores que permitem rotações
          rápidas entre os bombsites.
        </p>
      </section>

      <section>
        <h2>Haven</h2>

        <Image
          src="/haven.jpg"
          alt="Haven"
          width={500}
          height={300}
        />

        <p>
          Único mapa com três bombsites, exigindo mais coordenação
          defensiva das equipes.
        </p>
      </section>
    </main>
  );
}