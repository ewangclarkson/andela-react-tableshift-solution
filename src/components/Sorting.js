import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Sorting = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState(true);
    const addItem = (e) => {
        e.preventDefault();
        if (text) {
            let temp =[...items, text];
            toggle ?temp.sort() : temp.sort().reverse();
            setItems(temp);
            setText('')
        }
    }

    const sortAscendingOrder = () => {
        items.sort();
        setItems(items);
        setToggle(!toggle);
    }

    const sortDescendingOrder = () => {
        items.sort().reverse();
        items.toLowerCase()
        setItems(items);
        setToggle(!toggle);
    }

    return (
        <div className="container"><br/>
            <div className="card">
                <div className="card-header">
                    <h6 className="card-title">Solution to Sorting Question</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 p-0">
                            <form onSubmit={addItem}>
                                <div className="row">
                                    <div className="col-sm-11 p-1">
                                        <input type="text" className="form-control" id="input"
                                               placeholder="..text" value={text}
                                               onChange={(e) => setText(e.target.value)}/>
                                    </div>

                                    <div className="col-sm-1 p-0">
                                        <button type="submit" className="btn btn-primary">Go!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {!toggle &&
                        <div className="col-sm-1 p-0 m-0">
                            <button className="btn btn-success" onClick={() => sortAscendingOrder()}>A</button>
                        </div>
                        }
                        {toggle &&
                        <div className="col-sm-1 p-0 m-0">
                            <button className="btn btn-danger" onClick={() => sortDescendingOrder()}>D</button>
                        </div>
                        }
                    </div>
                    <br/>
                    {items.length > 0 &&
                    <div style={{float: "left"}}>
                        <h5>List of Items</h5>
                        <ul>
                            {
                                items.map((itm,index) => {
                                    return (
                                        <li key={index}>{itm}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Sorting;
