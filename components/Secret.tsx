export default function Secret() {
    return(
        <span class="inline-block w-10 h-5 bg-black align-text-bottom"></span>
    );
}

export const insertSecret = (part: string, idx: number) => {
    if (idx == 0) {
        return <span key={idx}>{part}</span>;
    }
    return (
        <>
            <Secret key={idx}/>
            <span key={idx + 1}>{part}</span>
        </>
    );
}
export const toSecret = (paraStr: string) => {
    return paraStr.split("***").map(insertSecret);
};