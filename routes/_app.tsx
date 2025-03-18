import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  const metaData = {
    title: "SF短編『未来より』",
    description: "科学文明の行きつく最後と人類の可能性を信じた人々を描くSF短編。西暦2032年現在、高機能社会の中枢を担う機関に勤める男はある日、不審なメールを受け取る。 そこには男に託された壮大なメッセージとある指示が記されていた。 男はそのメールに興味を持ち、メールの出所を調べる日々が続く。 やがてある仮説が浮かび上がり、男は指示を実行することを決意した。男が行動を起こした後の世界は LETHE と呼ばれる文明規模の災害に見舞われる。 一方、災害に抗うための切り札を模索する研究者は男が設立した施設に集められていた。 研究者たちが出した結論はこの文明を諦め、次なる文明によって我々の叡智が再発見されることを期待するものであった。メッセージの真の目的と隠された歴史は災害の影響で永遠に失われるはずであった。 しかし奇妙なことに、存在が疑わしい手稿という形であるはずのない歴史が記載されていた。 差出人の最後の悪あがきとも取れるそれは、例の施設で全てが過ぎ去った今も極秘に保管されている。",
    image: "ogimage.png",
    url: "https://novel-from-future.deno.dev",
    favicon: "/icon-192x192.png",
  };

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metaData.title}</title>
        <meta name="despcipton" content={metaData.description} />

        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.url + "/" + metaData.image} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" href={metaData.favicon}/>
      </head>
      <body class="bg-gray-100">
        <Component />
      </body>
    </html>
  );
}
