import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
