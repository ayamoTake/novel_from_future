import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="m-12 mx-auto max-w-2xl flex justify-center">404 Not found.</div>
    </>
  );
}
