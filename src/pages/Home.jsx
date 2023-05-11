import React, { useState } from "react";
import '../App.css'
import ProjectsListComponent from "../components/ProjectsListComponent";
import computer from "../assets/computer.png"
import EducationComponent from "../components/EducationComponent";

function HomePage() {
    const [navbaractive, setnavbaractive] = useState(false)
    return (
        <div className="App">
            <div className="navbar">
                <div className="nav-hamburger">
                    <svg onClick={()=>{setnavbaractive(!navbaractive)}} width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 12H19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 17H19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="navbar-main" style={{height: navbaractive ? '125px' : '0' }}>
                    <a href='#aboutme'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#education'>Education</a>
                </div>
            </div>

            <div className="main-content">
                <div className="image-wrap">
                    <div className="image" style={{
                        backgroundImage: 'url(/adhitht.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                </div>
                <div className="main-details">
                    <div className="myname">Adhith T</div>
                    <hr className="namebar" />
                    <div className="small-desc">
                        Undergrad Math Student at IIT Hyderabad. An ardent Fan of Technology.
                    </div>
                    <div className="buttons-wrap">
                        <button className="rounded_button" onClick={() => { window.open('adhitht.github.io/Resume.pdf') }}>Resume</button>
                        <button className="rounded_button" onClick={() => { window.open('mailto:adhith@duck.com?subject=I would like to work with you') }}>Hire Me!</button>
                    </div>
                    <div className="socials">
                        <svg onClick={() => { window.open('https://github.com/adhitht') }} width="36" height="36" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0005 0C18.303 0.00295613 12.7923 2.02092 8.45374 5.69305C4.11521 9.36517 1.23181 14.452 0.319089 20.044C-0.593628 25.636 0.523853 31.3684 3.47174 36.2164C6.41963 41.0643 11.0057 44.7115 16.4099 46.5059C17.6021 46.7272 18.0512 45.9883 18.0512 45.36C18.0512 44.7317 18.0273 42.91 18.0194 40.9184C11.3428 42.3608 9.93197 38.101 9.93197 38.101C8.84305 35.3349 7.26927 34.6078 7.26927 34.6078C5.09143 33.1299 7.43223 33.1576 7.43223 33.1576C9.84455 33.3275 11.1123 35.6194 11.1123 35.6194C13.2504 39.2667 16.7278 38.2116 18.0949 37.5952C18.3095 36.0501 18.9335 34.999 19.621 34.4023C14.2877 33.8017 8.68408 31.7548 8.68408 22.6108C8.65102 20.2394 9.53605 17.9461 11.156 16.2054C10.9096 15.6047 10.087 13.1785 11.3905 9.88286C11.3905 9.88286 13.4054 9.24271 17.9916 12.3289C21.9253 11.2592 26.0757 11.2592 30.0095 12.3289C34.5917 9.24271 36.6026 9.88286 36.6026 9.88286C37.9101 13.1706 37.0875 15.5968 36.8411 16.2054C38.4662 17.9464 39.353 20.2437 39.317 22.6187C39.317 31.7824 33.7015 33.8017 28.3602 34.3905C29.2186 35.1334 29.9856 36.5836 29.9856 38.8122C29.9856 42.0051 29.9578 44.5736 29.9578 45.36C29.9578 45.9962 30.391 46.7391 31.6071 46.5059C37.0119 44.7113 41.5984 41.0634 44.5462 36.2147C47.4941 31.3659 48.611 25.6326 47.6972 20.0401C46.7835 14.4476 43.8986 9.36071 39.5587 5.68921C35.2187 2.01771 29.7067 0.00108239 24.0085 0H24.0005Z" fill="white" />
                        </svg>
                        <svg onClick={() => { window.open('https://linkedin.com/in/adhitht') }} width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_50)">
                                <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_50">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg onClick={() => { window.open('https://instagram.com/adhith__t') }} width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_51)">
                                <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white" />
                                <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white" />
                                <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_51">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
            <hr />

            <div className="aboutme" id="aboutme">
                <div className="heading">About Me</div>
                <div className="aboutme-content">
                    <div className="aboutme-textcontent">
                        I am Adhith T, an undergrad at IIT Hyderabad pursuing Mathematics and Computing degree. I am passionate about web, app and technology in general. I am always eager to learn new things and am a quick learner. I am also a team player and enjoy working with others to achieve common goals. I am constantly exploring new technologies.
                    </div>
                    <img src={computer} alt='' className="aboutme-image" />
                </div>
            </div>

            <div className="projects" id="projects">
                <div className="heading">Projects</div>
                <div className="projects-wrap">
                    <ProjectsListComponent
                        name="Resail"
                        desc="Website to sell used goods in IIT Hyderabad. Used Google for Authentication. Frameworks - React, Express"
                        image="/resail.png"
                        link='https://resail.netlify.com'
                        />
                    <ProjectsListComponent
                        name="TedxIITHyderabad"
                        desc="Official website for Tedx IIT Hyderabad. Created using NextJS "
                        image="/tedxiithyderabad.png"
                        link='https://tedxiithyderabad.iith.ac.in' />
                    <ProjectsListComponent
                        name="OCS Demo"
                        desc="React JS website build for OCS Technical Coordinator Selection. Express JS is used for backend. "
                        image="/OCS.png" 
                        link='https://github.com/adhitht/OCS' />

                </div>
            </div>

            <div className="education" id="education">
                <div className="heading">Education</div>
                <div className="education-list">
                    <EducationComponent
                        instiname='Indian Institute of Technology, Hyderabad'
                        desc='Bachelors Degree in Mathematics and Computing'
                        timeline='2022-Present' />
                    <EducationComponent
                        instiname='Chavara Public School, Pala'
                        desc='Senior Secondary Education'
                        timeline='2020-2022' />
                    <EducationComponent
                        instiname='Amrutha Public School, Vadakara'
                        desc='Secondary Education'
                        timeline='2018-2020' />
                </div>

            </div>

            <div className="footer">
                <p>Made with ❤️ by <a href='https://adhitht.github.io'>adhitht</a></p>
            </div>

        </div>
    )

}

export default HomePage;