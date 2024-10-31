import React, { useState } from "react";
import Card from "./Card";

export default function Cards(props) {
  const cardData = props.cardData;
  const category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];
  const getCourses = () => {
    if (category === "All") {
      Object.values(cardData).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return cardData[category];
    }
  };
  return (
    <div className="pb-16 card_wrapper">
      {!cardData ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              data={course}
              key={course.id}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}
    </div>
  );
}
