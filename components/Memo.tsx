export default function Memo({children}) {
    return (
      <div className="bg-[url('/paper_bg.jpg')] bg-cover bg-left-top p-6 shadow-lg max-w-2xl w-full">
        <div class="ml-20">
            {children}
        </div>
      </div>
    );
}
