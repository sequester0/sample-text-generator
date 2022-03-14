import { useState } from "react";
import { InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  setParagraph,
  getParagraphCount,
  getType,
} from "../redux/textSlice";

const { Option } = Select;
function Options() {
  const dispatch = useDispatch();
  const paragpraghCount = useSelector(getParagraphCount);
  const type = useSelector(getType);

  return (
    <div className="flex gap-4 justify-center">
      <div>
        <span className="text-lg text-white">Paragraphs: </span>
        <InputNumber
          style={{ width: 150 }}
          className="p-2"
          placeholder="Input a number"
          maxLength={2}
          min={1}
          max={99}
          onChange={(value) => dispatch(setParagraph(value))}
          defaultValue={paragpraghCount}
        />
      </div>

      <div>
        <span className="text-lg text-white">Include HTML: </span>
        <Select
          style={{ width: 100 }}
          onChange={(value) => dispatch(setType(value))}
          defaultValue={type}
        >
          <Option value="html">Yes</Option>
          <Option value="text">No</Option>
        </Select>
      </div>
    </div>
  );
}

export default Options;
