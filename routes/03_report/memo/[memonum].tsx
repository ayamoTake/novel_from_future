import Memo from "../../../components/Memo.tsx"
import { PageProps, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const {memonum} = ctx.params;
    const fileName = "./static/03_memo_" + memonum + ".txt";

    try {
        const body_txt = await Deno.readTextFile(fileName);
        return ctx.render({ memonum, body_txt })
    } catch (e) {
        return ctx.render({ memonum, body_txt: "Error: File not found." });
    }
  },
};


export default function Home(props: PageProps<{ memonum: string, body_txt: string }>) {
    const { body_txt } = props.data;
    return (
        <Memo>{body_txt}</Memo>
    );
}