import React from "react";
import { withTranslation } from "react-i18next";
import {addTotal, idPost} from "../../../../redux/content-news-reducer";


let ContentNews = (props) => {
        let suma = React.createRef();
        let inpt = React.createRef();



        let idAdd = (e) => {

            let target = e.currentTarget;
            let mas = {id: target.dataset.id, suma: suma.current, inptDate: inpt.current};
            props.dispatch(idPost(mas));
            // props.dispatch(addTotal())
        }

        return(
                <div data-id={props.id} onClick={idAdd}  data-bs-toggle="modal" data-bs-target="#add-modal" >
                    <div id="idTV" >
                        <div className="d-flex justify-content-between mt-3 flex-wrap" >
                            <div className="d-flex align-items-center news" >
                                <div className="img" >
                                    <img
                                        src={props.photo} />
                                </div>
                                <span className="one-title">{props.channelName}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid" >
                                <p  ref={inpt} className="show-dates rounded-start"></p>
                                <span className="img-calen" >
								</span>
                            </div>
                            <div className="d-flex align-items-center mx">
                                <div ref={suma} className="price-real" > 0 сом</div>
                            </div>
                        </div>
                    </div>
                    <div className="border_end" > </div>
                </div>


        )
}

export default withTranslation() (ContentNews);