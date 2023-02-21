import React from "react";
import styled from "styled-components";

export const TodoArea = (props) => {
  const {
    todos,
    onChangeCount,
    onClickEdit,
    onClickDelete,
    onClickUpdate,
    updateText,
    onChange
  } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      {todos.map((todo, index) => {
        return (
          <SList key={todo.label}>
            <input
              type="checkbox"
              onChange={onChangeCount}
              value={todo.label}
              checked={todo.checked}
            />
            {todo.open ? (
              <li>
                <input value={updateText} onChange={onChange} />
                <button onClick={() => onClickUpdate(index)}>保存</button>
              </li>
            ) : (
              <li>
                {todo.label}
                <button onClick={() => onClickEdit(index)}>編集</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            )}
          </SList>
        );
      })}
    </div>
  );
};

const SList = styled.div`
  display: flex;
  padding-bottom: 4px;
  li {
    list-style: none;
  }
`;
