import React from "react";
import { Input, Space, Tag } from 'antd';
import { messageDp } from "../../assets";
const { Search } = Input


function AllMessages() {
    return <div>
        <div className="message-Box-all-messages">
            <div className="message-all-users-bar">
                <div className="message-all-users-bar-top">

                </div>
                <div className="message-all-users-bar-bottom">
                    <div className="message-all-users-bar-bottom-search">
                        <Search
                            placeholder="input search text"
                            style={{
                                width: 350,
                            }}
                            size="large"
                        />
                        <div>
                            <div className="message-received-preview">
                                <div className="all-message-profile-pic">
                                    <img src={messageDp} alt="DP" />
                                </div>
                                <div className="all-message-name">
                                    <div className="all-message-timeandname" >
                                        <div className="all-message-name-tag"><b>Sasindu Nadeeshan</b></div>
                                        <div style={{ fontSize: "15px", color: "#b3b3b3", padding: "3px 0 0 0" }}>12.00</div>
                                    </div>
                                    <div style={{ fontSize: "15px", color: "#b3b3b3" }}>Nice Product</div>
                                    <div><Tag color="purple">purple</Tag></div>
                                </div>
                            </div>
                            <div className="message-received-preview">
                                <div className="all-message-profile-pic">
                                    <img src={messageDp} alt="DP" />
                                </div>
                                <div className="all-message-name">
                                    <div className="all-message-timeandname" >
                                        <div className="all-message-name-tag"><b>Sasindu Nadeeshan</b></div>
                                        <div style={{ fontSize: "15px", color: "#b3b3b3", padding: "3px 0 0 0" }}>12.00</div>
                                    </div>
                                    <div style={{ fontSize: "15px", color: "#b3b3b3" }}>Nice Product</div>
                                    <div><Tag color="purple">purple</Tag></div>
                                </div>
                            </div>
                            <div className="message-received-preview">
                                <div className="all-message-profile-pic">
                                    <img src={messageDp} alt="DP" />
                                </div>
                                <div className="all-message-name">
                                    <div className="all-message-timeandname" >
                                        <div className="all-message-name-tag"><b>Sasindu Nadeeshan</b></div>
                                        <div style={{ fontSize: "15px", color: "#b3b3b3", padding: "3px 0 0 0" }}>12.00</div>
                                    </div>
                                    <div style={{ fontSize: "15px", color: "#b3b3b3" }}>Nice Product</div>
                                    <div><Tag color="purple">purple</Tag></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="message-reply-admin">
                    <div className="message-all-users-bar-top-right">
                        <div>
                            <img src={messageDp} alt="dp" style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                margin: "15px 0 0 300px"
                            }} />
                        </div>
                        <div style={{ margin: "25px 0 0 20px" }}>
                            <b
                                style={{
                                    fontSize: "20px",
                                }}>Sasindu Nadeeshan</b>
                        </div>
                    </div>
                    <div>
                        <div className="message-reply-admin-box">
                            <div className="message-receved-admin">
                                <img src={messageDp} alt="dp" style={{ width: "40px", height: "40px" }} />
                                <div style={{ background: "#f1f1f1", borderRadius: "11px", margin: "0 0 0 15px", padding: "6px", maxWidth: "400px" }}>
                                    <p>Hi, I'm Sasindu Nadeeshan. I'm interested in your product. Can you provide me more details about the product?</p>
                                </div>
                            </div>
                            <div className="message-send-admin">
                                <div style={{ background: "#7b63ff", borderRadius: "11px", margin: "0 15px 0 0", padding: "6px", maxWidth: "400px", color:"#ffffff"}}>
                                    <p>Ask anything us</p>
                                </div>
                                <img src={messageDp} alt="dp" style={{ width: "40px", height: "40px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default AllMessages;
