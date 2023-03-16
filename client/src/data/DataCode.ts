interface interfaceDataCodes {
  [key: string]: string
}

export const DataCodes: interfaceDataCodes = {
  'SP.POP.TOTL': 'Population total',
  'SP.POP.GROW': 'Population growth (annual %)',
  'SP.DYN.LE00.IN': 'Life expectancy at birth, total (years)',
  'SL.UEM.TOTL.ZS':
    'Unemployment, total (% of total labor force) (modeled ILO estimate)',
  'NY.GDP.MKTP.CD': 'GDP (current US$)',
  'NY.GDP.PCAP.CD': 'GDP per capita (current US$)',
}
