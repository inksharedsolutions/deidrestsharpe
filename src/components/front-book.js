import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book-mock-up-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            Since I was a child, my grandmother taught me to never judge anyone, for it was for God to judge, and not me. And I didn’t, not for twenty-seven years. I never judged anyone, not even on how they looked or acted. So while I was waiting to board my flight, I kissed my brother-in-law and my niece goodbye. That’s when I saw a man, or what I thought was a man. He looked more like an angel than a god, and he looked like, that if you were to call out his name, it would be Fear.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook