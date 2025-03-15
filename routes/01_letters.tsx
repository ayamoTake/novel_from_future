import { useEffect, useState } from "preact/hooks";

import MailView from "../islands/MailView.tsx";
import Secret from "../components/Secret.tsx";
import {Link, List} from "../components/Link.tsx";

// 非同期関数内でDeno.readTextFileを使ってmailDataを作成する
async function getMailData() {
  try {
    // 非同期でファイル内容を読み込む
    const body_txt = await Deno.readTextFile("/static/mail-body.txt");

    // mailDataオブジェクトを作成
    const mailData = {
      subject: "Unknown",
      from: "sakaguchi@example.com",
      To: () => <span><Secret />@example.com</span>,
      date: "2032-01-01 10:00 AM",
      body: body_txt,
    };

    // mailData を返す
    return mailData;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;  // エラーが発生した場合は null を返す
  }
}

export default async function Home() {
    const body_txt = await Deno.readTextFile("./static/mail-body.txt");
    const mailData = {
        subject: "Unknown",
        from: "sakaguchi@example.com",
        To: () => <span><Secret/>@example.com</span>,
        date: "2032-01-01 00:00 AM",
        body: body_txt,
    };

    return (
      <div>
        <MailView {...mailData}/>
        <List>
          <Link href="/">index</Link>
        </List>
      </div>
    );
}
