import React from 'react';

function List() {
    return (
        <div className="box box-music">
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                    <div className="thumbnail">
                        <a target="_blank" href="https://www.youtube.com/watch?v=a27RZu5WWpU&amp;fbclid=IwAR3E9F2UXBo4zVmq7JQp5oRP2VqLOWXQEWIHoXB3MdpfN59IEOVnl2KYv7E">
                        <img src="https://img.youtube.com/vi/a27RZu5WWpU/mqdefault.jpg " />
                        </a>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9">
                    <div className="box-script">
                        <div className="box-title" data-toggle="tooltip" title="Đi c&ugrave;ng em ">
                            <a target="_blank" href="https://www.youtube.com/watch?v=a27RZu5WWpU&amp;fbclid=IwAR3E9F2UXBo4zVmq7JQp5oRP2VqLOWXQEWIHoXB3MdpfN59IEOVnl2KYv7E" >
                            <b className="glyphicon glyphicon-cd"></b>
                            <span>
                            Đi c&ugrave;ng em 
                            </span>
                            </a>
                        </div>
                        <div className="box-infor">
                            <p>
                                <span className="from-to">Do</span>
                                <span className="short-name" data-toggle="tooltip"  title="Ẩn danh " >  
                                <b >
                                Ẩn danh 
                                </b>
                                </span>
                                <span className="from-to">gửi đến</span>
                                <span className="short-name" data-toggle="tooltip"  title="Ẩn  danh" > 
                                <b>
                                Ẩn  danh
                                </b>
                                </span>
                            </p>
                            <div className="box-mess">
                                <span> 
                                <i className="fa fa-envelope"></i>
                                Với lời nhắn...
                                </span>
                                <br />
                                <span className="short-mess">
                                    <span className="mess"> ...</span>
                                    <input type="hidden" id="mess12818" value="..." />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" align-right">
                <div className="box-time">
                    <span >
                    &nbsp;&nbsp;&nbsp;&nbsp;29/07/2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08:06&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default List;