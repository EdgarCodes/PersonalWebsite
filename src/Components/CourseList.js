import React from 'react';

export default function CourseList(props) {
    return (
        <div className = "CourseList">
            <div className = "CourseList-Header">
                Relevant Courses
            </div>

            <div className = "CourseList-List">
                {props.courses.map((course,i) =>
                    <div className = "CourseList-course" key={i}>{course}</div>
                )
                }
            </div>
    
        </div>
    )
}
