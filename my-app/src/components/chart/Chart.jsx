import './chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Chart(){
    const data = [
       {name:'january',Total:1200},
       {name:'Febaury',Total:1600},
       {name:'March',Total:1200},
       {name:'April',Total:1200},
       {name:'May',Total:1200},
      ];
      
    return(
        <div className='chart'>
        <div className='title'>Last six month</div>
               <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
export default Chart;