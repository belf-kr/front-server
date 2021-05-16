import { useState } from "react";
import useClick from "../../hooks/useClick";
import { default as S } from "../../styles/TodayTodoItem";
import { TodoItem } from "../../utils/type/TodoTodayItem/indes";

type props = {
  todoItem: TodoItem,
}

function TodayTodoItem({ todoItem }: props): JSX.Element {
  const [itemLeft, setItemLeft] = useState<number>(0);
  const refClickComponent = useClick(()=>{
    if(itemLeft === 0){
      setItemLeft(-120);
    }
    else{
      setItemLeft(0);
    }
  })

  return (
    <S.TodoItemSection>
      <S.TodoItemCard ref={refClickComponent} left={itemLeft}>
        <S.TodoTitleSection>
          <S.CourseColor bgColor={todoItem.color} />
          <S.TodoTitle>{todoItem.reminder_title}</S.TodoTitle>
        </S.TodoTitleSection>
        <S.CourseTitle>{todoItem.course_title}</S.CourseTitle>
      </S.TodoItemCard>
      <S.ButtonSection>
        <S.EventButton>
          <S.Icon width={32} height={23} fill={"#29A4FF"}>
            <path d="M9.79,22.23.75,13a2.63,2.63,0,0,1,0-3.68,2.53,2.53,0,0,1,3.57,0l0,0,7.42,7.56L27.64.76a2.51,2.51,0,0,1,3.56,0l.05,0a2.63,2.63,0,0,1,0,3.68L13.77,22.24a2.49,2.49,0,0,1-2,.75h-.19A2.5,2.5,0,0,1,9.79,22.23Z" />
          </S.Icon>
        </S.EventButton> 
        <S.EventButton>
          <S.Icon width={23} height={23} fill={"#FF587E"}>
            <path d="M18.67,22.26,11.5,15.09,4.33,22.26A2.54,2.54,0,1,1,.74,18.67h0L7.91,11.5.74,4.33A2.54,2.54,0,0,1,.74.74h0a2.54,2.54,0,0,1,3.59,0L11.5,7.91,18.67.74a2.54,2.54,0,0,1,3.59,0h0a2.54,2.54,0,0,1,0,3.59L15.09,11.5l7.17,7.17a2.54,2.54,0,0,1,0,3.59,2.55,2.55,0,0,1-3.59,0Z" />
          </S.Icon>
        </S.EventButton> 
      </S.ButtonSection>
    </S.TodoItemSection>
  );
}

export default TodayTodoItem;