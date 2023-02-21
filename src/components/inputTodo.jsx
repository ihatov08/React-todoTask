import React from "react";
import styled from "styled-components";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <SInput>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>保存</button>
    </SInput>
  );
};

const SInput = styled.div`
  width: 400px;
  height: 30px;
  margin: 8px;
  padding: 8px;
`;
