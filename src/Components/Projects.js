import React from 'react'
import styles from './Ranges.module.css'
const Projects = () => {
    return (
        <div>
            <div className='row' style={{ width: "auto", margin: "10vh auto 0px auto", padding: "10vh 2vw", }}>
                {/* h2 for projects */}
                <h2 style={{ margin: "17vh 0vh 10vh 0vh", color: "red", display: "flex", justifyContent: "center", fontWeight: "bold", textDecorationLine: "underline" }} >Projects</h2>
                <div className='col' >
                    <div class="card" style={{ width: "40vw", background: "transparent", height: "auto" }}>
                        <div class="card-body">
                            <h6 class="card-title" style={{ color: "red" }}>E-commerce Website</h6>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: "0.5vh", justifyContent: "left", width: "auto", margin: "2vh 0.1vh 1vh 0.2vh", alignContent: "start" }}>
                                <div style={{ display: "flex", columnGap: "0.5vw" }}>
                                    <button className={styles.buttons}>React.js</button>
                                    <button className={styles.buttons}>Commerce.js</button>
                                </div>
                            </div>
                            <p class="card-text" style={{ color: "white", height: "30vh", overflow: "hidden" }}>Welcome to our online store, your one-stop destination for all your shopping needs. Discover a wide range of products, from trendy fashion and stylish accessories to high-quality electronics and home essentials. Our user-friendly interface ensures a seamless shopping experience, allowing you to browse through our extensive catalog with ease. With secure payment options and reliable delivery services, shopping with us is not just convenient but also worry-free. Stay up-to-date with the latest trends and promotions, as we continually update our offerings. Experience the joy of hassle-free online shopping today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card" style={{ width: "40vw", background: "transparent" }}>
                        <div class="card-body">
                            <h6 class="card-title" style={{ color: "red" }}>A Personal Web Portfolio</h6>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: "0.5vh", justifyContent: "left", width: "auto", margin: "2vh 0.1vh 1vh 0.2vh", alignContent: "start" }}>
                                <div style={{ display: "flex", columnGap: "0.5vw" }}>
                                    <button className={styles.buttons}>React.js</button>
                                    <button className={styles.buttons}>Bootstrap</button>
                                </div>
                            </div>
                            <p class="card-text" style={{ color: "white", height: "30vh", overflow: "hidden" }}>Welcome to my personal portfolio website, your go-to destination for getting to know me and my work. As a skilled professional in my field, I take pride in showcasing my expertise and experience through my portfolio. Through my carefully curated content, you can explore my background, skills, achievements, and projects. My user-friendly interface ensures that finding what you're looking for is easy and effortless. Whether you're interested in learning about my design projects or my technical skillset, my portfolio is the perfect way to get to know me better. Thank you for visiting my website, and I look forward to connecting with you soon!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' style={{ width: "auto", margin: "0vh auto ", padding: "0vh 2vw" }}>
                <div className='col'>
                    <div class="card" style={{ width: "40vw", background: "transparent" }}>
                        <div class="card-body">
                            <h6 class="card-title" style={{ color: "red" }}>Resume Generator</h6>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: "0.5vh", justifyContent: "left", width: "auto", margin: "2vh 0.1vh 1vh 0.2vh", alignContent: "start" }}>
                                <div style={{ display: "flex", columnGap: "0.5vw" }}>
                                    <button className={styles.buttons}>HTML</button>
                                    <button className={styles.buttons}>BootStrap</button>
                                </div>
                            </div>
                            <p class="card-text" style={{ color: "white", height: "30vh", overflow: "hidden" }}>Welcome to our resume generator website, your ultimate tool for creating professional and impressive resumes. Our user-friendly interface and intuitive design make it easy for you to craft your personalized resume that showcases your skills, experience, and achievements. With a wide range of customizable templates and formatting options, you have the flexibility to create a resume that reflects your unique style and professionalism. Our platform guides you through each step of the resume creation process, ensuring that all the essential sections are included and well-structured. With our resume generator, you can confidently create a standout resume that will catch the attention of potential employers. Start building your dream resume today and take your career to new heights.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card" style={{ width: "40vw", background: "transparent" }}>
                        <div class="card-body">
                            <h6 class="card-title" style={{ color: "red" }}>Shopping List</h6>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: "0.5vh", justifyContent: "left", width: "auto", margin: "2vh 0.1vh 1vh 0.2vh", alignContent: "start" }}>
                                <div style={{ display: "flex", columnGap: "0.5vw" }}>
                                    <button className={styles.buttons}>HTML</button>
                                    <button className={styles.buttons}>CSS</button>
                                </div>
                            </div>
                            <p class="card-text" style={{ color: "white", height: "30vh", overflow: "hidden" }}>Welcome to our shopping list website, the ultimate tool for efficient and organized shopping. Our user-friendly interface makes it easy for you to create, manage, and customize your shopping lists. Whether you're planning a grocery trip, a shopping spree, or a special occasion, our platform offers the convenience and flexibility you need. With smart categorization and search functionalities, you can quickly find and add items to your list, ensuring that nothing is forgotten. Collaborate with family or friends by sharing your list and keeping everyone on the same page. With seamless synchronization across devices, you can access your lists anytime, anywhere. Stay organized, save time, and reduce shopping stress with our shopping list website. Start creating your lists today for a more efficient and enjoyable shopping experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
