import Link from "next/link";
import Image from "next/image";

export default function Agentes() {
  return (
    <main>
      <h1>Agentes</h1>

      <Link href="/">← Voltar para Home</Link>

      <section>
        <h2>Jett</h2>

        <Image
          src="/jett.jpg"
          alt="Jett"
          width={400}
          height={400}
        />

        <p>
          Jett é uma duelista sul-coreana especializada em mobilidade.
          Sua velocidade permite criar jogadas agressivas e surpreender
          os adversários.
        </p>

        <p>
          Função: Duelista
        </p>
      </section>

      <section>
        <h2>Sova</h2>

        <Image
          src="/sova.jpg"
          alt="Sova"
          width={400}
          height={400}
        />

        <p>
          Sova é um iniciador capaz de revelar posições inimigas usando
          flechas de reconhecimento e drones.
        </p>

        <p>
          Função: Iniciador
        </p>
      </section>

      <section>
        <h2>Sage</h2>

        <Image
          src="/sage.jpg"
          alt="Sage"
          width={400}
          height={400}
        />

        <p>
          Sage atua como suporte da equipe, podendo curar aliados e até
          ressuscitar companheiros eliminados.
        </p>

        <p>
          Função: Sentinela
        </p>
      </section>
    </main>
  );
}