import { Banner } from '../components/Banner'
import { useState, useEffect} from 'react'

const BannerStyle = {
    backgroundImage:"url(Banner.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
    color: "white"
}

export function Home( props ) {
    // store articles
    const [ articles, setArticles ] = useState([])

   

    const ArticleView = ( props ) => {
        return (
            <div className="article">
                <h3>{ props.article.title }</h3>
                <p>{ props.article.author }</p>
            </div>
        )
    }

    const ArticlesList = ( props ) => {
        if( articles.length ) {
            const Collection = articles.map( (article) => {
                return <ArticleView article={ article } />
            })
            return Collection
        }
        else {
            return( <p>Sorry, no articles!</p>)
        }
    }

    return(
        <main className="home">
            <Banner text="Welcome" style={BannerStyle} />
            <h1>Home</h1>
            <ArticlesList />
        </main>
    )
}

export default Home