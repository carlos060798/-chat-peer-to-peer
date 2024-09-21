import  {Link} from 'react-router-dom';

function  HomePage(){
    return (
        <div className="container text-center mt-5">
            <h3>Welcome to the Currency Converter</h3>
            <p>You can convert any currency to any other currency</p>
            <Link to="/login" className="btn text-white" style={{ backgroundColor: '#25D366' }}>
                Get Started
            </Link>
        </div>
    )
}

export default HomePage;