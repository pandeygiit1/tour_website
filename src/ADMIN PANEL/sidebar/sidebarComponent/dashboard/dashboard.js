import "./dashboard.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls


const Dashboard = () => {
  const [totalArticle, setTotalArticle] = useState(0);
  const [totalTourPackage, setTotalTourPackage] = useState(0);
  const [totalCarRentalVendor, setTotalCarRentalVendor] = useState(0);
  const [totalTourPackageVendor, setTotalTourPackageVendor] = useState(0);
  const [latestCarRentalBookings, setLatestCarRentalBookings] = useState([]);
  const [latestTourPackageBookings, setLatestTourPackageBookings] = useState([]);
  const [totalCarRentalBuyLeads, setTotalCarRentalBuyLeads] = useState(0);
  const [totalTourPackageBuyLeads, setTotalTourPackageBuyLeads] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch data for each card
    const fetchData = async () => {
      try {
        const [
          articleResponse,
          tourPackageResponse,
          carRentalVendorResponse,
          tourPackageVendorResponse,
          carRentalBookingsResponse,
          tourPackageBookingsResponse,
          carRentalBuyLeadsResponse,
          tourPackageBuyLeadsResponse,
          revenueResponse
        ] = await Promise.all([
          axios.get('/api/total-article'),
          axios.get('/api/total-tour-package'),
          axios.get('/api/total-car-rental-vendor'),
          axios.get('/api/total-tour-package-vendor'),
          axios.get('/api/latest-car-rental-bookings'),
          axios.get('/api/latest-tour-package-bookings'),
          axios.get('/api/total-car-rental-buy-leads'),
          axios.get('/api/total-tour-package-buy-leads'),
          axios.get('/api/total-revenue')
        ]);

        setTotalArticle(articleResponse.data.total);
        setTotalTourPackage(tourPackageResponse.data.total);
        setTotalCarRentalVendor(carRentalVendorResponse.data.total);
        setTotalTourPackageVendor(tourPackageVendorResponse.data.total);
        setLatestCarRentalBookings(carRentalBookingsResponse.data);
        setLatestTourPackageBookings(tourPackageBookingsResponse.data);
        setTotalCarRentalBuyLeads(carRentalBuyLeadsResponse.data.total);
        setTotalTourPackageBuyLeads(tourPackageBuyLeadsResponse.data.total);
        setTotalRevenue(revenueResponse.data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboardContainer">
    <div className="dashboard">
      <div className="card">Total Article: {totalArticle}</div>
      <div className="card">Total Tour Package: {totalTourPackage}</div>
      <div className="card">Total Car Rental Vendor: {totalCarRentalVendor}</div>
      <div className="card">Total Tour Package Vendor: {totalTourPackageVendor}</div>
      <div className="card">
        Latest Car Rental Bookings:
        <ul>
          {latestCarRentalBookings.slice(0, 10).map(booking => (
            <li key={booking.id}>{booking.name} - {booking.date}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        Latest Tour Package Bookings:
        <ul>
          {latestTourPackageBookings.slice(0, 10).map(booking => (
            <li key={booking.id}>{booking.name} - {booking.date}</li>
          ))}
        </ul>
      </div>
      <div className="card">Total Car Rental Buy Leads: {totalCarRentalBuyLeads}</div>
      <div className="card">Total Tour Package Buy Leads: {totalTourPackageBuyLeads}</div>
      <div className="card">Total Revenue: {totalRevenue}</div>
    </div>
    {/* <AdminPanel/> */}
    </div>
  );
};

export default Dashboard;