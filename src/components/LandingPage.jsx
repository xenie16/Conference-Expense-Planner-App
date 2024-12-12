import { useNavigate } from 'react-router-dom';

function LandingPage() {
   const navigate = useNavigate();
   const handleRedirect = () => {
      navigate('/ProductPage');
   }

   return (
      <div className="landing-page">
      <div className='landing-page-container'>
        <div className="landing-page-title">
          <h1>Conference Expense Planner</h1>
          <h2>Plan your next major event with us</h2>
          <button className="landing-page-button" onClick={handleRedirect}>Get Started</button>
        </div>
        <div className="landing-page-description">
          <p>Welcome to Finesse Planner, your trusted partner in conference expense management. We understand the importance of efficient budget oversight when organizing events.</p>
          <p>With a commitment to innovation, we empower organizers to take charge of their finances. Our intuitive, cloud-based platform provides tailored solutions to streamline budgeting, expense tracking, and reporting.</p>
          <p>Whether managing a large conference or a small meeting, Finesse Planner offers features to make your planning process effortless. Experience the power of efficient financial control and focus on delivering exceptional experiences.</p>
        </div>
      </div>
    </div>
   )
}

export default LandingPage