import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as homeActions from '../../store/actions/homeAction';
import * as myAction from '../../store/actions/myAction';

import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../scss/mypage.scss';


// const dispatch = useDispatch();

const MyPage = (props) => {
    useEffect(() => {
        console.log(props.actions.getConfig());
        props.actions.getConfig();
        console.log("tuann", props.dataConfig.success)
    }, [])


    return (
        <div>
            success {
                props.dataConfig.success ? "true" : "false"
            }
            <p>
                {
                    props.dataConfig.data
                }
            </p>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        dataConfig: state.myReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, myAction), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
