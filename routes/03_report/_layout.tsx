import { PageProps } from "$fresh/server.ts";
import { Link, List } from "../../components/Link.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <Component />
    <List>
    <li><Link href="/03_index">Back</Link></li>
    </List>
    </div>
  );
}