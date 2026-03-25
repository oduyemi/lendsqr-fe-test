import React from "react";
import { DashboardLayout } from "../../layouts/Dashboard";

export const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h4 className="mb-4">Users</h4>

      <div className="cards">
        <div className="card-box">
          <h6>Users</h6>
          <h4>2,453</h4>
        </div>
        <div className="card-box">
          <h6>Active Users</h6>
          <h4>2,453</h4>
        </div>
        <div className="card-box">
          <h6>Users with Loans</h6>
          <h4>12,453</h4>
        </div>
        <div className="card-box">
          <h6>Users with Savings</h6>
          <h4>102,453</h4>
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date Joined</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>ade@example.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Irorun</td>
              <td>Debby Ogana</td>
              <td>debby2@irorun.com</td>
              <td>08160780928</td>
              <td>April 30, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>Grace Effiom</td>
              <td>grace@lendstar.com</td>
              <td>08160780922</td>
              <td>April 30, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>07003309226</td>
              <td>April 10, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>Grace Effiom</td>
              <td>grace@lendstar.com</td>
              <td>08160780922</td>
              <td>April 30, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>07003309226</td>
              <td>April 10, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>Grace Effiom</td>
              <td>grace@lendstar.com</td>
              <td>08160780922</td>
              <td>April 30, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>07003309226</td>
              <td>April 10, 2020 10:00 AM</td>
              <td><span className="status inactive">Inactive</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};