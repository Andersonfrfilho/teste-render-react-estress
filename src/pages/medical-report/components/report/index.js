import React from 'react';
import {
  Grid,

  Typography,

  colors,
  Avatar,
  TextField,
} from '@material-ui/core';
import moment from 'moment';
import { Chart, Table, ChartLabel } from 'common/components';
import SectionIcon from 'medical-report/components/sectionIcon';
import Property from 'medical-report/components/property';
import FoodTable from 'medical-report/components/foodTable';
import DataQualityTable from 'medical-report/components/dataQualityTable';
import TableBar from 'medical-report/components/tableBar';
import generateChart from 'patient/utils/generateChart';
import { bloodListChart } from 'patient/utils/dataChart';

import UseStyles from './styles';
import _ from 'lodash';

import userLogo from '../sectionIcon/img/user.png';
import glycemiaLogo from '../sectionIcon/img/glycemia.png';
import medicineLogo from '../sectionIcon/img/medicine.png';
import foodLogo from '../sectionIcon/img/food.png';
import activityLogo from '../sectionIcon/img/activity.png';
import qualityLogo from '../sectionIcon/img/quality.png';

const medicalReportChart = (chart, configs) => {
  const { data } = configs;
  chart.scale('value', {
    alias: 'Glicemia (mg/DL)',
    max: 500,
    min: 0,
    tickInterval: 50,
  });

  chart.scale('hour', {
    alias: 'Hora do dia (hh:mm)',
    max: 60 * 24,
    min: 0,
    tickInterval: 60 * 2,
    formatter(val) {
      return `${val / 60}:00`.padStart(5, '0');
    },
  });
  chart.legend(false);
  chart.tooltip(false);
  chart.axis('value', {
    title: {},
  });
  chart.axis('hour', {
    title: {},
    grid: {
      line: {
        style: {
          stroke: '#eeeeee',
          lineWidth: 1,
        },
      },
    },
  });

  const v1 = chart.createView({
    // padding: 32
  });
  v1.data([
    { hour: 0, value: [data.hypo_limit, data.hyper_limit] },
    { hour: 60 * 24, value: [data.hypo_limit, data.hyper_limit] },
  ]);
  v1.area()
    .position('hour*value');

  const targetMax = chart.createView({
    // padding: 32
  });
  targetMax.data([
    { hour: 0, value: data.hypo_limit },
    { hour: 60 * 24, value: data.hypo_limit },
  ]);
  targetMax.line()
    .position('hour*value')
    .shape('smooth')
    .color('#2f5fa8');

  const targetMin = chart.createView({
    // padding: 32
  });
  targetMin.data([
    { hour: 0, value: data.hyper_limit },
    { hour: 60 * 24, value: data.hyper_limit },
  ]);
  targetMin.line()
    .position('hour*value')
    .shape('smooth')
    .color('#2f5fa8');

  const v2 = chart.createView({
    // padding: 32
  });
  v2.data(data.chartData);
  v2.point()
    .position('hour*value')
    .style({
      opacity: 0.7,
    })
    .color('rgba(189, 189, 189, 0.7)')
    .adjust('jitter')
    .shape('circle');
  if (data.boxPlot) {
    const boxPlotMinMax = chart.createView();
    boxPlotMinMax.data(data.median.map(item => ({ hour: item.hour, value: item.boxPlotMinMax })));
    boxPlotMinMax.area()
      .position('hour*value')
      .color('rgba(255, 111, 0, 0.7)');

    const boxPlotQuartile = chart.createView();
    boxPlotQuartile.data(data.median.map(item => ({ hour: item.hour, value: item.boxPlotQuartile })));
    boxPlotQuartile.area()
      .position('hour*value')
      .color('rgba(255, 111, 0, 0.9)');
  }

  const v3 = chart.createView();
  v3.data(data.median);
  v3.line()
    .position('hour*value')
    .shape('smooth')
    .color(colors.amber[900]);

  chart.render();
};

const columns = [
  { id: 'name', label: 'Dia da semana' },
  { id: 'monday', label: 'Segunda' },
  { id: 'tuesday', label: 'Terça' },
  { id: 'wednesday', label: 'Quarta' },
  { id: 'thursday', label: 'Quinta' },
  { id: 'friday', label: 'Sexta' },
  { id: 'saturday', label: 'Sábado' },
  { id: 'sunday', label: 'Domingo' },
];

const diabetes = [
  { id: 1, name: 'Tipo 1' },
  { id: 2, name: 'Tipo 2' },
  { id: 3, name: 'Gestacional' },
  { id: 4, name: 'Outros' },
];
export default function Report(props) {
  const {
    exam,
  } = props.patient;
  const {
    patient,
    glycemia,
    meal,
    insulin,
    data_quality,
    weeklyCycle,
    cumulativeByHours,
    graphicData,
    reportByDay,
    physicalActivity,
  } = props.report;
  const classes = UseStyles();
  const tableData = [
    {
      name: 'Glicemia Média (mg/DL)',
      ...weeklyCycle.glycemia.average,
    },
    {
      name: 'Variab. Glicêmica (CV.) (%)',
      ...weeklyCycle.glycemia.variabilityCoefficient,
    },
    {
      name: 'Tempo no alvo (%)',
      ...weeklyCycle.glycemia.on_target,
    },
    {
      name: 'Tempo em Hiperglicemia (%)',
      ...weeklyCycle.glycemia.hyper_time,
    },
    {
      name: 'Tempo em Hipoglicemia (%)',
      ...weeklyCycle.glycemia.hypo_time,
    },
    {
      name: 'Refeições (registro/dia)',
      ...weeklyCycle.meals.registers,
    },
    {
      name: 'Carboidratos (g)',
      ...weeklyCycle.meals.carbs,
    },
    {
      name: 'Proteínas (g)',
      ...weeklyCycle.meals.prot,
    },
    {
      name: 'Gorduras (g)',
      ...weeklyCycle.meals.fats,
    },
    {
      name: 'Energia (kcal)',
      ...weeklyCycle.meals.kcal,
    },
    {
      name: 'Injeção Bolus (registros/dia)',
      ...weeklyCycle.bolus.registers,
    },
    {
      name: 'Insulina Bolus (U/dia)',
      ...weeklyCycle.bolus.total,
    },
    {
      name: 'Injeção Basal (registros/dia)',
      ...weeklyCycle.basal.registers,
    },
    {
      name: 'Insulina Basal (U/dia)',
      ...weeklyCycle.basal.total,
    },
  ];
  const renderReportByDay = () => reportByDay.map((data, i) => (
    <Grid key={i.toString()} container >
      <Grid
        container
        style={{ marginTop: 30, marginBottom: 30 }}
        direction="column"
        alignItems="stretch"
        spacing={1}
      >
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={1}

        >
          <Grid
            item
            xs={1}
          >

            <Avatar
              className={classes.large}
              src={glycemiaLogo}
            />
          </Grid>
          <Grid
            item
            xs={11}
          >
            <Typography
              className={classes.glicemicCicleTitle}
            >
          Ciclo diário de Glicemia - {moment(data.date).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid
            item
            xs={10}
          >

            <Chart
              chartId={`chartMedicalReport${i}`}
              operation={medicalReportChart}
              data={() => []}
              width={780}
              height={500}
              configs={{
                data: {
                  chartData: data.graphicData.data,
                  hypo_limit: glycemia.hypo_limit,
                  hyper_limit: glycemia.hyper_limit,
                  median: data.graphicData.median,
                },
              }}
              newDataViews
              padding={[5, 10, 25, 25]}
            />
          </Grid>
        </Grid>
      </Grid>
      <TableBar
        cumulativeByHours={{
          glycemia: data.glycemia,
          meal: data.meal,
          bolus: data.bolus,
          basal: data.basal,
        }}
      />
    </Grid>
  ));
  return (
    <Grid item xs={12} style={{ marginTop: 50 }}>
      <Grid container >
        <SectionIcon
          color={colors.grey[300]}
          src={userLogo}
        />
        <Grid item xs={5}>
          <Property
            label="Paciente"
            value={patient.name}
            labelStyle={classes.bold}
          />
          <Property
            label="Início"
            value={moment(props.reportStartDate).format('DD/MM/YYYY')}
            labelStyle={classes.bold}
          />
          <Property
            label="Fim"
            value={moment(props.reportEndDate).format('DD/MM/YYYY')}
            labelStyle={classes.bold}
          />
          <Property
            label="Dias"
            value={moment(props.reportEndDate).diff(moment(props.reportStartDate), 'days') + 1}
            labelStyle={classes.bold}
          />
          <Property
            label="Diabetes"
            value={diabetes.find(item => item.id === patient.diabetes)?.name}
            labelStyle={classes.bold}
          />
          <Property
            label="Sexo"
            value={patient.gender || '-'}
            labelStyle={classes.bold}
          />
          <Property
            label="Nascimento"
            value={patient.born_date ? moment(patient.born_date).format('DD/MM/YYYY') : '-'}
            labelStyle={classes.bold}
          />
          <Property
            label="Idade"
            value={patient.age}
            labelStyle={classes.bold}
          />
          <Property
            label="Peso"
            value={patient.weight ? `${Number(patient.weight).toFixed(1)} kg` : '-'}
            labelStyle={classes.bold}
          />
          <Property
            label="Altura"
            value={patient.height ? `${patient.height} cm` : '-'}
            labelStyle={classes.bold}
          />
          <Property
            label="IMC"
            value={patient.weight && patient.height ? patient.imc : '-'}
            labelStyle={classes.bold}
          />
        </Grid>
        <Grid container alignItems="center">
          <SectionIcon
            color={colors.amber[900]}
            src={glycemiaLogo}
            label="Glicemia"
          />
          <Grid item xs={5}>
            <Property
              label="Glicemia Média"
              value={`${Math.round(glycemia.average)} mg/DL`}
              labelStyle={classes.bold}
              valueStyle={classes.bold}
            />
            <Property
              label="Variab. Glicêmica (CV)"
              value={glycemia.variabilityCoefficient}
              labelStyle={classes.italic}
              valueStyle={classes.italic}
            />
            <Property
              label="Limite Hiperglicemia"
              value={`${glycemia.hyper_limit} mg/DL`}
              labelStyle={classes.italic}
              valueStyle={classes.italic}
            />
            <Property
              label="Limite Hipoglicemia"
              value={`${glycemia.hypo_limit} mg/DL`}
              labelStyle={classes.italic}
              valueStyle={classes.italic}
            />
            <Property
              label="eA1c"
              value={`${glycemia.eA1c}%`}
              labelStyle={classes.italic}
              valueStyle={classes.italic}
            />
            <Property
              label="GMI"
              value={`${glycemia.GMI}%`}
              labelStyle={classes.italic}
              valueStyle={classes.italic}
            />
          </Grid>
          <Grid item xs={5}>
            <ChartLabel {...glycemia.time_on_target_levels} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <SectionIcon
          color={colors.red[500]}
          src={foodLogo}
          label="Alimentação"
        />
        <Grid item xs={10}>
          <FoodTable
            data={meal}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.section} alignItems="center">
        <Grid item xs={5}>
          <Grid container className={classes.section} alignItems="center">
            <SectionIcon
              color={colors.cyan[600]}
              src={medicineLogo}
              label="Medicamentos"
            />
            <Grid item xs={6}>
              <Property
                label="Insulina Bolus"
                value={insulin.bolus ? `${insulin.bolus} U/dia` : '-'}
                labelStyle={classes.bold}
              />
              <Property
                label="Insulina Basal"
                value={insulin.basal ? `${insulin.basal} U/dia` : '-'}
                labelStyle={classes.bold}
              />
              <Typography>
                * Dose diária média
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container className={classes.section} alignItems="center">
            <SectionIcon
              color={colors.blue[400]}
              src={activityLogo}
              label="Atividade Física"
            />
            <Grid item xs={6}>
              <Property
                label="Gasto energético médio"
                value={physicalActivity.disabled ? physicalActivity.caloriesBurnAverage : '-'}
                labelStyle={classes.bold}
              />
              <Property
                label="Taxa metab. Basal"
                value={physicalActivity.disabled ? physicalActivity.basalMetabolicRate : '-'}
                labelStyle={classes.bold}
              />
              <Property
                label="Gasto energético em Atividade"
                value={physicalActivity.disabled ? physicalActivity.energyExpenditure : '-'}
                labelStyle={classes.bold}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.section} alignItems="center">
        <SectionIcon
          color={colors.grey[800]}
          src={qualityLogo}
          label="Qualidade dos dados"
        />
        <Grid item xs={10}>
          <DataQualityTable
            data={data_quality}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Typography>Anotações:</Typography>
        <TextField
          name="info"
          className={classes.textArea}
          rows={5}
          variant="outlined"
          multiline
          onChange={(event) => {
            props.setInfo(event.target.value);
          }}
        />
      </Grid>
      <Grid
        container
        style={{ marginTop: 30, marginBottom: 30 }}
        direction="column"
        alignItems="stretch"
        spacing={1}
      >
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={1}
        >
          <Grid
            item
            xs={1}
          >

            <Avatar
              className={classes.large}
              src={glycemiaLogo}
            />
          </Grid>
          <Grid
            item
            xs={11}
          >
            <Typography
              className={classes.glicemicCicleTitle}
            >
            Ciclo diário de Glicemia (Mediana ao longo das horas do dia)
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid
            item
            xs={10}
          >

            <Chart
              chartId="chartMedicalReport"
              operation={medicalReportChart}
              data={() => []}
              width={780}
              height={500}
              configs={{
                data: {
                  chartData: graphicData.data,
                  hypo_limit: glycemia.hypo_limit,
                  hyper_limit: glycemia.hyper_limit,
                  median: graphicData.median,
                  boxPlot: true,
                },
              }}
              padding={[20, 20, 50, 50]}
              newDataViews
            />
          </Grid>
        </Grid>
        <TableBar
          cumulativeByHours={cumulativeByHours}
        />
        <Grid>
          <Typography
            className={classes.weeklyCycleTitle}
          >
            Ciclo de Glicemia semanal
          </Typography>
          <Table
            columns={columns}
            data={tableData}
            noFooter
          />
        </Grid>
      </Grid>
      {
        reportByDay.length ? renderReportByDay() : null
      }
    </Grid>
  );
}
