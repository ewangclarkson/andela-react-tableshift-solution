import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Andela = ({sdlc}) => {
    let map = new Map(sdlc.map((item) => [item, []]));
    const [lifeCycle, setLifeCycle] = useState(map);
    const [text, setText] = useState('');
    const [toggle,setToggle] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            let item = lifeCycle.get(sdlc[0]);
            item.push(text);
            lifeCycle.set(sdlc[0], item);
            setLifeCycle(lifeCycle);
            //setToggle(!toggle);
            setText('');
        }
    }

    const rightShiftItems = (item, key) => {
        let items = lifeCycle.get(key).filter((itm)=> itm !=item);
        lifeCycle.set(key,items);
        const index = sdlc.indexOf(key);
        if(index<sdlc.length-1){
            const nextKey = sdlc[index+1];
            let nextItems = lifeCycle.get(nextKey);
            lifeCycle.set(nextKey,getItems(nextItems,item))
        }
        setLifeCycle(lifeCycle);
        setToggle(!toggle);
    }
    const leftShiftItems = (item, key) => {
        let items = lifeCycle.get(key).filter((itm)=> itm !=item);
        lifeCycle.set(key,items);
        const index = sdlc.indexOf(key);
        if(index>0){
            const prevKey = sdlc[index-1];
            let nextItems = lifeCycle.get(prevKey);
            lifeCycle.set(prevKey,getItems(nextItems,item))
        }
        setLifeCycle(lifeCycle);
        setToggle(!toggle);
    }
    const getItems =(items,element) =>{
        items.push(element);
        return items;
    }

    return (
        <div className="container"><br/>
            <div className="card">
                <div className="card-header">
                    <h6 className="card-title">Solution to Andela Question</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-6 p-0">
                                <input type="text" className="form-control" id="input"
                                       placeholder="..text" value={text} onChange={(e) => setText(e.target.value)}/>
                            </div>
                            <div className="col-sm-1 p-0">
                                <button type="submit" className="btn btn-primary">Go!</button>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <h5 style={{position: "absolute", left: "0", margin: "1px"}}>Shift Action Sections</h5><br/>
                    <div className="row">
                        {
                            [...lifeCycle].map(([key, value], index) => {
                                return (
                                    <>
                                        <div style={{width: "20%", padding: "0", margin: "0",}} key={'row-test-id-' + new Date().getTime()}>
                                            <div style={{padding: "0", margin: "0", border: "1px solid black"}}>{key}<br/></div>
                                            {
                                                value.length > 0 && <div style={{border: "1px solid black"}}>
                                                    {value.map((item, index) => {
                                                        return (
                                                            <>
                                                                <div key={'data-test-id-' + new Date().getTime()}
                                                                     onClick={() => leftShiftItems(item, key)}
                                                                     onContextMenu={() => rightShiftItems(item,key)}
                                                                     style={{borderBottom: "1px solid black",cursor:"pointer"}}>{item}</div>
                                                            </>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Andela;
