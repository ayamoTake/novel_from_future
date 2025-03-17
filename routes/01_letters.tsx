import { useEffect, useState } from "preact/hooks";

import MailView from "../islands/MailView.tsx";
import Secret, { toSecret } from "../components/Secret.tsx";
import {Link, List} from "../components/Link.tsx";

export function Modal({url}) {
  return (
  <div class="bg-gray-700 text-white p-6 rounded-lg shadow-lg text-center relative max-w-80 max-h-60">
    <button
      class="absolute top-2 right-2 text-gray-300 hover:text-white"
      popovertarget="mypopover"
    >
      ✕
    </button>
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
    <p class="mb-4 text-lg font-bold">Are you sure you want to open the attached file?</p>
    <div class="flex justify-center gap-4">
      <a
        href={url}
        rel="noopener noreferrer"
        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
      >
        Yes, I'm sure.
      </a>
      <button
        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-100 bg-blue-700 rounded-lg hover:bg-gray-200 hover:text-blue-700 "
        popovertarget="mypopover"
      >
        No, cancel.
      </button>
    </div>
  </div>);
}

export function ImgComp({url, description}) {
return (<div>
  <button
    popovertarget="mypopover"
    class="bg-gray-100 m-auto border-4 rounded-md w-full flex ">
    <div class="
      w-20 h-20 bg-gray-300 m-2 rounded-md
    ">
    <img class="object-cover w-20 h-20"
      src="" alt="No Image" />
    </div>
    <div class="border-l p-4 text-left break-before-all w-full h-full whitespace-normal break-words " >{description}</div>
  </button>
  <div id="mypopover" popover
    // class="
    //   fixed bg-black bg-opacity-50
    //   w-full h-full
    //   justify-center items-center text-center
    // "
  >
    <Modal url={url}></Modal>
  </div>
</div>);
}

const getToEmail = async () => {
  return await <span><Secret/>@example.com</span>
}

export default async function Home() {
    const body_txt = await Deno.readTextFile("./static/01_mail_body.txt");
    const mailData = {
        subject: "Unknown",
        from: "sakaguchi@example.com",
        to: "***@example.com",
        date: "2032-01-01 00:00 AM",
        body: body_txt,
    };

    const imgData = {
      url: "./deleteImg.png",
      description: "5pmC 44GM 5p2l44KL 44G+44Gn 6ZaL44GP 44Gq",
    }

    return (
      <div>
        <MailView {...mailData}>
          <ImgComp {...imgData}/>
        </MailView>
        <List>
          <li></li>
          <li><Link href="/">index</Link></li>
          <li><Link href="/02_interview">Next</Link></li>
        </List>
      </div>
    );
}
