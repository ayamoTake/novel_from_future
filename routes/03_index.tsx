import {Link, List} from "../components/Link.tsx";
import {toSecret} from "../components/Secret.tsx";
export default function Home() {
  return (
    <div>
    <ul class="m-12 max-w-2xl mx-auto list-disc pl-4 ">
      <li><Link href="/03_report/mail">メール</Link></li>
      <li><Link href="/03_report/memo/01">memo_01</Link></li>
      <li><Link href="/03_report/memo/02">memo_02</Link></li>
      <li><Link href="/03_report/memo/03">memo_03</Link></li>
      <li><Link href="/03_report/memo/04">memo_04</Link></li>
      <li><Link href="/03_report.pdf">{toSecret(`報告書 12-1161番 [処理済み] Ratcliffe, Jonathan, et al. "A Proposal for Storage Circuit Memory Against LETHE". 1st ed. Oslo: *** Pless, 2052. 抜粋`)}</Link></li>
    </ul>
    <List>
      <li><Link href="/02_interview">Prev</Link></li>
      <li><Link href="/">index</Link></li>
      <li></li>
    </List>
    </div>
  );
}