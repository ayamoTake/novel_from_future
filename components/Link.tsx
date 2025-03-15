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
            class="m-12 max-w-2xl mx-auto"
        >
            {children}
        </ul>
    );
}