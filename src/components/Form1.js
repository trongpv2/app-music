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
            message: '',
            errors: {
                link: '',
                name: '',
                message: ''
            }
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value,
        });
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;
        const { link, name, message } = this.state
        if (!link) {
            formIsValid = false;
            errors["link"] = "Không để trống trường này";
        } else {
            var regLink = link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if(regLink == null) {
                formIsValid = false;
                errors["link"] = "Please enter a valid URL.";
            }
        }

        if (!name) {
            formIsValid = false;
            errors["name"] = "Không để trống trường này";
        }

        if (!message) {
            formIsValid = false;
            errors["message"] = "Không để trống trường này";
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    onSubmit(event) {
        event.preventDefault();
        if (!this.handleValidation()) {
            return;
        }
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
                time: new Date()
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
                            <label htmlFor="link" className="control-label required">Link <em>*</em></label>&nbsp;
                            <label id="link-error" className="error" htmlFor="link">{this.state.errors['link']}</label>
                            <input name="link" 
                                className="form-control input-field" 
                                type="text"
                                placeholder="http://..." 
                                onChange={ this.onHandleChange }
                                value={this.state.link}
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="control-label required">Bài hát <em>*</em></label>&nbsp;
                            <label id="name-error" className="error" htmlFor="name">{this.state.errors['name']}</label>
                            <input name="name" 
                                className="form-control input-field" 
                                type="text"
                                placeholder="Tên bài hát..." 
                                onChange={ this.onHandleChange }
                                value={this.state.name}
                                autoComplete="off"
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
                                autoComplete="off"
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
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-order" className="control-label required">Lời nhắn <em>*</em></label>&nbsp;
                            <label id="message-error" className="error" htmlFor="message">{this.state.errors['message']}</label>
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
