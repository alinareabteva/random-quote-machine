import React from "react";
import "./QuoteButtons.css"

const QuoteButtons = ({backgroundStyles, loading, onClickNewQuote}) => {
    return (
        <div className="buttons">
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