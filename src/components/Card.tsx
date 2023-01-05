import reactSvg from "../assets/react.svg";


interface CardProps {
    imgUrl: string;
    name: string;
    datePublished: Date;
    title: string;
    description: string;
    url: string;
}

const Card = ({ imgUrl, name, datePublished, title, description, url }: CardProps) => (
    <section className="max-w-sm m-4 bg-gray-200 text-gray-600 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-slate-400">
        <a href={imgUrl}>
            <img className="rounded-t-lg object-cover object-center mb-6 w-full h-72 ss:h-64 sm:h-54 md:h-60" src={imgUrl} alt="" />
        </a>
        <div className="p-5">
            <div className="flex justify-between mx-1 text-neutral-600 font-poppins font-medium">
                <p className="font-medium text-slate-800">Author: {name} </p>
                <p className="text-slate-700 text-[x-small]"> {datePublished.toDateString()} </p>
            </div>
            <a href={url}>
                <h5 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </section>
);

export default Card;