import React, { Component } from 'react';
import FormatDate from './FormatDate';
import Modal from './Modal';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Image from './Image';

function ModalShow(props) {
    const url = props.link;
    if (url.includes("youtube.com")) {
        const target = '';
        const href = "#exampleModalCenter" + props.id;
        return (
            <a target={target} href={href} data-toggle="modal">
                <b className="glyphicon glyphicon-cd"></b>
                <span>
                    {props.name}
                </span>
            </a>
        )
    } else {
        const target = "props.target";
        const href = props.link;
        return (
            <a target={target} href={href} data-toggle="modal">
                <b className="glyphicon glyphicon-cd"></b>
                <span>
                    {props.name}
                </span>
            </a>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 2,
            currentPage: 0
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        axios
            .get(`https://musicapp-db.herokuapp.com/posts?_sort=id&_order=desc`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(item => <React.Fragment>
                    <div key={item.id}>
                        <div className="box box-music" key={item.id}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                                    <div className="thumbnail">
                                        <Image link={item.link} id={item.id}/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9">
                                    <div className="box-script">
                                        <div className="box-title" data-toggle="tooltip" title={item.name}>
                                            <ModalShow link={item.link} id={item.id} name={item.name} />
                                        </div>
                                        <div className="box-infor">
                                            <p>
                                                <span className="from-to">Do </span> 
                                                <b>{item.sender ? item.sender : "Nặc danh"} </b>
                                                <span className="from-to">gửi đến </span>
                                                <b>{item.receiver ? item.receiver : "Ai đấy..."}</b>
                                            </p>
                                            <div className="box-mess">
                                                <span> 
                                                <i className="fa fa-envelope"></i>
                                                Với lời nhắn...
                                                </span>
                                                <br />
                                                <span className="short-mess">
                                                    <span className="mess">{item.message}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" align-right">
                                <div className="box-time">
                                    <span >
                                        &nbsp;&nbsp;<FormatDate date={item.time}/>&nbsp;&nbsp;
                                    </span>
                                </div>
                            </div>
                            <Modal name={item.name} link={item.link} index={item.id} />
                        </div>
                    </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.componentDidMount()
        });

    };

    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        );
    }
}

export default ListItem;