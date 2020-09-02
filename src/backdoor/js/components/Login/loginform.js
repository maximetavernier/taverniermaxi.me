/**
 * Created by Tatav on 26/06/2017.
 */
import React from 'react';

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            validLogin: false,
            validPassword: false
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
        this.docElem = window.document.documentElement;
        this.didScroll = null;
        this.scrollPosition = null;

        this.scrollFn();

        [].slice.call(document.querySelectorAll('.morph-button')).forEach((bttn) => {
            new UIMorphingButton(bttn, {
                closeEl : '.close-icon',
                onBeforeOpen : () => {
                    // don't allow to scroll
                    this.noScroll();
                },
                onAfterOpen : () => {
                    // can scroll again
                    this.canScroll();
                },
                onBeforeClose : () => {
                    // don't allow to scroll
                    this.noScroll();
                },
                onAfterClose : () => {
                    // can scroll again
                    this.canScroll();
                }
            });
        });

        // for demo purposes only
        [].slice.call(document.querySelectorAll('form button')).forEach((bttn) => {
            bttn.addEventListener('click', (ev) => {
                ev.preventDefault();
            });
        });
    }

    noScrollFn() {
        window.scrollTo(this.scrollPosition ? this.scrollPosition.x : 0, this.scrollPosition ? this.scrollPosition.y : 0);
    }

    noScroll() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.addEventListener('scroll', this.noScrollFn);
    }

    scrollFn() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    canScroll() {
        window.removeEventListener('scroll', this.noScrollFn);
        this.scrollFn();
    }

    scrollHandler() {
        if(!this.didScroll) {
            this.didScroll = true;
            setTimeout(() => {
                this.scrollPage();
            }, 60);
        }
    }

    scrollPage() {
        this.scrollPosition = {
            x: window.pageXOffset || this.docElem.scrollLeft,
            y: window.pageYOffset || this.docElem.scrollTop
        };
        this.didScroll = false;
    }

    handleLoginChange(event) {
        let value = event.target.value;

        if (value.length <= 0) {
            this.setState({
                validLogin: value.length <= 0 ? false : true
            });
        } else {

        }
    }

    handlePasswordChange(event) {
        let value = event.target.value;

        if (value.length <= 0) {
            this.setState({
                validPassword: false
            });
        } else {

        }
    }

    checkVulnerabilities(str) {

    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.validLogin && this.state.validPassword)
            event.submit();
    }

    render() {
        return(
            <div className="container">
                <div class="morph-button morph-button-modal morph-button-modal-2 morph-button-fixed">
                    <button type="button">Login</button>
                    <div class="morph-content">
                        <div>
                            <div className="content-style-form content-style-form-1">
                                <i className="devicons devicons-cross close-icon"></i>
                                <h2>Login</h2>
                                <form name="login" method="post" action="./index.php">
                                    <p><label htmlFor="login">Login</label><input type="text" id="login" name="login" onChange={this.handleLoginChange} /></p>
                                    <p><label htmlFor="pwd">Password</label><input type="password" id="pwd" name="pwd" onChange={this.handlePasswordChange} /></p>
                                    <p><input type="submit" name="validate" value="Login" /></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}