import { useEffect, useState } from 'react'

import GameBanner from './components/GameBanner'
import GameBannerProps from './components/GameBanner'

import './styles/main.css'
import logo from './assets/logo-nlw-esports.svg'
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}
function App() {

  const [games ,setGames] = useState([]);
  /**
   * (2pt) Crie uma variável de estado com o nome 'games' e defina como inicialmente um array vazio
   */

  useEffect(() => {
    fetch('http://localhost:3333/games').then(response => response.json()).then(data => {

    setGames(data)
      /**
       * (1pt) atribua o conteúdo 'data' para a variável games
       */
    }
    )
  }, [])

  return <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
    <img src={logo} alt="logo" />
    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="bg-clip-text text-transparent bg-nlw-gradient">duo</span> está aqui.
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-16">
      {

 games.map((game: Game) =><GameBanner id={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>)

        
        // (2pt) use a variável de estado `games` obtida pela API:
         //       - como condição para exibir apenas se game existir
         //      - popular a página com a lista de jogos do tipo Game usando map
          

      }
   

    </div>

  </div>
}

export default App
