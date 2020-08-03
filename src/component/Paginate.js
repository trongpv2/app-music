import React, { Component } from 'react';
import axios from 'axios';

class Paginate extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            totalPage: 0
        };
    }

    componentDidMount() {
        const uri = window.location.href;
        const page = uri.split("?page=");
        let pageNow = page[1] ? page[1] : 1;
        this.setState({page : pageNow});
        axios({
            method: 'get',
            url: 'https://musicapp-db.herokuapp.com/posts',
            data: ''
        }).then(res => {
            let totalPage = Math.ceil(res.data.length / 2);
            this.setState({totalPage : totalPage});
        });
    }

    render() {
        let pageIndexs = [];
        for (let i = 1; i <= this.state.totalPage; i++) {
            pageIndexs.push(i);
        }
        return (
            <ul className="pagination">
                <li className = "disabled">
                    <span>Đầu</span>    
                 </li>
                {
                    pageIndexs.map((pageIndex, index) => {
                        if (this.state.page === pageIndex) {
                            return (<li key={index} className="active"><a href={"/?page="+pageIndex}>{pageIndex}</a></li>);
                        } else {
                            return (<li key={index}><a href={"/?page="+pageIndex}>{pageIndex}</a></li>);
                        }
                    })
                }
                <li >
                     <a href={"/?page="+this.state.totalPage}>Cuối</a>   
                 </li>
            </ul>
        );
    }
}

export default Paginate;
