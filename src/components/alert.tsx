interface AlertProps {
     state: string | null
}

export function Ilert({ state }: AlertProps) {
     if (!state) return null;

     let message = "";
     let colorClass = "";

     if (state === "draw") {
          message = "It's a Draw!";
          colorClass = "text-white border-white/50 shadow-white/20";
     } else {
          message = `Player ${state.toUpperCase()} Wins!`;
          colorClass = state === "x"
               ? "text-white border-white/50 shadow-white/20"
               : "text-white border-white/50 shadow-white/20";
     }

     return (
          <div className={`
               px-8 py-4 rounded-xl border-2 bg-slate-800/50 backdrop-blur-sm
               shadow-[0_0_30px_-5px] ${colorClass}
               transform transition-all duration-500 animate-in fade-in zoom-in
          `}>
               <h2 className="text-3xl font-black m-0 tracking-wider">
                    {message}
               </h2>
          </div>
     )
}