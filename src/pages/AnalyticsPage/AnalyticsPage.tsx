import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useAction from 'hooks/useAction';
import {
  firebaseGetAllLikesAnalytics,
  firebaseRemoveExtraKeysAllLikesAnalytics,
} from 'models/analytics/reducer';
import useSelector from 'hooks/useSelector';
import { likesAnalyticsDataSelector } from 'models/analytics/selectors';
import { lineData, options } from 'pages/AnalyticsPage/likesLineGraphsOptions';
import Loader from 'components/Loader';
import S from './AnalyticsPage.styled';

const AnalyticsPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const removeExtraKeys = useAction(firebaseRemoveExtraKeysAllLikesAnalytics);
  const getDataAnalytics = useAction(firebaseGetAllLikesAnalytics);
  const { keysRemove, likesAnalyticsData } = useSelector(
    likesAnalyticsDataSelector
  );
  const [graphData, setGraphData] = useState([]);
  const { labels, dataGraph } = likesAnalyticsData;
  const [graphLabels, setGraphLabels] = useState([]);

  useEffect(() => {
    if (keysRemove.length !== 0) {
      removeExtraKeys(keysRemove);
    }
  }, [keysRemove]);

  useEffect(() => {
    setIsLoad(true);
    getDataAnalytics();
  }, []);

  useEffect(() => {
    if (dataGraph) {
      setGraphData(dataGraph);
      setGraphLabels(labels);
      setIsLoad(false);
    }
  }, [labels, dataGraph]);

  return (
    <S.Content>
      <S.Graphics>
        <S.GraphicsBody>
          {isLoad ? (
            <Loader
              color="red"
              position="absolute"
              top="50"
              left="50"
              translate="translate(-50%, -50%)"
            />
          ) : (
            <Line data={lineData(graphLabels, graphData)} options={options} />
          )}
        </S.GraphicsBody>
      </S.Graphics>
    </S.Content>
  );
};

export default AnalyticsPage;
