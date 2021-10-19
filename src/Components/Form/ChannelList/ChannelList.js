import React from "react";
import ContentNews from "./ContentNews/ContentNews";
import { withTranslation } from "react-i18next";

const ChannelList = (props) => {
    let ContentsNews = props.state.ContentNews.map(item => <ContentNews state={props.state} dispatch={props.dispatch} id={item.id}
                                                                        price={item.price} channelName={item.channelName}
                                                                        photo={item.photo}/>)
    const { t } = props;

    console.log(props)
        return (
            <div className="pd-40 channel-list-cont" >
                <input id="idd" type="hidden" />
                <h2>{t("tv")}</h2>
                <div className="channel-list">
                    <div className="title">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="@media">
                                <label>{t("tv1")}</label>
                            </div>
                            <div className="@media">
                                <label className="date">{t("tv2")}</label>
                            </div>
                            <div className="@media mx">
                                <label> {t("tv3")}</label>
                            </div>
                        </div>
                    </div>
                    <div className="content-news">
                        <div>
                            {ContentsNews}
                        </div>

                            <div className="total">
                                <div className="more-channel">
                                    <a href="#">{t("tv4")} </a>
                                </div>
                                <div className="total-block">
                                    <div className='floatR'>{t("tv5")}<span
                                        className="fw-bold"> {props.state.total} сом</span></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

export default withTranslation() (ChannelList);