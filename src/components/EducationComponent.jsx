import React from "react";
import "../styles/EducationComponent.css"

function EducationComponent({instiname, desc, timeline}) {
    return (
        <div className="education-component">
            <div className="education-timeline">
                <div className="timeline-head">
                    <div className="timeline-eye"></div>
                </div>
                <div className="timeline-tail">
                </div>
            </div>

            <div className="education-content">
                <div className="education-instiname">{instiname}</div>
                {/* <h1>{instiname}</h1> */}
                <div className="education-desc">{desc}</div>
                <div className="education-time">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.5" cy="18.5001" r="13.3333" stroke="white" stroke-width="2" />
                        <path d="M25.4375 18.5001H18.75C18.6119 18.5001 18.5 18.3882 18.5 18.2501V13.1042" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <p>{timeline}</p></div>
            </div>

        </div>
    );
}

export default EducationComponent;