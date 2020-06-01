import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useAction from 'hooks/useAction';
import { firebaseGetAllLikesAnalytics } from 'models/analytics/reducer';
import useSelector from 'hooks/useSelector';
import { likesAnalyticsDataSelector } from 'models/analytics/selectors';
import S from './AnalyticsPage.styled';

const AnalyticsPage = () => {
  const getDataAnalytics = useAction(firebaseGetAllLikesAnalytics);
  const { labels, dataGraph } = useSelector(likesAnalyticsDataSelector);
  const [graphData, setGraphData] = useState([]);
  const [graphLabels, setGraphLabels] = useState([]);

  useEffect(() => {
    getDataAnalytics();
  }, []);

  useEffect(() => {
    setGraphData(dataGraph || []);
    setGraphLabels(labels || []);
  }, [labels, dataGraph]);

  const data = {
    labels: graphLabels,
    datasets: [
      {
        label: 'Total Likes',
        fill: false,
        borderColor: 'blue',
        borderWidth: 2,
        pointRadius: 2,
        data: graphData,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    title: {
      display: true,
      text: 'Likes Analytics',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Likes',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Days',
          },
        },
      ],
    },
  };

  return (
    <S.Content>
      <S.Graphics>
        <S.GraphicsHeader>Title</S.GraphicsHeader>
        <S.GraphicsBody>
          <Line data={data} options={options} />
        </S.GraphicsBody>
      </S.Graphics>
    </S.Content>
  );
};

export default AnalyticsPage;
