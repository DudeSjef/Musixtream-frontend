import './App.css';
import React, { useEffect, useState } from "react";
import TestAPI from "./apis/TestAPI.js";

export default function App() {
  const [testData, setTestData] = useState("");

  useEffect(() => {
    TestAPI.log();
    TestAPI.test().then(data => setTestData(data));
  }, []);

  return (
    <div className='testContainer'>
      {testData !== ""
      ?
      <div>
        {testData}
      </div>
      :
      <div>
        No Data
      </div>
      }
    </div>
  );
}
