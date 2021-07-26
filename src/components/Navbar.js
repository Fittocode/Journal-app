import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <nav>
                <form>
                    <span className="label">
                        <label htmlFor="search">Search by:</label>
                    </span>
                    <span className="label">
                        <select value={this.props.selectorValue} onChange={this.props.handleSelectorChange}>
                            <option value="title">Title</option>
                            <option value="content">Content</option>
                            <option value="keyword">Keyword</option>
                        </select>
                    </span>
                    <span className="label">
                        <input type="text" value={this.props.search} onChange={this.props.handleSearchChange} />
                    </span>
                </form>
            </nav>
        )
    }
}

export default Navbar