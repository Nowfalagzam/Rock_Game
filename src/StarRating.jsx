import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./styles.css";
//<AiOutlineStar/>
//<AiFillStar/>
export default function StarRating(props) {
  const { starCount } = props;
  const count = props.starCount === 5 || props.starCount === 10 ? starCount : 5;

  const [clickCount, setCounter] = useState(0);  
  const [prev, setPrev] = useState(0);
  const handleClick = (index, givenRating) => {
    setCounter((val) => val + 1);
    //condition for half star
    if (clickCount !== 1 ) {
      setRate(givenRating - 0.5);
      setPrev(index)
      
    }
    //condition for repetative half star
    else if(prev!==index && clickCount==1){        
      setRate(givenRating - 0.5);
      setPrev(index)
      setCounter(1)
    }
    //condition for full star
     else if (clickCount >= 1) {
      setRate(givenRating);
      setCounter(0);
      setPrev(-1)
    }
  };
  const [rate, setRate] = useState();

  return (
    <>
      <div className="container">
        {[...Array(count)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label key={index} style={{ margin: "5px" }}>
              <button                   
                onClick={() => {
                  handleClick(index, givenRating);
                }}
                value={rate}
                style={{ display: "none", width: "20px" }}
              />
              <div style={{ cursor: "pointer" }}>
                {givenRating < rate + 1 || givenRating === rate ? (
                  <>
                    {rate % 1 !== 0 && index + 0.5 === rate ? (
                      <img
                        src="data:image/jpeg;base64,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"
                        className={"halfGold"}
                        alt="HalfStar"
                      ></img>
                    ) : (
                      <AiFillStar fill={"gold"} />
                    )}
                  </>
                ) : (
                  <AiOutlineStar fill={"gold"} /> 
                )}
              </div>
            </label>
          );
        })}
      </div>
      <br />
      <span>The selected Star Rating is {rate}</span>
    </>
  );
}
