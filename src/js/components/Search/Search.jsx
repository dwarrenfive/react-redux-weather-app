import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="btn-group btn-group" role="group">
                    <button type="button" className="btn btn-info">San Diego</button>
                    <button type="button" className="btn btn-info">New York</button>
                    <button type="button" className="btn btn-info">Tokyo</button>
                    <button type="button" className="btn btn-info">Washington D.C.</button>
                    <button type="button" className="btn btn-info">London</button>
                </div>
                <form>
                    <div className='form-group'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="San Diego" />
                            <span className='btn input-group-addon'>Go!</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
