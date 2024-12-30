/* eslint-disable react/prop-types */
export function CustomBtn(props){

    return <button onClick={props.onClick} className="w-[300px] transition-ease-in-out duration-200 hover:-translate-y-1 border-2 border-slate-900 bg-slate-200 shadow-lg p-2 rounded-xl">{props.label}</button>

}