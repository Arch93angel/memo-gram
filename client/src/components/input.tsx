
type InputProps = {
    name: string;
    value?: string;
    type?: string;
    onChange?: (e:unknown)=>void;
    className?: string;
    onKeyDown?: (e:unknown)=>void;
    disabled?: boolean;
}

const Input = ({
        type="text",
        name,
        value,
        onChange,
        className,
        onKeyDown,
        disabled
    }:InputProps) => {
  return (
    <div className="shift-group">

      <input 
                  type={type} 
                  value={value}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  disabled={disabled}
                  placeholder={`Enter ${name}...`}
                  // className={`placeholder-gray-300 flex-1 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full ${className}`}
                  className= {`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow s ${className="shift-input"}`}
                  />
        <label htmlFor={`${name}`} className="shift-label">{name}</label>
      </div>
  )
}

export default Input;

