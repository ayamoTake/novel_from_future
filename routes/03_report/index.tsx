import {Link, List} from "../../components/Link.tsx";
import {toSecret} from "../../components/Secret.tsx";
export default function Home() {
  return (
    <div>
    <List>
      <li><Link href="/03_report/mail">メール</Link></li>
      <li><Link href="/03_report/memo/01">memo_01</Link></li>
      <li><Link href="/03_report/memo/02">memo_02</Link></li>
      <li><Link href="/03_report/memo/03">memo_03</Link></li>
      <li><Link href="/03_report/memo/04">memo_04</Link></li>
      <li><Link href="/03_report.pdf">{toSecret(`報告書 12-1161番 [処理済み] Ratcliffe, Jonathan, et al. "A Proposal for Storage Circuit Memory Against LETHE". 1st ed. Oslo: *** Pless, 2052. 抜粋`)}</Link></li>
    </List>
    <List><li><Link href="/">index</Link></li></List>
    </div>
  );
}