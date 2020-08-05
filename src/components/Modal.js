import React from 'react';

function Modal(props) {
    let link = props.link;
    let id = link.split("v=");
    return (
        <div className="modal fade" id={"exampleModalCenter" + props.index} tabIndex={-1} role="dialog" aria-labelledby={props.name} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{props.name}</h4>
                </div>
                    <div className="modal-body">
                        <iframe 
                            title="{props.name}"
                            width="730" 
                            height="500" 
                            src={"https://www.youtube.com/embed/" + id[1]} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
