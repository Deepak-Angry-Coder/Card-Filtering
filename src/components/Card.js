import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const data = props.data;
  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(data.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== data.id));
      toast.warning("Liked Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([data.id]);
      } else {
        setLikedCourses((prev) => setLikedCourses([...prev, data.id]));
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="Card border-green-50 rounded-lg relative bg-slate-700">
      <div>
        <div className="relative ">
          <img src={data.image.url} alt={data.title} className=" rounded-lg " />
          <div className="absolute -bottom-4 right-3">
            <button
              className=" bg-slate-100 p-2 rounded-full"
              onClick={clickHandler}>
              {!likedCourses.includes(data.id) ? (
                <FcLikePlaceholder fontSize="1.2rem" />
              ) : (
                <FcLike fontSize="1.2rem" />
              )}
            </button>
          </div>
        </div>
        <div className="px-5 pb-5">
          <p className="font-bold mb-2 text-neutral-100">{data.title}</p>
          <p className=" text-neutral-300 text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
