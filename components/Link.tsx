export function Link({ href, children }) {
  return (
    <a
      href={href}
      class=" text-blue-500 hover:text-blue-700 underline"
    >
      {children}
    </a>
  );
}

export function List({ children }) {
    return(
        <ul
            class="
              mt-8 mb-12 max-w-2xl mx-auto
              flex justify-around text-sm sm:text-base
            "
        >
            {children}
        </ul>
    );
}