import React, { Component } from 'react';
import dateFormat from 'dateformat';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const uri = window.location.href;
        const page = uri.split("?page=");
        let pageNow = page[1] ? page[1] : 1;
        let url = "https://musicapp-db.herokuapp.com/posts?_sort=id&_order=desc&_page="+pageNow+"&_limit=2";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                function Image(props) {
                    const link = props.link;
                    const id = link.split("v=");
                    if (link.includes("youtube.com")) {
                        const img = "https://img.youtube.com/vi/"+id[1]+"/mqdefault.jpg";
                        const href = "#exampleModalCenter" + props.id;
                        return (
                            <a href={href} data-toggle="modal">
                                <img src={img} alt={props.name} />
                            </a>
                        );
                    } else {
                        return (
                            <a target="_blank" href={props.link} rel="noopener noreferrer">
                                <img 
                                    src="https://cdn.imgbin.com/7/14/10/imgbin-google-play-music-computer-icons-on-off-mundo-eletrorg-nico-google-zh3ppGgmtN3LZ2UEs7usU6TPP.jpg" 
                                    alt="{props.name}"
                                    style={{width: 235, height:183}}
                                />
                            </a>
                        );
                    }
                };

                function Time(props) {
                    return dateFormat(props.date, "yyyy-mm-dd H:MM")
                }
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
                                            width="560" 
                                            height="315" 
                                            src={"https://www.youtube.com/embed/" + id[1]} 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                let posts = data.map((post) => {
                    let urlLink = post.link;
                    this.setState({target: "_blank"});
                    this.setState({href : post.link});
                    if (urlLink.includes("youtube.com")) {
                        this.setState({href : "#exampleModalCenter" + post.id});
                        this.setState({target: ''});
                        this.setState({dtoggle: 'modal'});
                    }
                    return (
                        <div className="box box-music" key={post.id}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                                    <div className="thumbnail">
                                        <Image link={post.link} id={post.id}/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9">
                                    <div className="box-script">
                                        <div className="box-title" data-toggle="tooltip" title={post.name}>
                                            <a target={this.state.target} href={this.state.href} data-toggle="modal">
                                                <b className="glyphicon glyphicon-cd"></b>
                                                <span>
                                                    {post.name}
                                                </span>
                                            </a>
                                        </div>
                                        <div className="box-infor">
                                            <p>
                                                <span className="from-to">Do </span> 
                                                <b>{post.sender ? post.sender : "Ẩn danh"} </b>
                                                <span className="from-to">gửi đến </span>
                                                <b>{post.receiver ? post.receiver : "Ẩn danh"}</b>
                                            </p>
                                            <div className="box-mess">
                                                <span> 
                                                <i className="fa fa-envelope"></i>
                                                Với lời nhắn...
                                                </span>
                                                <br />
                                                <span className="short-mess">
                                                    <span className="mess">{post.message}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" align-right">
                                <div className="box-time">
                                    <span >
                                        &nbsp;&nbsp;<Time date={post.time}/>&nbsp;&nbsp;
                                    </span>
                                </div>
                            </div>
                            <Modal name={post.name} link={post.link} index={post.id} />
                        </div>
                    )
                })
                this.setState({posts: posts});
            });
    };
    render() {
        return (
            <div>
                {this.state.posts}
            </div>
        );
    }
}

export default List;