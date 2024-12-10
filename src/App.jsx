import './App.css'
import { useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/ProductPage');
  }

  return (
    <>
      <h1>Conference Expense Planner</h1>
      <h2>Plan your next major event with us</h2>
      <button onClick={handleRedirect}>Get Started</button>
      <div>
        <p>Welcome to Finesse Planner, your trusted partner in conference expense management. We understand the importance of efficient budget oversight when organizing events. </p>
        <p>With a commitment to innovation, we empower organizers to take charge of their finances. Our intuitive, cloud-based platform provides tailored solutions to streamline budgeting, expense tracking, and reporting.
        </p>
        <p>Whether managing a large conference or a small meeting, Finesse Planner offers features to make your planning process effortless. Experience the power of efficient financial control and focus on delivering exceptional experiences.</p>
      </div>
    </>
  )
}

export default App
