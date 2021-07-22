import "./list.scss";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue To Watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="slidderArrow left"
          onClick={() => handleClick("left")}
          style={{display : !isMoved  && 'none'}}
        />
        <div className="container" ref={listRef}>
          <ListItem  index={0}/>
          <ListItem  index={1}/>
          <ListItem  index={2}/>
          <ListItem  index={3}/>
          <ListItem  index={4}/>
          <ListItem  index={5}/>
          <ListItem  index={6}/>
          <ListItem  index={7}/>
          <ListItem  index={8}/>
          <ListItem  index={9}/>
          <ListItem  index={10}/>
        </div>
        <ArrowForwardIosIcon
          className="slidderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
