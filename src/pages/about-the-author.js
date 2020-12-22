import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | Deidre T. Sharpe"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                I never judge anyone, not even in how they looked or acted. 
                                </h4>
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I am a military veteran who was asked by the God’s, and Angels to write a book to help mankind. I live now in Fitchburg, Massachusetts.  I am a different kind of psychic that can hear and talk to angels, and God’s. I also work with them to help mankind, and deliver to them the messages that the God’s want mankind to understand, to help mankind. And with that, I give you the God Queen part 1, and part 2. A lot of people tried to block my messages, damaging my first book, and I hope that it did not offend my readers. So I took the original God Queen down, and put forth the God Queen 2. Hoping, that mankind will receive the God’s messages.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Deidre T. Sharpe</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;