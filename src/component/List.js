import React, { Component} from 'react';
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
        console.log(page[1]);
        let pageNow = page[1] ? page[1] : 1;
        let url = "http://localhost:3001/posts?_page="+pageNow+"&_limit=5";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                function Image(props) {
                    const link = props.link;
                    const id = link.split("v=");
                    const img = "https://img.youtube.com/vi/"+id[1]+"/mqdefault.jpg";
                    return <img src={img} />
                };

                function Time(props) {
                    return dateFormat(props.date, "yyyy-mm-dd H:MM")
                }
                let posts = data.map((post, index) => {
                    return (
                        <div className="box box-music" key={index}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                                    <div className="thumbnail">
                                        <a target="_blank" href={post.link}>
                                        <Image link={post.link}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9">
                                    <div className="box-script">
                                        <div className="box-title" data-toggle="tooltip" title={post.name}>
                                            <a target="_blank" href={post.link} >
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
                                        <Time date={post.time}/>
                                    </span>
                                </div>
                            </div>
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