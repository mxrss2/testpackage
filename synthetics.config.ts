import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://marcomcentral.app.pti.com/JensenMRC/login.aspx?uigroup_id=510232',
      dashboard_url: 'https://bi.pti.com/app/main#/dashboards/5af644319c6ed808b4819d6c?h=false',
      creds: {
        username: 'BI_Test',
        password: 'welcome123'
      }
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: ["us_east"],
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
