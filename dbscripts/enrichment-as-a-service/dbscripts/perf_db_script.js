db.tenants.insertOne({
  title: 'Enrichment as a Service',
  name: 'EnrichmentasaService',
  tenantHost: 'https://tenant-generic.perf-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/EnrichmentasaService',
  apiAuth: {},
  hasApis: true,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ['North America'],
    },   
    {
      category: 'Integration Type', 
      value: 'Integration_Type',
      tags: ['restful','sdk'],
    },  
    {
      category: 'Industry', 
      value: 'Industry',
      tags: [],
    },    
    {
      category: 'Customer Segment', 
      value: 'Customer_Segment',
      tags: [],
    },    
  ],   
  active: true,
  betaTag: false,
  internalTag: false,
  github: 'enrichmentasa-service',
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
})