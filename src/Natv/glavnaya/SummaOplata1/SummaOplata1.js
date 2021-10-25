import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../../Components/Header/Header";
import { withTranslation } from "react-i18next";
import Rekvisity from "./Rekvisity";

let SummaOplata1 = (props) => {
    const { t } = props;
    let resultText;
    if(t("TextstrBan") == t("TextstrBan")){
        resultText = t("TextstrBan");
    } else{
        resultText = t("TextstrBan");
    }

    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="#" className="active">{t("navstr")}</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">{t("navbar")} </NavLink >
                    </nav>
                    <Header TextBanner={resultText}/>
                    <div className="pd-40 bg-white order">
                        <h2 className="page-title pt-4">Заявка зарегистрирована</h2>
                        <div className="d-flex justify-content-between">
                        <div className="jik">

                            <p>Вы успешно зарегистрировали заявку на размещение бегущей строки. Вам необходимо запомнить или
                                записать код оплаты, сумму к оплате, срок до которого необходимо оплатить и
                                внести оплату любым удобным для Вас способом.</p>
                            <hr/>
                            <Rekvisity/>
                        </div>
                        <div className="summad">
                            <div><h3>Уважаемый Рекламодатель</h3>
                                <ul>
                                    <li>Оплатите выбранные даты заранее и размещение будет Вам гарантировано.<br/>Количество
                                        объявлений для размещения ограничено. </li>
                                    <li>Внесите сумму не менее указанной в стоимости объявления. В противном случае мы
                                        не сможем принять Ваше объявление к размещению. Учитывайте то, что при оплате в
                                        терминале может взыматься комиссия.
                                    </li>
                                    <li>В случае оплаты позже указанного срока, дата начала размещения рекламы смещается
                                        соответственно на день, следующий за днем оплаты и сроки исполнения заказа могут
                                        быть изменены.
                                    </li>
                                    <li>Произвести оплату можно через платежные терминалы: МТС, Terem Pay, Quickpay,
                                        О!Деньги, Balance.kg, QIWI, Кыргыз Почтасы, Элсом, Optima Bank, Optima24, UMAI,
                                        MegaPay
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default withTranslation() (SummaOplata1)