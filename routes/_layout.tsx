import { PageProps } from "$fresh/server.ts";
import { Link, List } from "../components/Link.tsx";

export function Header() {
    return (<div class="pt-12">
        <a href="/">
        <div
            class="
                flex items-center justify-center
                text-xl font-bold
            "
        >
            SF短編 『未来より』
        </div>
        </a>
        <List>
        <li><Link href="/01_letters">不審なメール</Link></li>
        <li><Link href="/02_interview">宛先人の証言</Link></li>
        <li><Link href="/03_index">研究記録</Link></li>
        <li><Link href="/04_noexist.txt">存在が疑わしい手稿</Link></li>
        </List>
    </div>);
}

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout p-2 ">
    <Header/>
    <div class="m-5 mx-auto max-w-2xl">
      <Component />
    </div>
    <hr class="mx-auto max-w-2xl"/>
    <div class="mx-auto max-w-2xl text-sm text-gray-400">
      この作品はフィクションです。
      実在のいかなる個人や団体とも一切関係ありません。
    </div>
    </div>
  );
}