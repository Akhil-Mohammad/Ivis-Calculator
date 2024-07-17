import React, { useState } from "react";


const CalculatorOnBitrate = () => {
  const [avgVideoBitrate, setAvgVideoBitrate] = useState("");
  const [maxVideoBitrate, setMaxVideoBitrate] = useState("");
  const [audioBitrate, setAudioBitrate] = useState("");
  const [crf, setCrf] = useState("");
  const [segmentTime, setSegmentTime] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("jkbdsbkjbdsjkv;kjdsbvjkbdskjbjkdsbjk");
    const response = await fetch(
      `http://localhost:8080/api/calculateOnBitrate?avgVideoBitrate=${avgVideoBitrate}&maxVideoBitrate=${maxVideoBitrate}&audioBitrate=${audioBitrate}&crf=${crf}&segmentTime=${segmentTime}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avgVideoBitrate,
          maxVideoBitrate,
          audioBitrate,
          crf,
          segmentTime,
        }),
      }
    );
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h3>Calculate Based on Bitrate Parameters</h3>
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px" , textAlign: "right"}}>
                <label htmlFor="avgVideoBitrate">
                  Average Video Bitrate (kbps):
                </label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="avgVideoBitrate"
                  value={avgVideoBitrate}
                  onChange={(e) => setAvgVideoBitrate(e.target.value)}
                  placeholder="Average Video Bitrate (kbps)"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" , textAlign: "right"}}>
                <label htmlFor="maxVideoBitrate">
                  Maximum Video Bitrate (kbps):
                </label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="maxVideoBitrate"
                  value={maxVideoBitrate}
                  onChange={(e) => setMaxVideoBitrate(e.target.value)}
                  placeholder="Maximum Video Bitrate (kbps)"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "right" }}>
                <label htmlFor="audioBitrate">Audio Bitrate (kbps):</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="audioBitrate"
                  value={audioBitrate}
                  onChange={(e) => setAudioBitrate(e.target.value)}
                  placeholder="Audio Bitrate (kbps)"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "right" }}>
                <label htmlFor="crf">CRF:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="crf"
                  value={crf}
                  onChange={(e) => setCrf(e.target.value)}
                  placeholder="CRF"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "right" }}>
                <label htmlFor="segmentTime">Segment Time (seconds):</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  type="number"
                  id="segmentTime"
                  value={segmentTime}
                  onChange={(e) => setSegmentTime(e.target.value)}
                  placeholder="Segment Time (seconds)"
                  style={{ width: "100%" }}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

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
      {result && (
        <div style={{ marginTop: "50px" }}>
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
              marginTop: "20px",
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
                  File Size per Minute
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.fileSizeMinute} MB
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
                  Storage per Hour
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storageHour} MB
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
                  Storage per Day
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storageDay} GB
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
                  Storage per Quarter
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storageQuarter} GB
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
                  Storage per Year
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.storageYear} GB
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
                  Size of One Segment
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {result.segmentSize} MB
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculatorOnBitrate;
