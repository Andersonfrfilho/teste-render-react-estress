import React from 'react';
import LineBar from 'medical-report/components/lineBar';

const maxByHour = values => Math.max(...Object.values(values));

export default function TableBar(props) {
  const values = [
    {
      title: 'Glicemia Média (mg/DL)', color: '#ee4f34', min: 0, max: maxByHour(props.cumulativeByHours.glycemia.average), values: props.cumulativeByHours.glycemia.average,
    },
    {
      title: 'Variab. Glicêmica (CV.) (%)', color: '#ee4f34', min: 0, max: maxByHour(props.cumulativeByHours.glycemia.variabilityCoefficient), values: props.cumulativeByHours.glycemia.variabilityCoefficient,
    },
    {
      title: 'Tempo no Alvo (%)', color: '#ee4f34', min: 0, max: 100, values: props.cumulativeByHours.glycemia.onTarget, percentage: true,
    },
    {
      title: 'Hiperglicemia (%)', color: '#ee4f34', min: 0, max: 100, values: props.cumulativeByHours.glycemia.hyperTime, percentage: true,
    },
    {
      title: 'Hipoglicemia (%)', color: '#ee4f34', min: 0, max: 100, values: props.cumulativeByHours.glycemia.hypoTime, percentage: true,
    },
    {
      title: 'Carboidratos (g)', color: '#ce3b8b', min: 0, max: maxByHour(props.cumulativeByHours.meal.carbs), values: props.cumulativeByHours.meal.carbs,
    },
    {
      title: 'Proteínas (g)', color: '#ce3b8b', min: 0, max: maxByHour(props.cumulativeByHours.meal.prot), values: props.cumulativeByHours.meal.prot,
    },
    {
      title: 'Gorduras (g)', color: '#ce3b8b', min: 0, max: maxByHour(props.cumulativeByHours.meal.fats), values: props.cumulativeByHours.meal.fats,
    },
    {
      title: 'Energia (kcal)', color: '#ce3b8b', min: 0, max: maxByHour(props.cumulativeByHours.meal.kcal), values: props.cumulativeByHours.meal.kcal,
    },
    {
      title: 'Insulina Bolus (U)', color: '#47a8a7', min: 0, max: maxByHour(props.cumulativeByHours.bolus), values: props.cumulativeByHours.bolus,
    },
    {
      title: 'Insulina Basal (U)', color: '#47a8a7', min: 0, max: maxByHour(props.cumulativeByHours.basal), values: props.cumulativeByHours.basal,
    },
  ];

  return (
    values.map((item, index) =>
      <LineBar key={index.toString()} title={item.title} color={item.color} min={item.min} max={item.max} values={item.values} percentage={item.percentage} />,
    )
  );
}
