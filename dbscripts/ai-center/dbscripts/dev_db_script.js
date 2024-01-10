db.tenants.insertOne({
  title: 'AI Center',
  name: 'AICenter',
  tenantHost: 'https://tenant-generic.dev-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/AICenter',
  apiAuth: {},
  hasApis: false,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ['North America'],
    }, 
    {
      category: 'Customer Segment', 
      value: 'Customer_Segment',
      tags: ['AI resources'],
    },  
  ],   
  active: true,
  betaTag: true,
  internalTag: true,
  github: 'ai-center',
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
});