import React from 'react'
import AuthorImg from '../../static/author/author-profile.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        I am a military veteran who was asked by the God’s, and Angels to write a book to help mankind. I live now in Fitchburg, Massachusetts.  I am a different kind of psychic that can hear and talk to angels, and God’s.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Deidre T. </span>
                            <span>Sharpe</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;