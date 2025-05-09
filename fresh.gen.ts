// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_01_letters from "./routes/01_letters.tsx";
import * as $_02_interview from "./routes/02_interview.tsx";
import * as $_03_index from "./routes/03_index.tsx";
import * as $_03_report_layout from "./routes/03_report/_layout.tsx";
import * as $_03_report_mail from "./routes/03_report/mail.tsx";
import * as $_03_report_memo_memonum_ from "./routes/03_report/memo/[memonum].tsx";
import * as $_04_noexist from "./routes/04_noexist.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $MailView from "./islands/MailView.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/01_letters.tsx": $_01_letters,
    "./routes/02_interview.tsx": $_02_interview,
    "./routes/03_index.tsx": $_03_index,
    "./routes/03_report/_layout.tsx": $_03_report_layout,
    "./routes/03_report/mail.tsx": $_03_report_mail,
    "./routes/03_report/memo/[memonum].tsx": $_03_report_memo_memonum_,
    "./routes/04_noexist.tsx": $_04_noexist,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/MailView.tsx": $MailView,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
