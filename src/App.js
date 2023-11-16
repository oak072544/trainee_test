// Import necessary dependencies
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom';

// Input Page Component
const InputPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    documentDate: '',
    duration: '',
    amount: '',
    place: '',
    idCardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h1>Input Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name + Surname:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Document Date:</label>
          <input type="text" name="documentDate" value={formData.documentDate} onChange={handleChange} />
        </div>
        <div>
          <label>Duration (dd-mmm-yy):</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div>
          <label>Place:</label>
          <input type="text" name="place" value={formData.place} onChange={handleChange} />
        </div>
        <div>
          <label>ID card Number:</label>
          <input type="text" name="idCardNumber" value={formData.idCardNumber} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Report Page Component
const ReportPage = ({ data }) => {
  return (
    <div>
      <h1>Report Page</h1>
      <div>
        <p>Name + Surname: {data.name}</p>
        <p>Document Date: {data.documentDate}</p>
        <p>Duration: {data.duration}</p>
        <p>Amount: {data.amount}</p>
        <p>Place: {data.place}</p>
        <p>ID card Number: {data.idCardNumber}</p>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [reportData, setReportData] = useState(null);

  const handleInputSubmit = (data) => {
    setReportData(data);
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Input Page</Link>
            </li>
            <li>
              <Link to="/report">Report Page</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
        <Route
          path="/"
          exact
          element= {<InputPage onSubmit={handleInputSubmit} />}
        />
        <Route
          path="/report"
          element={<ReportPage data={reportData} />}
        />
        </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
