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
        let curentPage = page[1] ? page[1] : 1;
        this.setState({page: curentPage});
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
        const { page, totalPage } = this.state
        let pageIndexs = [];
        for (let i = 1; i <= totalPage; i++) {
            pageIndexs.push(i);
        }
        return (
            <ul className="pagination">
                <li className={page === 1 ? 'disabled' : ''}>
                    {
                        page === 1 ? <span>Đầu</span> : <a href="page=1">Đầu</a> 
                    }
                </li>
                {
                    pageIndexs.map((pageIndex, index) => {
                        if (page === pageIndex) {
                            return (<li key={index} className="active"><a href={"/?page="+pageIndex}>{pageIndex}</a></li>);
                        } else {
                            return (<li key={index}><a href={"/?page="+pageIndex}>{pageIndex}</a></li>);
                        }
                    })
                }
                <li className={page === totalPage ? 'disabled' : ''}>
                    {
                        page == totalPage ? <span>Cuối</span> : <a href={"/?page="+totalPage}>Cuối</a> 
                    }
                </li>
            </ul>
        );
    }
}

export default Paginate;
