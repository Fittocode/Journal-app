import React from 'react'
// style
import styled from 'styled-components'

const Navbar = () => {
    return (
        <StyledNavbar>
            <form>
                <label htmlFor="search">search</label>
                <input type="text" />
            </form>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
    display: fixed;
    margin: 0;
    background-color: #4e4e4e;
    height: 4rem;
`

export default Navbar