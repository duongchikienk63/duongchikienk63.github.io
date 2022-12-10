import React, { Fragment } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faCalendarAlt, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

import "./style.scss";

const Task = (props) => (
  <Draggable
    index={props.index}
    draggableId={props.task.get("id")}
    isDragDisabled={props.isEditing}
  >
    {(provided) => (
      <div
        className="Task"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {props.isEditing ? (
          <div className="Task__editing">
            <input
              type="text"
              className="Task__editor"
              defaultValue={props.task.get("content")}
              onChange={props.handleChangeTaskContent}
            />
            <div className="Task__editing-action">
              <FontAwesomeIcon icon={faCheck} onClick={props.handleEdit}/>
              <FontAwesomeIcon icon={faBan} onClick={props.handleCancelEdit}/>
            </div>
            <div
              className="Task__editing-bgr"
              onClick={props.handleCancelEdit}
            ></div>
          </div>
        ) : (
          <Fragment>
            <div className="Task__time">
              <FontAwesomeIcon icon={faCalendarAlt} /> {props.task.get("time")}
            </div>
            <div className="Task__main">
              <div className="Task__content">{props.task.get("content")}</div>
              <div className="Task__action">
                <div className="Task__btn" onClick={props.handleChooseEditTask}>
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className="Task__btn" onClick={props.handleDeleteTask}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    )}
  </Draggable>
);

export default Task;
