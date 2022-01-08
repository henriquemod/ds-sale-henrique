import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ name, labels, series }: Props) {
  return (
    <div className="base-card pie-chart-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width={400}
        height={400}
        series={series}
      />
    </div>
  );
}

export default PieChartCard;