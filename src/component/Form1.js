import React, { Component } from 'react';
import axios from 'axios';

class Form1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            link : '',
            name : '',
            sender : '',
            receiver: '',
            message: ''
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        var {link, name, sender, receiver, message} = this.state;
        axios({
            method : 'POST',
            url : 'https://musicapp-db.herokuapp.com/posts',
            data: {
                link : link,
                name : name,
                sender : sender,
                receiver: receiver,
                message: message,
                time: new Date
            }
        }).then(res => {
            console.log(res);
            window.location.reload();
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="link" className="control-label required">Link <em>*</em></label>
                            <input name="link" 
                                className="form-control input-field" 
                                type="text"
                                placeholder="http://..." 
                                onChange={ this.onHandleChange }
                                value={this.state.link}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="control-label required">Bài hát <em>*</em></label>
                            <input name="name" 
                                className="form-control input-field" 
                                type="text"
                                placeholder="Tên bài hát..." 
                                onChange={ this.onHandleChange }
                                value={this.state.name}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sender" className="control-label">Người gửi</label>
                            <input name="sender" 
                                className="form-control input-field" 
                                type="text" id="sender" 
                                placeholder="Họ và tên..." 
                                onChange={ this.onHandleChange }
                                value={this.state.sender}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="receiver" className="control-label">Người nhận</label>
                            <input name="receiver" 
                                className="form-control input-field" 
                                type="text" id="receiver" 
                                placeholder="Họ và tên..." 
                                onChange={ this.onHandleChange }
                                value={this.state.receiver}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-order" className="control-label required">Lời nhắn <em>*</em></label>
                            <textarea name="message" 
                                className="form-control" 
                                rows="3"
                                placeholder="Với lời nhắn..."
                                onChange={ this.onHandleChange }
                            >
                            </textarea>
                        </div>
                        <div className="box-footer align-center">
                            <button type="submit" className="btn btn-order">Gửi</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form1;
