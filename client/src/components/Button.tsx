import Spinner from "./spinner";


type ButtonProps = {
    text?:string;
    className?:string;
    secondary?:boolean;
    onClick?:()=>void;
    loading?:boolean;
};

function Button({
    className,
    secondary,
    text = "Button",
    onClick,
    loading = false,
    }: ButtonProps) {
        return (
            <button 
            className={`rounded-full flex items-center gap-2 font-medium justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-900   hover:text-white hover:bg-slate-800 hover:border-slate-800 
                ${secondary ? "bg-myPink":"bg-myBlue"}
                ${className} ${loading && "cursor-wait"}`}
            onClick={onClick}
            disabled={loading}
            >
                {loading && <Spinner/>}
                {text}
            </button>
        );
    }

export default Button;