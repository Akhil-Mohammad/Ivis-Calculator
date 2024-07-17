import React, { useState } from "react";

const CalculateStorageAndBandwidth = () => {
  const [numCameras, setNumCameras] = useState("");
  const [bitrateKbps, setBitrateKbps] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const response = await fetch(
        `http://localhost:8080/api/calculateStorageAndBandwidth?numCameras=${numCameras}&bitrateKbps=${bitrateKbps}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            numCameras: parseInt(numCameras),
            bitrateKbps: parseInt(bitrateKbps),
          }),
        }
      );
      if (!response.ok) {
        // Capture error response
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Calculate Storage & Bandwidth</h3>
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px" , textAlign: "right"}}>
                <label htmlFor="numCameras">
                  Number of Cameras:
                </label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="numCameras"
                  value={numCameras}
                  onChange={(e) => setNumCameras(e.target.value)}
                  placeholder="Number of Cameras"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "right"}}>
                <label htmlFor="bitrateKbps">
                  Bitrate (kbps):
                </label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="bitrateKbps"
                  value={bitrateKbps}
                  onChange={(e) => setBitrateKbps(e.target.value)}
                  placeholder="Bitrate (kbps)"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br/>
        <button type="submit" style={{
             padding: "10px 20px",
             cursor: "pointer",
             backgroundColor: "#007bff",
            color: "white",
             borderRadius: "4px",
             fontSize: "1rem",
             transition: "background-color 0.3s ease"
        
         }}>Calculate</button>
      </form>
      <br />
      {error && (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p>
        </div>
      )}
      <br />
      {result && (
        <div style={{ marginTop: "92px" }}>
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Parameter
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Storage per day per camera
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storagePerDayPerCamera} MB
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Storage for 30 days per camera
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storagePerHourPerCamera} MB
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Total storage for 1 camera over 30 days
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.totalStorageForOneCameraOver30Days} GB
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Bandwidth Gbps
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.bandwidthGbps} GB
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  Bandwidth Mbps
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.bandwidthMbps} GB
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculateStorageAndBandwidth;
