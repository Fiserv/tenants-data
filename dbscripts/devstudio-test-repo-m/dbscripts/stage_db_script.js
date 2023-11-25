db.tenants.insertOne({
  title: 'devstudio-test-repo-m',
  name: 'devstudio-test-repo-m',
  tenantHost: 'https://tenant-generic.stage-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/devstudio-test-repo-m',
  apiAuth: {},
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ['North America','EMEA','LATAM','APAC'],
    },   
    {
      category: 'Integration Type', 
      value: 'Integration Type',
      tags: ['restful'],
    },  
    {
      category: 'Industry', 
      value: 'Industry',
      tags: ['Retail, Banking'],
    },    
  ],   
  active: true,
  betaTag: true,
  internalTag: false,
  github: 'devstudio-test-repo-m',
  selfServiceFeatures: [
    {
      featureName: 'Explore documentation',
      featureUrl: 'Support/docs/?path=docs/explore-documentation.md',
      active: true,
    },
    {
      featureName: 'API experimentation with Runbox',
      featureUrl: 'Support/docs/?path=docs/try-out-the-api-sandbox.md',
      active: false,
    },
    {
      featureName: 'Generate Credentials',
      featureUrl: '',
      active: false,
    },
    {
      featureName: 'Testing & Certification',
      featureUrl: '',
      active: false,
    },
  ], 
  gitHubFeatureBranches: [
    {
      name: 'active',
      value: 'develop',
      available: true,
      hasApis: true, 
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun', 
    },
    {
      name: 'previous',
      value: 'previous',
      available: false,
      hasApis: false,
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun', 
    },
    {
      name: 'preview',
      value: 'preview',
      available: false,
      hasApis: false,
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun', 
    }
  ]
});