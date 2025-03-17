import { PageProps } from "$fresh/server.ts";
import { Link, List } from "../components/Link.tsx";

export function Header() {
    return (<div class="pt-12">
        <div
            class="
                flex items-center justify-center
                text-lg font-bold
            "
        >
            SF短編 『未来より』
        </div>
        <List>
        <li><Link href="/01_letters">坂口氏からのメール</Link></li>
        <li><Link href="/02_interview">宛先人の証言</Link></li>
        <li><Link href="/03_index">研究記録</Link></li>
        <li><Link href="/04_noexist.txt">存在が疑わしい手稿</Link></li>
        </List>
    </div>);
}

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
    <Header/>
    <div class="m-12 mx-auto max-w-2xl">
      <Component />
    </div>
    </div>
  );
}