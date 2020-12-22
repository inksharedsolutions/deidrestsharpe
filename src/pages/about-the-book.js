import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-mock-up-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'deidre-t-sharpe',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Deidre T. Sharpe"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The God Queen II`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                        <p>
                                        Since I was a child, my grandmother taught me to never judge anyone, for it was for God to judge, and not me. And I didn’t, not for twenty-seven years. I never judged anyone, not even on how they looked or acted. So while I was waiting to board my flight, I kissed my brother-in-law and my niece goodbye. That’s when I saw a man, or what I thought was a man. He looked more like an angel than a god, and he looked like, that if you were to call out his name, it would be Fear. He was Latin. He was pure Castian, and he was gorgeous. I blushed, I felt the blood flow through my skin, and that’s when I knew that he could feel it too, as well as see it. 
                                        </p>

                                        <p>
                                        I am a US Navy veteran who has sacrificed the world to find God and save the planet as well as the many who are trying to survive it all. These are just some of the tasks that I was sent here to do. I live in Danvers, Massachusetts, and I am a new author who is also a very powerful psychic. I have survived the trials of heaven and hell, as well as the worlds, and it’s not over yet! 
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/the-god-queen-ii/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-god-queen-ii-deidre-t-sharpe/1136301135?ean=9781643458199',
                                    amazon: 'https://www.amazon.com/God-Queen-II-Deidre-Sharpe-ebook/dp/B08FVQ9DT5/ref=sr_1_1?dchild=1&keywords=9781643458199&qid=1597777425&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/God-Queen-II-Deidre-Sharpe/dp/1643458175/ref=sr_1_1?dchild=1&keywords=9781643458175&qid=1597777443&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-god-queen-ii-deidre-t-sharpe/1136301135?ean=9781643458175',
                                    booksamillion: 'https://www.booksamillion.com/p/God-Queen-II/Deidre-T-Sharpe/9781643458175?id=8049069540563&_ga=2.146635447.207477618.1608540991-2145380449.1604906972',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;