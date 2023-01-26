import { useState, useEffect } from "react";
import {fetchQuote, getQuotesQuantity } from "../api/quotes-api"
import {getRandomFromZeroTo, getRandomValueNotEqualToCurrentValue} from "../utils"
import {DEFAULT_QUOTES, COLORS} from "./constants"

export const useQuoteMachineState = () => {
    const [quotesQuantity, setQuotesQuantity] = useState(0);
    const [currentQuote, setCurrentQuote] = useState(null);
    const [color, setColor] = useState("#333");
    const [loading, setLoading] = useState(false);
    
    const setRandomQuote = () => {
      setLoading(true)
      fetchQuote(getRandomFromZeroTo(quotesQuantity))
          .then(quote => setCurrentQuote(quote))
          .catch(error => {
            setCurrentQuote(getRandomValueNotEqualToCurrentValue(DEFAULT_QUOTES, currentQuote, 'quote'))
        })
        .finally(() => {
          setLoading(false)
          if (currentQuote) {
            setRandomColor()
          }
        })
    }
    
    const setRandomColor = () => {
      setColor(getRandomValueNotEqualToCurrentValue(COLORS, color))
    }
  
    const onClickNewQuote = () => {
        setRandomQuote();
     }
    
     useEffect(() => {
       getQuotesQuantity()
         .then(response => setQuotesQuantity(response))
         .catch(error => setQuotesQuantity(DEFAULT_QUOTES.length))
     }, []);
    
    useEffect(() => {
       if (quotesQuantity) {
         setRandomQuote();
       }
     }, [quotesQuantity]); 
    
     return {
      loading,
      currentQuote,
      color,
      onClickNewQuote,
    }
  }