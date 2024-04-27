import * as echarts from "echarts/core";

const optionTemeperature = {
    title: {
      text: 'Temperature Change in the Coming Week'
    },
    tooltip: {
      textStyle: {
        fontSize: 10, // Tamaño del texto del tooltip
      },
      
    },
    
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
          "name": "AMAZONAS",
          "data": [
              24.85,
              24.58,
              25.06,
              25.17,
              24.86,
              24.64,
              24.60
          ],
          type: 'line',
          
      },
      {
          "name": "ANTIOQUIA",
          "data": [
              19.51,
              19.92,
              20.04,
              19.66,
              19.92,
              20.07,
              19.86
          ],
          type: 'line',
          
      },
      {
          "name": "ARAUCA",
          "data": [
              3.557,
              3.661,
              3.588,
              3.709,
              3.792,
              3.820,
              3.613
          ],
          type: 'line',
          
      },
      {
          "name": "ATLANTICO",
          "data": [
              28.01,
              28.04,
              28.32,
              28.35,
              28.00,
              27.72,
              27.97
          ],
          type: 'line',
          
      },
      {
          "name": "BOGOTA",
          "data": [
              13.83,
              14.02,
              14.14,
              14.13,
              14.12,
              14.03,
              13.87
          ],
          type: 'line',
          
      },
      {
          "name": "BOLIVAR",
          "data": [
              28.27,
              28.37,
              28.59,
              28.62,
              28.37,
              28.13,
              28.33
          ],
          type: 'line',
         
      },
      {
          "name": "BOYACA",
          "data": [
              10.51,
              10.78,
              10.85,
              10.60,
              10.89,
              11.04,
              10.84
          ],
          type: 'line',
          
      },
      {
          "name": "CALDAS",
          "data": [
              20.32,
              20.62,
              20.76,
              20.39,
              20.74,
              20.93,
              20.72
          ],
          type: 'line',
          
      },
      {
          "name": "CAQUETA",
          "data": [
              23.95,
              24.17,
              24.31,
              24.22,
              24.15,
              24.07,
              23.99
          ],
          type: 'line',
          
      },
      {
          "name": "CASANARE",
          "data": [
              24.07,
              24.27,
              24.29,
              24.40,
              24.21,
              24.04,
              24.09
          ],
          type: 'line',
          
      },
      {
          "name": "CAUCA",
          "data": [
              20.94,
              21.21,
              21.27,
              20.98,
              21.22,
              21.30,
              21.11
          ],
          type: 'line',
          
      },
      {
          "name": "CESAR",
          "data": [
              28.16,
              28.30,
              28.41,
              28.52,
              28.31,
              28.10,
              28.21
          ],
          type: 'line',
          
      },
      {
          "name": "CHOCO",
          "data": [
              24.52,
              24.77,
              24.91,
              24.68,
              24.78,
              24.83,
              24.68
          ],
          type: 'line',
         
      },
      {
          "name": "CORDOBA",
          "data": [
              27.84,
              27.98,
              28.17,
              28.19,
              27.98,
              27.70,
              27.93
          ],
          type: 'line',
         
      },
      {
          "name": "CUNDINAMARCA",
          "data": [
              16.48,
              16.72,
              16.78,
              16.60,
              16.69,
              16.61,
              16.45
          ],
          type: 'line',
          
      },
      {
          "name": "GUAINIA",
          "data": [
              27.65,
              27.85,
              27.86,
              27.94,
              27.78,
              27.58,
              27.59
          ],
          type: 'line',
         
      },
      {
          "name": "GUAVIARE",
          "data": [
              27.08,
              27.27,
              27.27,
              27.40,
              27.16,
              27.02,
              27.06
          ],
          type: 'line',
          
      },
      {
          "name": "HUILA",
          "data": [
              20.58,
              20.92,
              20.99,
              20.73,
              21.01,
              21.12,
              20.92
          ],
          type: 'line',
          
      },
      {
          "name": "LA GUAJIRA",
          "data": [
              27.85,
              27.94,
              28.06,
              28.14,
              27.90,
              27.65,
              27.80
          ],
          type: 'line',
          
      },
      {
          "name": "MAGDALENA",
          "data": [
              27.74,
              27.79,
              27.99,
              28.01,
              27.73,
              27.51,
              27.69
          ],
          type: 'line',
          
      },
      {
          "name": "META",
          "data": [
              24.61,
              24.79,
              24.90,
              24.97,
              24.71,
              24.51,
              24.61
          ],
          type: 'line',
          
      },
      {
          "name": "NARIÑO",
          "data": [
              21.75,
              22.04,
              22.17,
              21.89,
              22.08,
              22.15,
              21.95
          ],
          type: 'line',
          
      },
      {
          "name": "NORTE DE SANTANDER",
          "data": [
              26.64,
              26.85,
              27.00,
              27.05,
              26.87,
              26.68,
              26.79
          ],
          type: 'line',
          
      },
      {
          "name": "PUTUMAYO",
          "data": [
              24.25,
              24.42,
              24.50,
              24.45,
              24.37,
              24.27,
              24.23
          ],
          type: 'line',
          
      },
      {
          "name": "QUINDIO",
          "data": [
              20.77,
              21.00,
              21.09,
              20.79,
              21.05,
              21.20,
              21.01
          ],
          type: 'line',
          
      },
      {
          "name": "RISARALDA",
          "data": [
              21.33,
              21.55,
              21.67,
              21.33,
              21.63,
              21.81,
              21.60
          ],
          type: 'line',
          
      },
      {
          "name": "SAN ANDRES Y PROVIDENCIA",
          "data": [
              26.48,
              26.60,
              26.66,
              26.71,
              26.55,
              26.40,
              26.39
          ],
          type: 'line',
          
      },
      {
          "name": "SANTANDER",
          "data": [
              22.49,
              22.77,
              22.92,
              22.77,
              22.87,
              22.72,
              22.55
          ],
          type: 'line',
          
      },
      {
          "name": "SUCRE",
          "data": [
              27.73,
              27.89,
              28.09,
              28.17,
              27.92,
              27.63,
              27.86
          ],
          type: 'line',
          
      },
      {
          "name": "TOLIMA",
          "data": [
              24.47,
              24.74,
              24.83,
              24.61,
              24.81,
              24.97,
              24.77
          ],
          type: 'line',
          
      },
      {
          "name": "VALLE DEL CAUCA",
          "data": [
              25.77,
              26.08,
              26.16,
              25.96,
              26.09,
              26.15,
              25.98
          ],
          type: 'line',
          
      },
      {
          "name": "VAUPES",
          "data": [
              26.12,
              26.27,
              26.26,
              26.29,
              26.16,
              25.98,
              25.97
          ],
          type: 'line',
          
      },
      {
          "name": "VICHADA",
          "data": [
              27.04,
              27.22,
              27.34,
              27.40,
              27.17,
              26.97,
              27.03
          ],
          type: 'line',
          
      }
  ]
}

export { optionTemeperature };
