import React, { useEffect, useState } from "react";
import { MimicLogs } from "../api/api-mimic";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [moreLogs, setMoreLogs] = useState([]);
  const getPreviousLogs = async () => {
    try {
      const data = await MimicLogs.fetchPreviousLogs(0, 60000000, 6);
      setLogs(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPreviousLogs();
  }, []);

  const getLiveLogs = () => {
    const response = MimicLogs.subscribeToLiveLogs(getPreviousLogs);
    console.log(response);
  };

  useEffect(() => {
    getLiveLogs();
  }, []);

  const MessageList = ({ messages }) => {
    return (
      <div style={{ background: "#191970", width: "70%" }}>
        <InfiniteScroll
          dataLength={logs.length}
          next={getLiveLogs}
          inverse={true}
          hasMore={true}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          {messages.map((item) => (
            <div
              key={item.timestamp}
              style={{ display: "flex", flexDirection: "row", width: "75%" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  marginRight: "2px",
                  color: "gray",
                }}
              >
                {item.timestamp}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  marginRight: "2px",
                  color: "#38BDF8",
                }}
              >
                : {item.message}
              </p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  };

  console.log(logs);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MessageList messages={logs} />
    </div>
  );
}
