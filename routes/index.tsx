import { toSecret } from "../components/Secret.tsx";
import { Link } from "../components/Link.tsx";

export function Heading({children}) {
  return <h2 class="mt-3 font-bold text-lg">{children}</h2>;
}

const characters = [
  {
    name: "坂口",
    description: "不審なメールの差出人。"
  },
  {
    name: "***",
    description: "現代の中枢となるデータセンターに勤める。不審なメールの宛先人。"
  },
  {
    name: "Jams Simons",
    description: "ジャーナリスト。LETHE と *** についてのルポを執筆後、姿を消す。"
  },
  {
    name: "Hanna Chords",
    description: "歴史研究者。LETHE 直前に誘拐される。"
  },
]

export function Char({c}) {
  const name = toSecret(c.name);
  const desc = toSecret(c.description);
  return <tr class="bg-white">
    <td>{name}</td> <td>:</td> <td>{desc}</td>
  </tr>;
}

export default function Home() {
  return (
    <>
      <Heading>あらすじ</Heading>
      <p>
        西暦2032年現在、高機能社会の中枢を担う機関に勤める男はある日、不審なメールを受け取る。
        そこには男に託された壮大なメッセージとある指示が記されていた。
        男はそのメールに興味を持ち、メールの出所を調べる日々が続く。
        やがてある仮説が浮かび上がり、男は指示を実行することを決意した。
      </p>
      <p>
        男が行動を起こした後の世界は LETHE と呼ばれる文明規模の災害に見舞われる。
        一方、災害に抗うための切り札を模索する研究者は男が設立した施設に集められていた。
        研究者たちが出した結論はこの文明を諦め、次なる文明によって我々の叡智が再発見されることを期待するものであった。
      </p>
      <p>
        メッセージの真の目的と隠された歴史は災害の影響で永遠に失われるはずであった。
        しかし奇妙なことに、存在が疑わしい手稿という形であるはずのない歴史が記載されていた。
        差出人の最後の悪あがきとも取れるそれは、全てが過ぎ去った今も例の施設で極秘に保管されている。
      </p>
      <p>
        科学文明の行きつく最後と人類の可能性を信じた人々を描くSF短編。
      </p>
      <Heading>登場人物一覧</Heading>
      <table class="border-separate border-spacing-y-2 w-full">
        {...characters.map(c => <Char c={c}/>)}
      </table>
      <Heading>本作品における生成AIの使用について</Heading>
      <p>
        本作品に登場する固有名詞を発案する段階において、Chat GPT (GPT-4o mini. OpenAI. 2025-03-17) を使用した。
        詳細については <Link href="https://chatgpt.com/share/67d827ed-c868-8004-8e35-575383546090">こちら</Link> で公開する。
      </p>
    </>
  );
}
