import { Dispatch, SetStateAction } from "react";
import { MouseEventHandler, useContext } from "react";
import { ApiSourcesResponseObject, ApiStateContext } from "./ApiStateContext";
import news from "../assets/news.jpg";
import { InfoIcon, NewspaperBoldIcon } from "./icons";
import { getArticlesById } from "../services";

type SidebarProps = {
   toggle: boolean,
   setToggle: Function,
   selectedChannel: string;
   setSelectedChannel: Dispatch<SetStateAction<string>>
}

const Sidebar = ({ toggle, setToggle, selectedChannel, setSelectedChannel }: SidebarProps) => {
   const [articles, sources] = useContext(ApiStateContext).state;
   const [setArticles, setSources] = useContext(ApiStateContext).setters;

   console.log(articles, sources);

   const handleChangeSource = async (ev: MouseEvent, src: ApiSourcesResponseObject) => {
      const artles = await getArticlesById(src.id);
      console.log("jje");
      setSelectedChannel(src.name);
      setArticles(artles.articles);
   }
   
   return (
      <>
         {/* <div className="text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example" onClick={changeToggle}>
            Show drawer
            </button>
         </div> */}


         <aside className={`fixed z-40 h-screen top-14 p-4 overflow-y-auto duration-1000 ease-in-out transition-all bg-white w-80 dark:bg-gray-800 ${toggle ? "left-0" : "-left-80"}`} tabIndex={-1} aria-labelledby="drawer-label">
            <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>Info</h5>
            <button type="button" data-drawer-dismiss="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setToggle(false)}>
               <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Close menu</span>
            </button>

            <div className="max-w-[93%] mx-auto">
               <img src={news} alt="header image" className="z-10 object-contain max-h-36 mx-auto" />
            </div>
            <hr className="w-full my-6 bg-slate-400 h-0.5" />

            <div className="flex flex-col justify-center">
               {
                  sources.map(src => (
                     <button className="flex items-center gap-3 my-2 hover:bg-slate-400 hover:text-slate-100" key={src.id} onClick={(ev: MouseEvent) => handleChangeSource(ev, src)}>
                        <span className="mr-2"><InfoIcon w={25} h={25} /></span>
                        <span>{src.name}</span>
                     </button>
                  ))
               }
            </div>

         </aside>
      </>
  )
}

export default Sidebar;