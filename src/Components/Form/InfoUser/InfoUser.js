import React from "react";
import { withTranslation } from "react-i18next";
import {InfoUsers, RasmestyReklam} from "../../../redux/content-news-reducer";

const InfoUser = (props) =>{
    const { t } = props;
    let tel = React.createRef();
    let email = React.createRef();
    let NameFam = React.createRef();
    let info = () => {
        let obj = {}
        obj.tel = tel.current.value;
        obj.email = email.current.value;
        obj.name = NameFam.current.value;
        props.dispatch(InfoUsers(obj))
    }

    let RaxmestReklam = () => {
        props.dispatch(RasmestyReklam())
    }

    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input type="text" ref={tel} onChange={info} name="family" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")} value={props.state.infoUser.clientPhone}/>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input type="text" ref={email} onChange={info} name="name" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac2")} value={props.state.infoUser.clientEmail}/></div>
                    <div className="mbm">
                        <label>{t("user3")}</label>
                        <input type="text" ref={NameFam} onChange={info} name="middle" className="form-control rounded input-ntv"
                               id="middle" placeholder={t("userplac3")} value={props.state.infoUser.clientName}/></div>
                </div>
                <div>
                    <p>

                        {t("userteext")}
                        <br/>
                        {t("userteext2")}
                    </p>
                </div>
                <div className="btn-cont d-flex justify-content-between">
                    <div className="check-text">
                        <div>{t("userraz")}</div>
                    </div>
                    <div className="div-btn mt-3">
                        <input onClick={RaxmestReklam} type="button" name="" value={t("userBtn")}
                               className="btn-ntv"/>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default withTranslation() (InfoUser);