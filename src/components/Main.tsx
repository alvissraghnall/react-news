import { useContext, Dispatch, SetStateAction } from 'react';
import { ApiStateContext } from './ApiStateContext';
import Card from './Card';

type MainProps = {
  setSelectedChannel: Dispatch<SetStateAction<string>>
  selectedChannel: string
}

const Main = ({ selectedChannel, setSelectedChannel }: MainProps) => {

  const [articles, sources] = useContext(ApiStateContext).state;

  // console.log(articles, sources);
  
  return (
    <main>
        <div className="px-5 mx-auto max-w-6xl pt-5">
            <div className="flex flex-wrap w-full mb-4 p-4">
                <div className="w-full mb-6 md:mb-0 mt-7">
                    
                    <h3 className='w-fit capitalize text-lg font-extrabold text-slate-700 border-b-2 border-b-purple-700'>{selectedChannel}</h3>
                </div>
            </div>
            <div className="grid ss:grid-cols-2 md:grid-cols-3 gap-3 justify-center border mx-auto">
              {
                articles.map(ticle => (
                  <Card 
                    imgUrl={ticle.urlToImage} 
                    name={ticle.author} 
                    datePublished={new Date(Date.parse(ticle.publishedAt))}
                    description={ticle.description}
                    title={ticle.title}
                    url={ticle.url}
                  />
                ))
              }
                
            </div>
            
        </div>
    </main>
  )
}

export default Main;