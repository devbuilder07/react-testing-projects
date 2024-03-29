import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.scss';
const Navigation = () => {
    return (
        <div>
            <Fragment>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                        <div>
                            <Logo className='logo' />
                        </div>
                    </Link>
                    <div className='nav-links-container'>
                        <Link className='nav-link' to='/shop'>
                            SHOP
                        </Link>
                        <Link className='nav-link' to='/sign-in'>
                            SIGN IN
                        </Link>
                    </div>
                </div>
                <Outlet />
            </Fragment>
        </div>
    )
}

export default Navigation;