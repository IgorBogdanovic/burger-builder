import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal'

const errorHandler = (WrappedComponent, $http) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = $http.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = $http.interceptors.response.use(res => res, err => {
                this.setState({error: err});
            });
        }

        componentWillUnmount() {
            $http.interceptors.request.eject(this.reqInterceptor);
            $http.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
};

export default errorHandler;
