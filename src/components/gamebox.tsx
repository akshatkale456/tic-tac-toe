import { useState, useEffect } from "react"
import { Ilert } from "./alert"

const wincombination = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8],
     [0, 3, 6], [1, 4, 7], [2, 5, 8],
     [0, 4, 8], [2, 4, 6]
]

export function Game() {

     const [board, setboard] = useState(Array(9).fill(null))
     const [xturn, setturn] = useState(true)
     const [alert, setalert] = useState(false)
     const [winner, setWinner] = useState<string | null>(null);

     function hnadelclick(index: number) {
          if (board[index] !== null || winner) return

          const newBoard = [...board];
          newBoard[index] = xturn ? "x" : "o"
          setboard(newBoard)
          setturn(!xturn)
     }

     useEffect(() => {
          let win = checkwinner(wincombination)
          if (win) {
               setWinner(win);
               setalert(true)

          }
          else if (board.every((cell) => cell !== null)) {
               setWinner("draw")
               setalert(true)
          }
     }, [board])

     function checkwinner(winner: any[]) {
          for (let i = 0; i < winner.length; i++) {
               let [a, b, c] = winner[i]
               if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {

                    return board[a]
               }
          }

     }
     function resetgame() {
          setboard(Array(9).fill(null))
          setturn(true)
          setWinner(null)
          setalert(false)
     }

     return (
          <div className=" flex flex-col items-center justify-center p-4 mt-4">

               <div className="mb-8 text-center">

                    <div className="bg-orange-900 dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg text-white border border-orange-600 dark:border-gray-700">
                         {winner ? (
                              <span className="text-xl font-bold text-white ">
                                   Game Over!
                              </span>
                         ) : (
                              <span className={`text-xl font-bold ${xturn ? "text-white" : "text-white"}`}>
                                   {xturn ? "X's Turn" : "O's Turn"}
                              </span>
                         )}
                    </div>
               </div>


               <div className="grid grid-cols-3 gap-3 bg-orange-400 dark:bg-gray-700 p-4 rounded-2xl shadow-2xl border border-slate-700 dark:border-gray-600 backdrop-blur-sm">
                    {board.map((cell, index) => {
                         const isX = cell === "x";
                         const isO = cell === "o";
                         return (
                              <div
                                   role="button"
                                   key={index}
                                   id={String(index)}
                                   onClick={() => hnadelclick(index)}
                                   className={`
                                        w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 
                                        bg-orange-200 dark:bg-gray-600 rounded-xl flex items-center justify-center 
                                        text-5xl sm:text-6xl font-black shadow-inner
                                        transition-all duration-200 transform hover:scale-105 
                                        cursor-pointer hover:bg-orange-300 dark:hover:bg-gray-500
                                        ${isX ? "text-orange-600 dark:text-blue-400" : ""}
                                        ${isO ? "text-teal-600 dark:text-rose-400" : ""}
                                   `}
                              >
                                   {cell && (
                                        <span className="animate-bounce-in">
                                             {cell.toUpperCase()}
                                        </span>
                                   )}
                              </div>
                         )
                    })}
               </div>


               <div className="mt-8 min-h-60px flex flex-col items-center gap-4">
                    {alert && (
                         <div className=" bg-orange-600 dark:bg-gray-800 text-white  p-4 rounded-lg border border-slate-700 dark:border-gray-600 shadow-xl">
                              <Ilert state={winner} />
                         </div>
                    )}

                    <button
                         onClick={resetgame}
                         className="px-8 py-3 bg-orange-900 dark:bg-blue-600 text-white font-bold rounded-lg 
                         shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-200
                         active:scale-95 text-lg"
                    >
                         Reset Game
                    </button>
               </div>
          </div>
     )
}