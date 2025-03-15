import {Link, List} from "../components/Link.tsx";
export default function Home() {
  return (
    <List>
      <li><Link href="/01_letters">坂口氏からのメール</Link></li>
      <li><Link href="/02_interview">宛先人の証言</Link></li>
      <li><Link href="/03_report">研究記録</Link></li>
      <li><Link href="/04_noexist">存在が疑わしい手稿</Link></li>
    </List>
  );
}
