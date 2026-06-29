import Link from "next/link";
import Image from "next/image";

export default function Armas() {
  return (
    <main>
      <h1>Armas</h1>

      <Link href="/">← Voltar para Home</Link>

      <section>
        <h2>Comparação de Rifles</h2>

        <table>
          <thead>
            <tr>
              <th>Arma</th>
              <th>Classe</th>
              <th>Preço</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Vandal</td>
              <td>Rifle</td>
              <td>2900</td>
            </tr>

            <tr>
              <td>Phantom</td>
              <td>Rifle</td>
              <td>2900</td>
            </tr>

            <tr>
              <td>Operator</td>
              <td>Sniper</td>
              <td>4700</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Vandal</h2>

        <Image
          src="/vandal.jpg"
          alt="Vandal"
          width={750}
          height={250}
        />

        <p>
          Rifle muito popular devido à capacidade de eliminar um inimigo
          com apenas um tiro na cabeça em qualquer distância.
        </p>
      </section>

      <section>
        <h2>Phantom</h2>

        <Image
          src="/phantom.jpg"
          alt="Phantom"
          width={750}
          height={250}
        />

        <p>
          Possui disparos mais silenciosos e controle de recuo mais fácil,
          sendo uma excelente opção para trocas rápidas.
        </p>
      </section>
    </main>
  );
}