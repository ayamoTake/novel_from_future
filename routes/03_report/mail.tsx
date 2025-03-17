import MailView from "../../islands/MailView.tsx";
import {Link, List} from "../../components/Link.tsx";

export default async function Home() {
    const body_txt = await Deno.readTextFile("./static/03_mail.txt");
    const mailData = {
        subject: "講演会『ローマ帝国の衰亡を学ぶ』内容変更のお願い",
        from: "thomas.albert@conference.org",
        To: () => <span>hc_hasi@hu-de.de</span>,
        date: "2041-10-15 10:41 AM",
        body: body_txt,
    };

    return (
      <div>
        <MailView {...mailData} children={""}/>
      </div>
    );
}
