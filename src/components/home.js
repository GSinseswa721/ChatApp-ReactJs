import React from "react";
import '../styles/styles.css';
import dogOne from "../assets/avatar.jpg";
import dogTwo from "../assets/dog-image-1.jpg";
import dogThree from "../assets/dog-image-2.jpg";
import dogFour from "../assets/dog-image-3.jpg";
import dogFive from "../assets/favicon-32x32.png"
import dogSix from "../assets/arrow-right.png"

const Chat = () => {
    return (
        <div className="whole-page">
            <div className="left-container"></div>
            <div className="right-container"></div>

            <div className="ui">
                <div className="frame">
                    <div className="ui-frame">
                        <div className="top-section">
                            <div className="top-container">
                                <img src={dogOne} class="avatar" />
                                <div className="user">
                                    <p className="user-name">Samuel Green</p>
                                    <p className="user-available">Available to walk</p>
                                </div>
                                <div className="hamberg">
                                    <span className="hambergs">.</span>
                                    <span className="hambergs">.</span>
                                    <span className="hambergs">.</span>
                                </div>
                            </div>
                        </div>
                        <div className="middle-section">
                            <div className="left-chats">
                                <div className="chat">
                                    <p className="paragr-chat">That sounds great. I'd be happy with that.</p>
                                </div>
                                <div className="chat">
                                    <p className="paragr-chat">Could you send over some pictures of your dog, please?</p>
                                </div>
                                <div className="chat last-chat">
                                    <p className="paragr-chat last-par">She looks so happy! The time we discussed works.
                                        How long shall I take her out for?
                                    </p>
                                </div>

                                <div className="last-form">
                                    <div className="box">
                                        <div className="circle"></div>
                                        <p className="minute">30 minute walk</p>
                                        <p className="price">$29</p>
                                    </div>

                                    <div className="box">
                                        <div className="circle"></div>
                                        <p className="minute">1 hour walk</p>
                                        <p className="price">$49</p>
                                    </div>

                                    <div className="submit-form">
                                        <input className="type-text" type="text" placeholder="Type a message..." />
                                        <div className="submit-button"><img src={dogSix} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-chats">
                                <div className="dogs">
                                    <img className="dogs-images" src={dogTwo}  />
                                    <img className="dogs-images" src={dogFour} alt="" />
                                    <img className="dogs-images" src={dogThree} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description">
                    <h1>Simple booking</h1>
                    <p className="description-paragraph">Stay in touch with our dog walkers through the chat interface.
                        This makes it easy to discuss arrangements and make bookings.
                        Once the walk has been completed you can rate your walker
                        and book again all through the chat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chat;
