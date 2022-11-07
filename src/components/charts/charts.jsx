
import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import cubejs from "@cubejs-client/core";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

const cubejsApi = cubejs('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ2NjY4OTR9.0fdi5cuDZ2t3OSrPOMoc3B1_pwhnWj4ZmM3FHEX7Aus', {
  apiUrl:'https://awesome-ecom.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1'
});

const dateFormatter = (item) => moment(item).format("MMM YY");

class Charts extends Component {
   
  render() {
    return (
      <QueryRenderer
        query={{
          measures: ["Orders.count"],
          timeDimensions: [
            {
              dimension: "Orders.createdAt",
              dateRange: ["2019-01-01", "2020-12-31"],
              granularity: "month"
            }
          ]
        }}
        cubejsApi={cubejsApi}
       
        render={({ resultSet }) => {
            
          if (!resultSet) {
            return "Loading...";
          }

          return (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resultSet.chartPivot()}>
              {console.log(resultSet.chartPivot())}
                <XAxis dataKey="x" tickFormatter={dateFormatter} />
                <YAxis />
                <Tooltip labelFormatter={dateFormatter} />
                <Bar dataKey="Orders.count" fill="rgba(106, 110, 229)" />
              </BarChart>
            </ResponsiveContainer>
          );
        }}
      />
    );
  }
}

export default Charts;
