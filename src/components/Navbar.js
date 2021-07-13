import React, { Component } from 'react'
// style
import styled from 'styled-components'

class Navbar extends Component {

    render() {
        return (
            <StyledNavbar>
                <form>
                    <StyledLabel>
                        <label htmlFor="search">Search</label>
                    </StyledLabel>
                    <input type="text" value={this.props.search} onChange={this.props.handleSearchChange} />
                </form>
            </StyledNavbar>
        )
    }
}

const StyledNavbar = styled.div`
    display: fixed;
    margin: 0;
    background-color: #4e4e4e;
    height: 2.5rem;
    padding-left: 20%;
    padding-top: 1rem;
`

const StyledLabel = styled.span`
    color: white;
    padding-right: .5rem;
`

export default Navbar