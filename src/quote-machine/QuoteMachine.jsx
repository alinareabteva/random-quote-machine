import React from "react";
import QuoteButtons from "./buttons/QuoteButtons";
import {useQuoteMachineState} from "./useQuoteMachineState"
import "./QuoteMachine.css"

const QuoteMachine = () => {
  const {
    color,
    loading,
    currentQuote,
    onClickNewQuote,
  } = useQuoteMachineState()
 
  const backgroundStyles = {backgroundColor: color}
  const textStyles = {color}
  
  return (
    <div id="wrapper" style={backgroundStyles}>
      <div id="quote-box">
        <div className="quote-text" style={textStyles}>
          <i className="fa fa-quote-left"></i><span id="text"> {currentQuote?.quote}</span>
        </div>
        <div className="quote-author" style={textStyles}>- <span id="author">{currentQuote?.author}</span></div> 
        <QuoteButtons backgroundStyles={backgroundStyles} loading={loading} onClickNewQuote={onClickNewQuote}/>
      </div>
      <div className="footer" style={backgroundStyles}>Created by Reabtev Alina </div>
     </div>         
  );
}

export default QuoteMachine;