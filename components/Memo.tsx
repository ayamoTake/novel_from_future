export default function Memo({children}) {
    return (
      <div className="bg-[url('/paper_bg.png')] bg-cover bg-left-top p-6 shadow-lg max-w-2xl w-full m-2">
        <div class="">
            {children}
        </div>
      </div>
    );
}
