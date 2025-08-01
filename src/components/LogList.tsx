import { Trash2 } from 'lucide-react';

type Props = {
    history: { name: string; grade: string }[];
    onReset: () => void;
  };
  
const LogList = ({ history, onReset }: Props) => {
return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-left">
    <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-3 mb-4">
    Execution history
    </h2>
    {history.length > 0 ? (
        <ul className="space-y-2 max-h-52 overflow-y-auto pr-2">
        {history.slice().reverse().map((entry, index) => (
            <li key={index} className="flex items-center p-3 bg-slate-50 rounded-md">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-4">
                {entry.grade}
            </span>
            <span className="text-slate-800">{entry.name}</span>
            </li>
        ))}
        </ul>
    ) : (
        <p className="text-center text-slate-500 py-8">No history yet</p>
    )}
    {history.length > 0 && (
        <button
        onClick={onReset}
        className="w-full mt-6 bg-slate-600 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
        <Trash2 size={16} />
        Reset history
        </button>
    )}
    </div>
);
};
  
  export default LogList;
  