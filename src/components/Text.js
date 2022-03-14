import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, getParagraphCount, fetchText } from "../redux/textSlice";

function Text() {
  const dispatch = useDispatch();
  const paragraphCount = useSelector(getParagraphCount);
  const type = useSelector(getType);
  const text = useSelector((state) => state.text.item);

  useEffect(() => {
    dispatch(fetchText({ paragraphCount: paragraphCount, type: type }));
  }, [paragraphCount, type]);

  return (
    <div className="mt-6 text-white">
      <div className="py-16 px-8 text-lg text-left bg-zinc-700 rounded-md">
        {text}
      </div>
    </div>
  );
}

export default Text;
