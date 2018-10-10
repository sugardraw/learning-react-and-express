import React from "react";

class ToDoList extends React.Component {
    render() {
        return (
            <div className="row  mt-3 pt-3 text-center">
                <div className="col alert bg-light text-primary m-3 p-3">
                    1 of 3.<br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero repellendus earum cumque tempore nesciunt eius ut eaque vel animi?
                </div>
                <div className="col alert bg-light text-primary m-3 p-3">
                    2 of 3.<br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero repellendus earum cumque tempore nesciunt eius ut eaque vel animi?
                    
                </div>
                <div className="col alert bg-light text-primary m-3 p-3">
                    3 of 3.<br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse libero repellendus earum cumque tempore nesciunt eius ut eaque vel animi?
                    
                </div>
            </div>
        )
    }
}

export default ToDoList;