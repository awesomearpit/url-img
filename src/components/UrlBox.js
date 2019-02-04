import React from 'react';
import '../App.css';

const UrlBox = (props) => {
    return(
        <div className="col-8 offset-2">
            <label className="bold">Url</label>
            <input onChange={props.getUrl} className="form-control" type="text" placeholder="Enter Url" />
            <br />
            <button onClick={props.click} className="btn btn-info">{props.btnName}</button>
        </div>
    );
}  

export default UrlBox;