db.tenants.insertOne({
  title: 'm-SiTef Integration',
  name: 'mSiTefIntegration',
  tenantHost: 'https://tenant-generic.production-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/mSiTefIntegration',
  apiAuth: {},
  hasApis: true,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ["LATAM"],
    },    
    {
      category: 'Customer Segment', 
      value: 'Customer_Segment',
      tags: ["SMB","Enterprise"],
    },    
    {
      category: 'Capability', 
      value: 'Capability',
      tags: ["Value Added Services"],
    },
  ],   
  active: true,
  betaTag: false,
  internalTag: false,
  github: 'm-sitef-integration',
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
  ],
  contactSales: false,
})