import {Link, List} from "../components/Link.tsx"
import {toSecret} from "../components/Secret.tsx"

function Stamp({children}) {
    return <div class="mx-auto text-center m-2"><span class="text-gray-400">{children}</span></div>
}

export default async function Home() {
    const body_txt = await Deno.readTextFile("./static/02_body.txt");
    const chu_txt = await Deno.readTextFile("./static/02_chu.txt");

    const body_arr = await body_txt.split("\n\n")
    .map((para) => para.replace(/\n/g, ""))
    .map((para, idx) => {
        if (/\[\[.*\]\]/.test(para)) {
            return <Stamp>{toSecret(para)}</Stamp>
        }
        return <p>{toSecret(para)}</p>
    });

    return (
        <div class="m-12 mx-auto max-w-2xl">
            {body_arr}
            <hr class="border-black"/>
            {chu_txt.split("\n\n").map((para) => <p>{toSecret(para)}</p>)}
            <List>
                <Link href="/">index</Link>
            </List>
        </div>
    );
}