import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.getElementById('modal_root');
export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal (
            <div
            className={css.overlay}
            onClick={this.handleBackdropClick}
            >
                <div className={css.modal}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot
        );
    }
}


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
}