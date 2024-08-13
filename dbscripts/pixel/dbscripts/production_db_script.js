db.tenants.insertOne({
  title: 'Pixel',
  name: 'Pixel',
  tenantHost: 'https://tenant-generic.production-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/Pixel',
  apiAuth: {},
  hasApis: false,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: [],
    },   
    {
      category: 'Integration Type', 
      value: 'Integration_Type',
      tags: [],
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
  github: 'pixel',
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
      value: 'main',
      available: true,
      hasApis: false,
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