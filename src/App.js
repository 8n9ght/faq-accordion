import { useState } from "react";
import data from "./data.json"


function App() {
  const [isActive, setIsActive] = useState(0)

  const handleAccordion = () => {

  }
  
  return (
    <div className="wrapper">
    <div className="faq">
      <header className="faq__header">
        <img className="faq__header__img" src="./images/icon-star.svg" alt="faq icon"></img>
        <h1>FAQs</h1>
      </header>
      {data.map((item, i) => {
        return (
          <div className="faq__card" key={i}>
        <article className="faq__card__header">
          <h2 className="faq__card__header__title">
          {item.title}
          </h2>
          <img className="faq__card__header__img" src={isActive === i ? "./images/icon-minus.svg" : "./images/icon-plus.svg"} alt="minus icon" onClick={
            () => {
                if(isActive === i){
                  setIsActive(null)
                } else {
                  setIsActive(i)
                }
             }
          }></img>
        </article>
        {isActive === i && <article className="faq__card__content">
           <p> {data[i].content}</p>
        </article>}
        {i !== (data.length - 1) && <span className="faq__card__line"></span>}
      </div>
        )
      })}
      
    </div>
  </div>
  );
}

export default App;
