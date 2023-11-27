import style from './style.scss';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="upper-footer">
                <div className="contact-info">
                    <h2>Hekto</h2>
                    <div className="details">
                        <input type="text" />
                        <button className="danger-btn"
                            style={{width: '100px', height: '40px'}}
                        >
                            Sign up
                        </button>
                    </div>
                    <p>Contact info</p>
                    <p>17 Princess Road, London, Greayer London NW1 8JR, UK</p>
                </div>
                <div className='categories'>
                    <h3>Categories</h3>
                    <p><Link to={'/#Laptops & Computers'}>Laptops & Computers</Link></p>
                    <p><Link to={'/#Cameras & Photography'}>Cameras & Photography</Link></p>
                    <p><Link to={'/#Smart Phone & Tables'}>Smart Phone & Tables</Link></p>
                    <p><Link to={'/#Video Games & Consoles'}>Video Games & Consoles</Link></p>
                    <p><Link to={'/#Waterproof & Headphones'}>Waterproof & Headphones</Link></p>
                </div>
                <div className='customer-core'>
                    <h3>Custemer Core</h3>
                    <p><Link to={'/#My Account'}>My Account</Link></p>
                    <p><Link to={'/#Discount'}>Discount</Link></p>
                    <p><Link to={'/#Returns'}>Returns</Link>Returns</p>
                    <p><Link to={'/#Orders History'}>Orders History</Link></p>
                    <p><Link to={'/#Order Trasking'}>Order Trasking</Link></p>
                </div>
                <div className='pages'>
                    <h3>Pages</h3>
                    <p><Link to={'/#Blog'}>Blog</Link></p>
                    <p><Link to={'/#Browse the Shop'}>Browse the Shop</Link></p>
                    <p><Link to={'/#Category'}>Category</Link></p>
                    <p><Link to={'/#Pre-Built Pages'}>Pre-Built Pages</Link></p>
                    <p><Link to={'/#WooComerce Pages'}>WooComerce Pages</Link></p>
                </div>

            </div>
        </div>
    )
}