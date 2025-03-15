import { useState, useEffect } from "preact/hooks";

export default function MailView({ subject, from, To, date, body }) {
  return (
    <div class="p-4 border rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 class="text-xl font-bold">{subject}</h2>
      <p class="text-gray-600">From: {from}</p>
      <p class="text-gray-600">To: <To/></p>
      <p class="text-gray-500 text-sm">{date}</p>
      <hr class="my-2" />
      <p class="mt-2 whitespace-pre-wrap">{body}</p>
      <hr class="my-2" />
    </div>
  );
}
