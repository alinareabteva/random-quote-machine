import React from "react";
import "./QuoteButtons.css"

const QuoteButtons = ({backgroundStyles, loading, onClickNewQuote}) => {
    return (
        <div className="buttons">
          <a
            className="button"
            id="github-quote"
            title="Post this quote on GitHub!"
            target="_top"
            style={backgroundStyles}
            >
            <i className="fa fa-github"></i>
          </a>
          <a
            className="button"
            id="linkedin-quote"
            title="Post this quote on Linkedin!"
            target="_blank"
            style={backgroundStyles}
            >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            className="button"
            id="tweet-quote"
            title="Post this quote on Twitter!"
            target="_blank"
            style={backgroundStyles}
            href="twitter.com/intent/tweet"
            >
            <i className="fa fa-twitter"></i>
          </a>
          <button 
            className="button" 
            id="new-quote" 
            style={backgroundStyles} 
            onClick={onClickNewQuote} 
            disabled={loading}
          >
            New quote
          </button>
        </div>
    )
}

export default QuoteButtons;